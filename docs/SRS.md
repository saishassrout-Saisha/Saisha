# Software Requirements Specification (SRS)  
## SAIsha Plastics Management Consultant Website

### 1. Introduction
- **Purpose**: Describe the requirements for the marketing website promoting SAIsha Plastics Management Consultant and enabling lead capture via contact form.
- **Scope**: Public-facing single-page style experience with routed pages (Home, About, Services, Contact), animated hero/3D model, and email-backed contact form handled by the Node/Express API (`/api/contact`).
- **Intended audience**: Business stakeholders, development team, QA, and marketing/SEO owners.

### 2. Overall Description
- **Product perspective**: Vite + React front-end with TailwindCSS, Framer Motion animations, Three.js 3D model, and React Router. Backend email handler in `api/contact.js` served via Express (`server.js`).
- **User classes**:
  - Prospects evaluating plastics/polymer consulting partners.
  - Existing customers seeking contact details.
  - Administrators (internal) monitoring inquiries via email inbox.
- **Assumptions/Dependencies**:
  - SMTP credentials configured via environment variables (see `SETUP_EMAIL.md`).
  - Public deployment URL provided in `VITE_SITE_URL` for SEO canonicals/sitemap/robots.
  - Modern desktop and mobile browsers with JavaScript enabled.

### 3. Functional Requirements
- **Navigation**: Global navbar with links to Home, About, Services, Contact; responsive hamburger for mobile; sticky header behavior.
- **Home**:
  - Hero with primary CTA to Services and secondary CTA to About.
  - Animated 3D model (desktop) and stats section.
  - Service highlights linking into `/services`.
- **About**:
  - Mission/vision content, specialized teams list, client highlights, CTA to Contact, stats.
- **Services**:
  - Categorized services grid (Integrated Management, Sustainability, Geotextiles, RAFFIA, Cost Reduction, Optimization, Business Management).
  - CTA to Contact.
- **Contact**:
  - Hero and lead form capturing name, email (required), phone, company, message (required).
  - Form posts JSON to `/api/contact`; success/failure feedback is shown inline.
  - Address/phone/email display; FAQ and location section.
- **Footer**:
  - Quick links, service summary, contact info, social placeholders.

### 4. External Interface Requirements
- **UI**: Responsive layout, WCAG-aware contrasts via Tailwind theme.
- **API**: `POST /api/contact` expects `{ name, email, phone?, company?, message }`; responds with JSON status; uses nodemailer to send email.
- **Content Delivery**: Static assets served by Vite build; sitemap/robots served from `public/`.

### 5. Non-Functional Requirements
- **Performance**: First meaningful paint under typical broadband; optimize 3D assets; cache headers for static assets.
- **Reliability**: Contact endpoint should return clear errors; failures must not crash the UI.
- **Usability**: Smooth scroll, clear CTA buttons, accessible form labels, keyboard navigable menu.
- **Security**: Basic input validation server-side for contact form; protect SMTP creds in environment variables.
- **SEO**: Per-page metadata, canonical URLs, robots.txt and sitemap.xml, structured data (Organization/Service/ContactPage), friendly URLs.

### 6. Data Requirements
- No persistent user data storage; form submissions are transient and delivered via email.
- Environment variables required: SMTP host/port/user/pass; `VITE_SITE_URL` for canonical URLs.

### 7. Constraints
- Front-end must remain compatible with current React 18 + Vite tooling.
- Avoid breaking existing styling/animation behavior.

### 8. Future Enhancements (Backlog)
- Add analytics (e.g., GA4) with consent banner.
- Add success page/thank-you route and CRM integration.
- Replace placeholder social links with real profiles.
- Add multilingual support for English/Hindi.
- Add blog/insights section for ongoing SEO.
