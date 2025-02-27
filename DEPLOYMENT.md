# Miller Lights - Deployment Guide

This guide explains how to deploy the Miller Lights website to [Render](https://render.com), a cloud platform for hosting web applications.

## Prerequisites

- A [Render](https://render.com) account
- A Git repository with your code (GitHub, GitLab, etc.)
- A SendGrid account for email functionality

## Deployment Steps

### 1. Push Your Code to a Git Repository

If you haven't already, push your code to a Git repository:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

### 2. Set Up a PostgreSQL Database on Render

1. Log in to your Render account
2. Go to the Dashboard and select "New PostgreSQL"
3. Configure your database:
   - Name: miller-lights-db (or your preferred name)
   - Database: miller_lights
   - User: miller_lights
   - Region: Choose a region close to your target audience
   - Plan: Free (or select a paid plan for production use)
4. Click "Create Database"
5. Once created, make note of the "Internal Database URL" - you'll need this for your environment variables

### 3. Create a Web Service on Render

1. From the Render dashboard, click "New Web Service"
2. Connect your Git repository
3. Configure your web service:
   - Name: miller-lights
   - Environment: Node
   - Region: Choose the same region as your database
   - Branch: main (or your preferred branch)
   - Build Command: `npm install && npm run build && npm run db:migrate`
   - Start Command: `npm start`
   - Instance Type: Free (or select a paid plan for production use)

### 4. Set Environment Variables

Add the following environment variables to your web service:

- `NODE_ENV`: production
- `NEXTAUTH_URL`: Your Render service URL (e.g., https://miller-lights.onrender.com)
- `NEXTAUTH_SECRET`: Generate a random string
- `JWT_SECRET`: Generate a random string (different from NEXTAUTH_SECRET)
- `DATABASE_URL`: Your Render PostgreSQL Internal Database URL
- `SENDGRID_API_KEY`: Your SendGrid API key
- `ADMIN_EMAIL`: Your admin email
- `ADMIN_PASSWORD`: Your admin password (will be hashed)

### 5. Deploy Your Web Service

Click "Create Web Service" to deploy your application. Render will automatically build and deploy your service based on the configuration provided.

### 6. Verify Deployment

After deployment completes:

1. Visit your web service URL to ensure the website loads correctly
2. Try accessing the admin dashboard at `/admin`
3. Test the contact form to verify email functionality

## Troubleshooting

- **Database Connection Issues**: Verify your DATABASE_URL environment variable is correctly set to the Internal Database URL
- **Email Not Working**: Check your SendGrid API key and ensure email templates are correctly configured
- **Deployment Failures**: Check the build logs for errors and ensure all dependencies are correctly specified

## Maintenance

- Render automatically deploys changes when you push to your repository
- To manually redeploy, go to your web service in the Render dashboard and click "Manual Deploy"
- Monitor your application's logs in the Render dashboard for any errors 