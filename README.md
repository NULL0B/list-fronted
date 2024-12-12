# Todo List Frontend

This is the frontend application for the Todo List, built with Next.js, TypeScript, and Tailwind CSS.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env.local` file:
   ```bash
   cp example.env .env.local
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will start on http://localhost:3000.

## Features

- View all tasks with their completion status
- Create new tasks with title and color
- Edit existing tasks
- Mark tasks as completed/uncompleted
- Delete tasks
- Responsive design
- Toast notifications for actions

## Project Structure

- `/src/app`: Next.js app router pages
- `/src/components`: Reusable React components
- `/src/services`: API service functions
- `/src/types`: TypeScript type definitions

## Development

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm start`: Start production server
- `npm run lint`: Run ESLint
