# Miller Lights Website

Professional website for Miller Lights electrical services. Built with Node.js, Express, React, and PostgreSQL.

## Features

- Modern, responsive design
- Contact form with SendGrid integration
- Admin dashboard for content management
- Bill payment system (coming soon)

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   cd client && npm install
   ```

2. Create a `.env` file in the root directory with:
   ```
   PORT=4000
   DATABASE_URL=your_postgres_connection_string
   SENDGRID_API_KEY=your_sendgrid_api_key
   ADMIN_EMAIL=your_admin_email
   ADMIN_PASSWORD=your_admin_password
   SESSION_SECRET=your_session_secret
   ```

3. Set up the PostgreSQL database:
   ```bash
   psql -U postgres
   CREATE DATABASE miller_lights;
   ```

4. Run the development server:
   ```bash
   npm run dev:full
   ```

The site will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:4000
- Admin Dashboard: http://localhost:4000/admin

## Production Deployment

This application is configured for deployment on Render. Follow these steps:

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Add the environment variables from your `.env` file
4. Deploy! 