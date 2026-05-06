# Deployment Guide: Python Academy 3D

Since your project is built with **Next.js**, you have several excellent options for deployment. Here are the most effective ways to get your website live.

## Option 1: Vercel (Recommended)
Vercel is the creator of Next.js and provides the smoothest deployment experience with automatic SSL, global CDN, and preview deployments.

1.  **Push your code** to a GitHub, GitLab, or Bitbucket repository.
2.  **Sign up/Login** at [vercel.com](https://vercel.com).
3.  Click **"Add New"** -> **"Project"**.
4.  Import your repository.
5.  Wait for the build to finish. Your site will be live on a `your-project.vercel.app` domain.

## Option 2: Manual Deployment (VPS / DigitalOcean / AWS)
If you want to host on your own server, follow these steps:

1.  **Build the project**:
    ```bash
    npm run build
    ```
2.  **Start the production server**:
    ```bash
    npm run start
    ```
3.  (Optional) Use a process manager like **PM2** to keep the server running in the background:
    ```bash
    pm2 start npm --name "python-academy" -- start
    ```

## Option 3: Static Export
If you are not using any server-side features (like API routes or `getServerSideProps`), you can export the site as static files:

1.  Update `next.config.js`:
    ```javascript
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      output: 'export',
    }
    module.exports = nextConfig
    ```
2.  Run the build:
    ```bash
    npm run build
    ```
3.  The resulting `out` folder contains the HTML/CSS/JS files that you can host on any static provider (GitHub Pages, Netlify, etc.).

## Pre-Deployment Checklist
- [ ] Run `npm run lint` to ensure there are no code quality issues.
- [ ] Verify that all Unit 5 Tkinter simulations are working in the production build.
- [ ] Ensure your environment variables (if any) are set in the deployment platform.
