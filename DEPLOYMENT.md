# UseCodify India — Web Server Deployment Guide

This guide explains how to deploy **UseCodify India** to your web server (cPanel, Apache, LiteSpeed, Nginx, or VPS) using **File Manager** or **FTP**.

---

## Why Visiting `https://usecodify.in/` Showed a Blank White Page

When deploying a modern React + Vite application via FTP or File Manager, the blank screen is almost always caused by one of these three reasons:

1. **Uploading the source files instead of the production build**:
   If you uploaded the root project directory (containing `package.json`, `src/`, `vite.config.ts`, etc.), the server serves the uncompiled `index.html`. That file contains `<script type="module" src="/src/main.tsx"></script>`. Standard web servers cannot parse TypeScript or JSX in `.tsx` files, and browsers reject it with a MIME type or syntax error, rendering a completely blank screen.
2. **Uploading the `dist/` folder itself instead of its contents**:
   If your server root is `/public_html/` and you uploaded the folder as `/public_html/dist/`, your website files were located at `https://usecodify.in/dist/index.html` rather than the root domain `https://usecodify.in/`.
3. **Missing SPA `.htaccess` rewrite rules**:
   When navigating to subpages like `/about`, `/pricing`, or refreshing the browser, web servers look for physical directories named `about/` and throw 404 Not Found errors unless an `.htaccess` rewrite rule directs all routes to `index.html`.

---

## Step-by-Step Deployment (FTP or File Manager)

### Step 1: Generate the Production Build
In the project directory, run:
```bash
npm run build
```
This generates a compiled, optimized, production-ready directory named **`dist/`**.

### Step 2: Identify the Exact Files to Upload
Open the **`dist/`** folder. You will see:
```text
dist/
├── .htaccess            <- Crucial for Apache/cPanel routing & MIME types
├── index.html           <- Compiled entry point with minified JS & CSS references
├── favicon.png          <- Favicon
├── robots.txt           <- Search engine directives
├── sitemap.xml          <- XML sitemap
└── assets/              <- Compiled CSS, JavaScript chunks, and images
    ├── index-*.js
    ├── index-*.css
    └── usecodifyindia.png
```

### Step 3: Upload to Your Server's Public Web Directory
Connect to your hosting server using **File Manager** (in cPanel/Plesk) or an **FTP client** (such as FileZilla):

1. Navigate to your website's document root (typically **`public_html`**, **`htdocs`**, or **`www`**).
2. Delete any default hosting placeholder files (like `default.html` or `hostingstart.html`).
3. **Upload all the contents of the `dist/` folder directly into `public_html/`**:
   - Do **NOT** upload the `dist` folder itself.
   - `index.html` must sit directly in `/public_html/index.html`.
   - `.htaccess` must sit directly in `/public_html/.htaccess`.
   - `assets/` must sit directly in `/public_html/assets/`.
   - `favicon.png`, `robots.txt`, and `sitemap.xml` must sit directly in `/public_html/`.

> **Note on hidden files**: On cPanel File Manager, make sure **"Show Hidden Files (dotfiles)"** is checked in Settings so that `.htaccess` is visible and uploaded.

---

## Frontend vs. Backend Architecture

This project is organized as a decoupled, resilient architecture:

### 1. Static Frontend (`dist/`)
The client interface is a high-performance React Single Page Application (SPA). It runs completely standalone in any browser on any web server without requiring Node.js.

### 2. Node.js Backend (`server.ts` & `/api/inquiries`)
The project includes a lightweight Express server in `server.ts` that persists client briefs in `data/inquiries.json` and powers the `/admin` portal.

- **If your hosting supports Node.js** (e.g. cPanel "Setup Node.js App", VPS, Docker, or PM2):
  1. Set the application startup file to `server.ts` (or `node server.ts`).
  2. Set the port to `3000` (or the port provided by your host).
  3. The backend will serve both the API and the static `dist/` files.
- **If your hosting is static or PHP-only** (standard shared hosting via cPanel/FTP):
  - Upload only the **`dist/`** contents.
  - The contact form will automatically detect that the Node.js API is not hosted and immediately route inquiries to your official email (`hello@usecodify.com`) and WhatsApp (`+91 93611 45190`) with one click so no lead is lost.
  - The `/admin` portal will clearly display a status banner explaining that the Node.js API is offline, rather than failing silently.

---

## Verifying the Deployment at `https://usecodify.in/`

Once uploaded, check the following in your browser:
1. Visit `https://usecodify.in/` — the homepage loads with dark styling, animations, and typography.
2. Click **About**, **Pricing**, **Contact**, and **Services** — navigation is instant and smooth.
3. Refresh on `https://usecodify.in/about` — the page reloads cleanly without a 404 (handled by `.htaccess`).
4. Test on mobile — the responsive layout, floating WhatsApp concierge, and Start Project button render smoothly.
