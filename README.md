# Project Using Strapi

A full-stack blog application built with Strapi (backend) and Next.js (frontend).

## Structure

- **Backend**: Strapi CMS running on http://localhost:1337
- **Frontend**: Next.js application running on http://localhost:3000
- **Live Demo**: https://rithikag198.github.io/project-using-strapi/

## Features

- Blog posts with categories and tags
- Image support for blog posts
- Rich text content editing
- RESTful API
- Modern UI with Tailwind CSS

## Local Development

### Prerequisites
- Node.js 20+
- npm

### Setup

1. Clone the repository
```bash
git clone https://github.com/rithikag198/project-using-strapi.git
cd project-using-strapi
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

4. Start both servers
```bash
# From project root
./start-servers.bat
```

Or start manually:
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend  
cd frontend
npm run dev
```

## API Endpoints

- **Blog Posts**: `GET /api/blog-posts`
- **Categories**: `GET /api/categories`
- **Tags**: `GET /api/tags`
- **Admin Panel**: http://localhost:1337/admin

## Deployment

- **Frontend**: Deployed to GitHub Pages
- **Backend**: Requires separate deployment (Heroku, DigitalOcean, etc.)

## Seeding Data

Run the seed script to populate with sample data:
```bash
cd backend
npm run seed-content
```

## Technologies

- **Backend**: Strapi 5.31.0, SQLite
- **Frontend**: Next.js 16, React 19, Tailwind CSS
- **Deployment**: GitHub Pages
