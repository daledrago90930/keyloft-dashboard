# KeyLoft - Real Estate Platform

This is a full-stack scaffold for KeyLoft, an all-inclusive real-estate marketplace.

## Getting Started

1. Clone the repo:
   ```
   git clone <your-repo-url>
   cd keyloft
   ```
2. Copy environment variables:
   ```
   cp .env.example .env
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up the database:
   ```
   npx prisma migrate dev --name init
   ```
5. Run the development server:
   ```
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

- Frontend/API: Push to GitHub and deploy on Vercel
- Database: Provision PostgreSQL on Railway or similar, set DATABASE_URL

