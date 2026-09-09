# Sandip Adak • Personal Portfolio (2026 Edition)

A modern, high-performance Data Science & Machine Learning engineer portfolio website built with **React 19 + Vite + Tailwind CSS + Framer Motion**.

---

## 📁 Project Structure

```
sandip-portfolio/
├── public/
│   └── resume.pdf                   <-- Put your downloaded resume PDF here
├── src/
│   ├── assets/                      <-- Project images / logos
│   ├── components/                  <-- Modular React components
│   │   ├── Navbar.jsx               <-- Sticky glass navbar & active indicator
│   │   ├── Hero.jsx                 <-- Editorial hero & interactive ML terminal
│   │   ├── About.jsx                <-- Bento grid about section & DS lifecycle
│   │   ├── Skills.jsx               <-- Categorized interactive skills cards
│   │   ├── RagPipelineVisualizer.jsx<-- Animated RAG architecture diagram
│   │   ├── Projects.jsx             <-- Selected projects bento grid & filters
│   │   ├── ProjectCard.jsx          <-- Individual project card
│   │   ├── ProjectModal.jsx         <-- Rich project deep-dive modal
│   │   ├── ExperienceAndCertificates.jsx <-- ElevanceSkill intern, Certs, Achievements
│   │   ├── EducationTimeline.jsx    <-- CS Engineering & education timeline
│   │   ├── DeveloperPresence.jsx    <-- GitHub, Live Streamlit & LinkedIn cards
│   │   ├── ResumeCTA.jsx            <-- Resume CTA banner
│   │   ├── ResumeModal.jsx          <-- Digital resume viewer & printable PDF
│   │   ├── Contact.jsx              <-- Direct contact form, Email & WhatsApp
│   │   ├── Footer.jsx               <-- Footer with local time & Back to Top
│   │   ├── BackgroundGlow.jsx       <-- Ambient radial atmosphere
│   │   └── SocialIcons.jsx          <-- Crisp custom SVG brand icons
│   │
│   ├── data/                        <-- ALL CONTENT IS CONFIGURED HERE
│   │   ├── profile.js               <-- Bio, contact, education, certs, experience
│   │   ├── projects.js              <-- All project details, links & bullet points
│   │   └── skills.js                <-- Categorized technical skills
│   │
│   ├── App.jsx                      <-- Main page composition
│   ├── main.jsx                     <-- React entrypoint
│   └── index.css                    <-- Tailwind CSS v4 imports & animations
│
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

---

## 🚀 How to Run Locally

### 1. Open Terminal & Go to Project Directory
```bash
cd /Users/sandipadak/.gemini/antigravity/scratch/sandip-portfolio
```

### 2. Install Dependencies (if on a new machine)
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
Open your browser at: **http://localhost:5173/**

### 4. Build for Production
```bash
npm run build
```
This generates the optimized production bundle inside the `dist/` directory.

---

## 🌐 Deployment Guide

### Option 1: Deploy to Vercel (Recommended • Fastest & Easiest)
1. Push your code to your GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Complete 2026 portfolio redesign"
   git remote add origin https://github.com/Sandip-0/portfolio.git
   git branch -M main
   git push -u origin main --force
   ```
2. Go to **https://vercel.com** and sign in with your GitHub account.
3. Click **"Add New Project"** and select your `portfolio` repo.
4. Vercel will automatically detect **Vite**. Click **"Deploy"**.
5. Your portfolio is now live with a free SSL certificate and lightning-fast global CDN!

---

### Option 2: Deploy to GitHub Pages (https://sandip-0.github.io/portfolio/)

#### Step A: Configure Vite Base Path
In `vite.config.js`, set `base: '/portfolio/'`:
```javascript
export default defineConfig({
  base: '/portfolio/', // Required for GitHub Pages
  plugins: [react(), tailwindcss()],
})
```

#### Step B: Install gh-pages and Deploy
```bash
npm install --save-dev gh-pages
```
Add deploy script to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
Run:
```bash
npm run deploy
```
Your website will be published live at: **https://portfolio-beige-xi-f1npl8n2j5.vercel.app**!
