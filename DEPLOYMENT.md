# Deploying to GitHub Pages

This guide explains how to deploy your Taller Rondinara SPA to GitHub Pages.

## Prerequisites

1. GitHub account
2. Git repository initialized in this project
3. Repository on GitHub

## Setup Steps

### 1. Update Configuration Files

You need to replace `USERNAME` and `REPO_NAME` with your actual GitHub username and repository name in two files:

#### package.json
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
```

#### vite.config.js
```javascript
base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',
```

### 2. Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit"
```

### 3. Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., `taller-rondinara-spa`)
3. **Don't** initialize with README (you already have files)

### 4. Connect to Remote Repository

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 5. Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
- Build your app for production
- Deploy the `dist` folder to the `gh-pages` branch
- Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### 6. Enable GitHub Pages (First Time Only)

1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Under "Source", select branch: `gh-pages` and folder: `/ (root)`
4. Click **Save**

Your site will be live in a few minutes!

## Updating the Site

Whenever you make changes:

```bash
git add .
git commit -m "Your commit message"
git push
npm run deploy
```

## Local Development

For local development, continue using:

```bash
./dev.sh
```

The `base` path configuration only applies to production builds, so local development is unaffected.

## Troubleshooting

### 404 Errors on Page Refresh

If you get 404 errors when refreshing on a deployed page, this is normal for SPAs on GitHub Pages. You may need to add a custom 404.html that redirects to index.html.

### Assets Not Loading

Make sure you updated both `package.json` and `vite.config.js` with your actual repository name.
