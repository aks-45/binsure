# Binsure Deployment Guide

## Deploy to Render

### Prerequisites
1. Create a Render account at https://render.com
2. Connect your GitHub repository to Render

### Deployment Steps

#### 1. Create PostgreSQL Database
1. Go to Render Dashboard
2. Click "New" → "PostgreSQL"
3. Name: `binsure-db`
4. Database Name: `binsure`
5. User: `binsure_user`
6. Click "Create Database"

#### 2. Deploy Backend API
1. Click "New" → "Web Service"
2. Connect your GitHub repo
3. Name: `binsure-backend`
4. Environment: `Node`
5. Build Command: `cd server && npm install`
6. Start Command: `cd server && npm start`
7. Add Environment Variables:
   - `NODE_ENV` = `production`
   - `DATABASE_URL` = (Copy from your PostgreSQL database)

#### 3. Deploy Frontend
1. Click "New" → "Static Site"
2. Connect your GitHub repo
3. Name: `binsure-frontend`
4. Build Command: `npm install && npm run build`
5. Publish Directory: `dist`
6. Add Environment Variable:
   - `VITE_API_URL` = `https://binsure-backend.onrender.com`

### URLs After Deployment
- Frontend: `https://binsure-frontend.onrender.com`
- Backend API: `https://binsure-backend.onrender.com`
- Admin Panel: `https://binsure-backend.onrender.com/contacts-viewer.html`

### Notes
- Free tier services may sleep after 15 minutes of inactivity
- First request after sleeping may take 30+ seconds
- Database persists data permanently