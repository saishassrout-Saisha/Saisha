// Simple local storage database for contact submissions
// In production, replace this with a proper database (MongoDB, PostgreSQL, etc.)

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  timestamp: number;
  ipAddress?: string;
}

const DB_KEY = 'contact_submissions';
const RATE_LIMIT_KEY = 'submission_tracker';

// Get all submissions
export const getSubmissions = (): ContactSubmission[] => {
  try {
    const data = localStorage.getItem(DB_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

// Add new submission
export const addSubmission = (submission: Omit<ContactSubmission, 'id' | 'timestamp'>): ContactSubmission => {
  const newSubmission: ContactSubmission = {
    ...submission,
    id: generateId(),
    timestamp: Date.now(),
  };

  const submissions = getSubmissions();
  submissions.push(newSubmission);
  
  try {
    localStorage.setItem(DB_KEY, JSON.stringify(submissions));
  } catch (error) {
    console.error('Failed to save submission:', error);
  }

  return newSubmission;
};

// Check rate limiting
export const checkRateLimit = (email: string, phone?: string): boolean => {
  const identifier = email + (phone || '');
  const now = Date.now();
  const RATE_LIMIT = 3; // Max 3 submissions per hour
  const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

  try {
    const data = localStorage.getItem(RATE_LIMIT_KEY);
    const tracker = data ? JSON.parse(data) : {};
    
    const submissions = tracker[identifier] || [];
    
    // Remove old submissions outside the window
    const recentSubmissions = submissions.filter((time: number) => now - time < RATE_LIMIT_WINDOW);
    
    if (recentSubmissions.length >= RATE_LIMIT) {
      return false; // Rate limit exceeded
    }

    // Add current submission to tracker
    recentSubmissions.push(now);
    tracker[identifier] = recentSubmissions;
    
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(tracker));
    return true; // Within rate limit
  } catch (error) {
    console.error('Rate limit check failed:', error);
    return true; // Allow submission if there's an error
  }
};

// Generate unique ID
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Get submissions count for admin
export const getSubmissionStats = () => {
  const submissions = getSubmissions();
  const now = Date.now();
  const ONE_DAY = 24 * 60 * 60 * 1000;
  const ONE_WEEK = 7 * ONE_DAY;

  return {
    total: submissions.length,
    today: submissions.filter(s => now - s.timestamp < ONE_DAY).length,
    thisWeek: submissions.filter(s => now - s.timestamp < ONE_WEEK).length,
  };
};
