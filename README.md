# UseCodify India (OPC) Private Limited — Official Website

Complete production-grade redesign and digital architecture for **UseCodify India (OPC) Private Limited** (operating brand: **UseCodify**).

---

## 1. Verified Corporate & Operating Information

* **Corporate Legal Name:** UseCodify India (OPC) Private Limited
* **Brand Name:** UseCodify
* **Corporate Identity Number (CIN):** `U62013TN2025OPC180906`
* **GST Identification Number (GSTIN):** `33AADCU8528M1ZW`
* **Primary Contact Email:** `hello@usecodify.com`
* **Canonical Domain:** `https://usecodify.in/`
* **Global Website:** `https://usecodify.com/`
* **Official WhatsApp Destination:** `+91 93611 45190` (`https://wa.me/919361145190`)
* **Razorpay Payment Gateway:** `https://rzp.io/rzp/usecodify`
* **Operating Facility Address:** Ground Floor, Primus Building, Door No. SP–7A, Guindy Industrial Estate, SIDCO Industrial Estate, Guindy, Chennai, Tamil Nadu 600032, India.
* **Accreditations:** Recognized under Startup India (DPIIT) &amp; StartupTN.

---

## 2. Key Architecture & Features

### Official Branding & Assets
* **Official Logo:** Uses the company's verified logo at `/assets/usecodifyindia.png` across header, footer, WhatsApp concierge, and favicon.
* **Favicon:** Configured in `index.html` with both standard PNG and Apple touch icon references.

### Services Dropdown Navigation
* **Desktop:** Refined 2-column floating mega-menu directly positioned below the Services nav item with solid opaque backdrop blur, clear hierarchy, service descriptions, and no overflow/overlap. Accessible via keyboard with outside-click and Escape key dismissal.
* **Mobile:** Smooth collapsible accordion inside the mobile navigation drawer.

### Working WhatsApp Floating Widget
* Persistent floating WhatsApp trigger at bottom-right with official emerald styling.
* Interactive chat popup with welcome greeting, client inquiry input, and direct link submission to `https://wa.me/919361145190`.
* Non-colliding layout: `Start Project` CTA is anchored cleanly on the bottom-left, and `Back to Top` is placed above WhatsApp.

### Transparent Pricing with Razorpay "Pay Now"
* Centralized configuration constant `RAZORPAY_PAYMENT_URL = 'https://rzp.io/rzp/usecodify'` in `src/data/company.ts`.
* All pricing tiers feature both the primary "Get Started" contact route and a direct "Pay Now &rarr;" secondary button opening the configured Razorpay portal.

### Complete 8-Section Refund & Return Policy (`/refund-policy`)
* Semantic HTML document with responsive table of contents linking to all 8 anchors:
  1. `#principles` — General Principles
  2. `#payment-structures` — Payment Structures Table (Full Upfront vs. 40/60 Plan)
  3. `#refunds` — Refunds on Deposits, Final Payments, and 45-day Hold Period
  4. `#revisions` — Revisions &amp; 25% Content Limitations
  5. `#cancellation-client` — Project Cancellation by Client
  6. `#cancellation-usecodify` — Project Cancellation by UseCodify
  7. `#digital-nature` — Digital Nature of Deliverables
  8. `#how-to-request` — Written Request Procedure via `hello@usecodify.com`

### Single Address Consistency
* The operating office address in Guindy, Chennai is used uniformly across the application. The former registered address has been completely removed from public display.

### Global Website Interlinking
* Clear, non-confusing links to UseCodify Global (`https://usecodify.com/`) in the Header, About Page, and Footer.

---

## 3. Deployment & Hosting Instructions

### Static Server Deployment (Apache, Nginx, cPanel, Vercel, Netlify)
1. Run the production build command:
   ```bash
   npm run build
   ```
2. The output directory is `dist/`. Upload all contents of `dist/` directly to the `public_html` or web root of your web server.
3. For single-page deep-linking fallback on Apache, ensure `.htaccess` is present:
   ```apache
   RewriteEngine On
   RewriteBase /
   RewriteRule ^index\.html$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```
4. For Nginx:
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```
