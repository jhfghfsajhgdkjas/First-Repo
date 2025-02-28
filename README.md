# User Management System

A robust user management system built with React and Express, featuring dynamic forms and data table management with PostgreSQL database integration.

## Features

- User registration with image upload
- Dynamic data table with CRUD operations
- Form validation
- Responsive design
- Database persistence with PostgreSQL
- Modern blue-black techie UI theme

## Tech Stack

- Frontend:
  - React
  - TanStack Query
  - React Hook Form
  - Tailwind CSS
  - shadcn/ui components
  - TypeScript

- Backend:
  - Express.js
  - PostgreSQL
  - Drizzle ORM
  - Zod validation

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <repo-name>
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database:
- Make sure PostgreSQL is installed and running
- Create a `.env` file with your database configuration:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`.

## Project Structure

```
├── client/                # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── features/     # Feature-specific components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility functions
│   │   └── pages/        # Page components
├── server/               # Backend Express application
│   ├── db/              # Database configuration
│   ├── routes/          # API routes
│   └── storage.ts       # Data access layer
└── shared/              # Shared types and schemas
    └── schema.ts        # Database schema and types
```

## License

MIT