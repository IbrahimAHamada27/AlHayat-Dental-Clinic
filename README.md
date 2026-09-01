# Al Hayat Dental Clinic — Dr. Moaz Samir (عيادة الحياة لطب الأسنان — د. معاذ سمير)

A production-grade, SEO-optimized, highly accessible, and privacy-conscious web application for **Dr. Moaz Samir** and **Al Hayat Dental Clinic** based in Borg El Arab, Alexandria, Egypt.

---

## 🌟 Tech Stack & Architecture

- **Framework**: Angular 21 (Standalone Components, Strict TypeScript, Signals)
- **Styling**: Vanilla SCSS Design System with CSS Tokens (`tokens.scss`, `typography.scss`, `layout.scss`, `utilities.scss`)
- **Typography**: Google Fonts (Plus Jakarta Sans for English, Readex Pro for Arabic)
- **SEO & Structured Data**: Built-in `SeoService` generating dynamic metadata, OpenGraph, Twitter Cards, Canonical links, XML Sitemap (`sitemap.xml`), Robots (`robots.txt`), and JSON-LD schemas (`Dentist`, `Physician`, `Service`, `BlogPosting`, `FAQPage`, `BreadcrumbList`).
- **Privacy & Analytics**: Provider-based tracking (`GA4Provider`, `MetaPixelProvider`) decoupled from PII with strict parameter sanitization and granular user consent modal.
- **Conversion Systems**: Instant WhatsApp pre-composed routing with zero form PII capture, direct telephone calling, and dual branch Google Maps directions.

---

## 🚀 Quick Start & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm start
# or: ng serve
```
Open [http://localhost:4200](http://localhost:4200) in your browser.

### 3. Production Build
```bash
npm run build
```
The optimized production bundle will be generated under `dist/al-hayat-dental-clinic/browser`.

---

## 📍 Clinic Verification Data (Single Source of Truth)

- **Doctor**: د. معاذ سمير (Dr. Moaz Samir)
- **Practice**: عيادة الحياة لطب الأسنان (Al Hayat Dental Clinic)
- **Phone / WhatsApp**: `01501701514` (Formatted: `015 017 01514`, International: `+201501701514`)
- **Branch 1 (New Borg El Arab)**: برج العرب الجديدة – شارع الجهاز (أعلى صيدلية د. رشا – الدور الأول – بجوار سيتي لاب).
- **Branch 2 (Old Borg El Arab)**: برج العرب القديمة – شارع الوحدة الصحية (خلف البريد وخلف مسجد التقوى).

---

## 🛡️ Privacy & Anti-PII Compliance

- **No Medical Data In Analytics**: The application automatically strips and purges any keys named `name`, `phone`, `email`, `message`, `notes`, `address`, `medical_history` from tracking events.
- **Granular Consent**: Users have complete control over Analytics (GA4) and Marketing (Meta Pixel) through the cookie consent preferences banner and modal.

---

## 📝 Content Management & Extensions

All domain entities are typed and located under `src/app/core/data/`:

| Entity | File Location | Schema Helper |
| :--- | :--- | :--- |
| **Services** | `src/app/core/data/services.data.ts` | `SeoService.getServiceSchema()` |
| **Technologies** | `src/app/core/data/technologies.data.ts` | Dynamic meta tags |
| **Cases** | `src/app/core/data/cases.data.ts` | Before/After interactive slider |
| **Locations** | `src/app/core/data/locations.data.ts` | Branch cards & directions |
| **Articles** | `src/app/core/data/articles.data.ts` | `SeoService.getArticleSchema()` |

---

## 🚦 Pre-Launch Production Checklist

Before pointing DNS to production:

1. **GA4 & Meta Pixel IDs**: Update `gaMeasurementId` and `metaPixelId` in `src/environments/environment.prod.ts`.
2. **Google Search Console**: Verify the site ownership via DNS TXT record or HTML file.
3. **Google Maps Place URLs**: Update `directionsUrl` in `locations.data.ts` once Google Business profiles are linked.
4. **Server Fallback Configuration**: Configure your web server (Nginx, Cloudflare Pages, Netlify, or Apache) to rewrite all non-file route requests to `index.html` (SPA routing).
