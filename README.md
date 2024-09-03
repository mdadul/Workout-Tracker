# Workout Tracker Installation Guide

## Project Overview

**Project Name:** Workout Tracker

**Description:** This project involves creating a backend system for a workout tracker application where users can sign up, log in, create workout plans, and track their progress. The system features JWT authentication, CRUD operations for workouts, and generates reports on past workouts.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (LTS version recommended)
- One of the following package managers:
  - Bun
  - npm
  - Yarn
- PostgreSQL (for local development)

## Technologies Used

- TypeScript
- HonoJs (Web framework)
- Drizzle (ORM)
- PostgreSQL (Database)
- Neon (Serverless PostgreSQL)

## Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/mdadul/workout-tracker.git
   cd workout-tracker
   ```

2. **Install dependencies**

   Using Bun:
   ```bash
   bun install
   ```

   Using npm:
   ```bash
   npm install
   ```

   Using Yarn:
   ```bash
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add the following variables:

   ```
   DATABASE_URL=your_postgres_connection_string
   JWT_SECRET=your_jwt_secret
   ```

   Replace `your_postgres_connection_string` with your Neon database connection string and `your_jwt_secret` with a secure random string for JWT signing.

4. **Set up the database**

   Generate a new migration:

   ```bash
   bun run gen:migration
   ```

   Run the database migrations:

   ```bash
   bun run migrate
   ```

5. **Start the development server**

   ```bash
   bun run dev
   ```

   The server should now be running on `http://localhost:3000`.

## Available Scripts

The project includes the following npm scripts:

- **Start the development server with hot reloading:**
  ```bash
  bun run dev
  ```

- **Generate a new migration:**
  ```bash
  bun run gen:migration
  ```

- **Run migrations:**
  ```bash
  bun run migrate
  ```

- **Start Drizzle Studio (database GUI):**
  ```bash
  bun run studio
  ```

