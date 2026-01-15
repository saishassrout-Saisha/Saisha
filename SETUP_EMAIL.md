# Email Setup Instructions

## Quick Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment file:**
   - Copy `env.example` to `.env`
   - Update with your Gmail credentials

3. **Set up Gmail for sending emails:**
   - Enable 2-factor authentication on your Gmail account
   - Go to Google Account Settings > Security > App passwords
   - Generate a new app password for "Mail"
   - Use this app password (not your regular password) in the `.env` file

4. **Create `.env` file:**
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-character-app-password
   NODE_ENV=development
   ```

5. **Run the application:**
   ```bash
   npm run dev
   ```
   This will start both the frontend (port 5173) and backend server (port 3001)

## Features Implemented

### ✅ Toggle Contact Form
- Click "Hide/Show Contact Form" button to toggle form visibility
- Smooth slide animation using Framer Motion
- Form state is preserved when hidden/shown

### ✅ Email Functionality
- Sends emails to vigljku@gmail.com
- Professional HTML email template
- Includes all form data (name, email, phone, company, message)
- Timestamp included

### ✅ Spam Protection
- Rate limiting: Maximum 3 submissions per hour per email/phone combination
- Prevents form spam and abuse
- User-friendly error messages

### ✅ Database Tracking
- All submissions are logged on the server
- In-memory tracking for development
- Ready to integrate with proper database (MongoDB, PostgreSQL, etc.)

## Form Fields Sent via Email

- **Name** (required)
- **Email** (required) 
- **Phone** (optional)
- **Company** (optional)
- **Message** (required)
- **Timestamp**

## Error Handling

- Network errors
- Rate limiting messages
- Required field validation
- Server errors with user-friendly messages

## Production Deployment

For production, replace the in-memory tracking with a proper database:

1. **Database options:**
   - MongoDB with Mongoose
   - PostgreSQL with Prisma
   - MySQL with Sequelize

2. **Environment variables:**
   - Set EMAIL_USER and EMAIL_PASS
   - Configure database connection
   - Set NODE_ENV=production

3. **Security enhancements:**
   - Add CSRF protection
   - Implement proper session management
   - Add request validation middleware
   - Use environment-specific rate limits

## Troubleshooting

### Email not sending?
- Check Gmail app password is correct
- Verify 2FA is enabled on Gmail
- Check server console for error messages

### Rate limiting not working?
- Check browser network tab for API responses
- Verify server is running on port 3001
- Clear browser storage if needed

### Form not toggling?
- Check browser console for JavaScript errors
- Verify Framer Motion is properly installed
