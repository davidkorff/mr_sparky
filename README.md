# Miller Lights - Electrician Website

A professional website for Miller Lights, an electrician company, built with Next.js, Tailwind CSS, and Prisma.

## Features

- Modern, responsive design
- Contact form with SendGrid email integration
- Admin CMS for managing content, services, and messages
- Authentication system for admin access
- Future capability for bill payment integration

## Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS, Headless UI
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: SQLite (development), PostgreSQL (production)
- **Authentication**: JWT-based auth system
- **Email**: SendGrid
- **Deployment**: Render

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies

```bash
npm install
```

3. Set up environment variables by copying the `.env.example` file to `.env` and filling in your values

4. Initialize the database

```bash
npx prisma db push
```

5. Run the development server

```bash
npm run dev
```

6. Open [http://localhost:4000](http://localhost:4000) in your browser

## Deployment

This project is configured for deployment on Render. Follow these steps:

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure environment variables
4. Add a PostgreSQL database

## Admin Access

Access the admin panel at `/admin/login` with the credentials set in your `.env` file:

- Email: ADMIN_EMAIL
- Password: ADMIN_PASSWORD

## License

This project is licensed under the MIT License.
