# IFM Logistics Inc — Website

Static site, no build step, no server required. Open `index.html` to preview.

## Files
- `index.html`, `services.html`, `drivers.html`, `about.html`, `contact.html`, `privacy-policy.html`, `terms.html` (SMS Terms at `#sms`), `thank-you.html`
- `styles.css`, `script.js`
- `assets/img` (branded photos + `og-image.png`), `assets/logo` (vector mark + lockup, navy and white), `assets/fonts` (self-hosted Inter + Sora, no external font requests)
- favicons, `sitemap.xml`, `robots.txt`

## Preview
Double-click `index.html`. Works fully offline. On a local file, both the quote form and the driver application form skip sending and jump straight to the thank-you page (browsers can't send forms from disk).

## Deploy
Upload everything to any static host (GitHub Pages, Netlify, Cloudflare Pages, cPanel). Keep the `assets/` folder structure intact. `index.html` must sit at the web root. Canonical URLs and the sitemap assume `https://ifmlogistics.com`.

## Activate the two contact forms (one time each)
Both the quote form (`contact.html`) and the driver application form (`drivers.html`) post to FormSubmit, which emails submissions to dispatch@ifmlogistic.com.
1. Deploy the site to the live domain.
2. Submit each form once yourself (quote form and driver application, separately).
3. FormSubmit emails a one-time activation link to dispatch@ifmlogistic.com for each. Click both.
4. Done — every future submission from either form lands in that inbox as a readable table.

Spam protection: hidden honeypot field, minimum time-on-page check, browser validation on both forms.

## SMS / carrier registration (Vonage, RingCentral, etc.)
- Both consent checkboxes are optional and unchecked by default, with the required disclosure language beside them.
- Privacy Policy states mobile/SMS opt-in data isn't shared with third parties for marketing.
- Terms page `#sms` covers message types, frequency, rates, STOP/HELP, and that consent isn't a condition of service or employment.
- Phone number shown throughout: (331) 319-3535, with (251) 862-7788 as a secondary/alt number in the footer, About page, and Contact page.

## Design notes
- Distinct from any other site built for a sister company: bright daytime photography (vs. dusk/moody), Sora display type (vs. a condensed industrial face), card-based sections, pill-shaped buttons, navy/steel-blue/amber palette pulled from the real IFM logo.
- All trailer photos are AI-generated base images with the real IFM Logistics logo composited on afterward (perspective-matched, shading blended) — no stock photography, no placeholder logos.
- Drivers/Careers is a full first-class section (hero mention, dedicated feature band on the Home page, and its own page with a real application form), not an afterthought.

## Company details on file
SIP Xpress Inc dba IFM Logistics Inc — USDOT 3513572 — MC-1163818
1600 Golf Rd, Ste 1256, Rolling Meadows, IL 60008
(331) 319-3535 / (251) 862-7788 — dispatch@ifmlogistic.com

## 2026 premium visual pass
- Main company / freight phone: +1 (765) 222-4545.
- Recruiting / driver-application phone CTAs: +1 (331) 319-3535.
- Instagram links currently point to https://www.instagram.com/ifmlogistics/ . If the official handle differs, replace this URL site-wide before deployment.
- Contact page was rebuilt as a compact hero + two-column contact/quote experience to remove long empty scrolling.
- Recruiting imagery uses the wide full-face portrait and dedicated object-position rules so the driver is not cropped at the face.


Recruiting submissions on drivers.html continue to route to hr@ifmlogistics.com.
