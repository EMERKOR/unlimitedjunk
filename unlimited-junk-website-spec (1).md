# Unlimited Junk Website Rebuild Spec

**GitHub Repo:** `https://github.com/EMERKOR/unlimitedjunk`

**For Claude Code:** Clone or work within this repo. Source images are in the repo root. Build the static site per this spec.

---

## Project Overview

**Goal:** Rebuild unlimitedjunk.com from Wix to a static site on Netlify. Prioritize mobile UX, SMS-based booking, and local SEO.

**Business:** Junk removal service based in Hudson, WI serving St. Croix County and East Twin Cities Metro.

**Owner:** Dan Korum  
**Phone:** 715-760-1610  
**Email:** dan@unlimitedjunk.com  
**Address:** 703 Oak St, Hudson, WI 54016

---

## Tech Stack

| Component | Choice | Rationale |
|-----------|--------|-----------|
| Hosting | Netlify (free tier) | CDN, auto HTTPS, easy deploys, great Core Web Vitals |
| Build | Static HTML/CSS | No framework overhead, fastest possible load times |
| Styling | Single CSS file or Tailwind (your call) | Keep it simple |
| JavaScript | Minimal/none | Only if absolutely needed |
| Forms | None | SMS/phone CTAs replace forms |

---

## Site Structure

### Pages (5 total)

```
/                   → Homepage
/services           → All services on one page
/about              → About the business, items hauled/not hauled
/faq                → FAQ
/contact            → Contact info, map
```

### Navigation

Simple horizontal nav on desktop, hamburger on mobile:
- Home
- Services
- About
- FAQ
- Contact

**No dropdowns.** Keep it flat.

---

## Page Specifications

### 1. Homepage (`/`)

**Purpose:** Immediate clarity on what the business does, make it dead simple to contact.

**Hero Section:**
- Headline: "Junk Removal in Hudson, WI"
- Subhead: "Fast, affordable hauling for homes and businesses. Same-day service available."
- Two CTAs (large, prominent buttons):
  - "Text Us" → `sms:7157601610`
  - "Call Now" → `tel:7157601610`

**Below hero:**
- Brief service overview (4 cards linking to anchor sections on /services):
  1. Single Item Pickup
  2. Garage/Shed/Storage Cleanouts
  3. Full Property Cleanouts
  4. Light Demolition
- Service area mention: "Serving Hudson, River Falls, New Richmond, Stillwater, Woodbury, and the East Twin Cities Metro"
- Trust signals: Google rating (4.7 stars, 10 reviews), years in business, "locally owned"
- Footer with contact info

**SEO:**
- Title: `Junk Removal Hudson WI | Same-Day Service | Unlimited Junk`
- Meta description: `Fast, affordable junk removal in Hudson, WI and the East Twin Cities Metro. Single items to full cleanouts. Text or call for a free quote: 715-760-1610`
- H1: "Junk Removal in Hudson, WI"

---

### 2. Services Page (`/services`)

**Purpose:** Single page with all services, anchor-linked sections.

**Structure:**
```
/services#single-item
/services#cleanouts
/services#full-property
/services#demolition
```

**Each service section includes:**
- Service name (H2)
- 2-3 sentence description
- What's included (brief list)
- Typical use cases
- CTA: "Text us for a quote" / "Call for same-day service"

**Service Details:**

**Single Item Pickup** (`#single-item`)
- Couches, mattresses, appliances, TVs, furniture
- Minimum $95
- Same-day available

**Garage, Shed & Storage Cleanouts** (`#cleanouts`)
- Garages, sheds, barns, storage units, attics
- We haul everything out
- Great for move-outs, decluttering

**Full Property Cleanouts** (`#full-property`)
- Entire home, estate, rental, or commercial property
- Foreclosures, estate cleanouts, rental turnovers
- Coordinate with realtors, property managers

**Light Demolition & Removal** (`#demolition`)
- Sheds, decks, playsets, hot tubs, fencing
- Must schedule 5+ days in advance
- Site inspection may be required
- Does NOT include hazmat (asbestos, lead paint, etc.)

**Pricing note at bottom:**
- "All pricing done by quote. $95 minimum for all services."

**SEO:**
- Title: `Junk Removal Services | Hudson WI | Unlimited Junk`
- Meta description: `Full-service junk removal in Hudson, WI. Single item pickup, garage cleanouts, full property cleanouts, and light demolition. Free quotes.`

---

### 3. About Page (`/about`)

**Purpose:** Build trust, show what items are accepted/not accepted.

**Sections:**

**About Unlimited Junk**
- Brief paragraph: locally owned, based in Hudson, reliable service, honest quotes
- Photo of Dan (if available) or truck

**Service Area**
List of cities served (keep as text, not a map unless you want to add one later):
- Hudson, River Falls, New Richmond, Somerset, Prescott
- Stillwater, Woodbury, Cottage Grove, Hastings
- Parts of St. Croix County, Washington County, Ramsey County
- "Don't see your area? Contact us!"

**What We Haul**
Consolidate into categories (not the massive list from current site):
- Furniture (couches, mattresses, dressers, etc.)
- Appliances (fridges, washers, dryers, etc.)
- Electronics (TVs, computers, etc.)
- Yard debris & outdoor items
- Construction debris (non-hazardous)
- General household junk

**What We Don't Haul**
- Hazardous materials: paint, chemicals, propane, gasoline
- Batteries (car/lithium)
- Asbestos, lead paint materials
- Medical waste
- Ammunition, firearms
- "Not sure? Just ask."

**SEO:**
- Title: `About Unlimited Junk | Hudson WI Junk Removal`
- Meta description: `Learn about Unlimited Junk, Hudson WI's local junk removal service. See our service area and what items we haul.`

---

### 4. FAQ Page (`/faq`)

**Purpose:** Answer common questions, reduce friction.

**Questions (clean up existing content):**

1. **How much does junk removal cost?**
   Pricing depends on volume and item type. $95 minimum. Contact us for a free quote.

2. **Do you offer same-day service?**
   Yes, when available. Reach out early for best availability.

3. **What areas do you serve?**
   Hudson, WI and surrounding areas including St. Croix County and the East Twin Cities Metro.

4. **What items can you take?**
   Most household, commercial, and yard items. See our About page for details.

5. **What items DON'T you take?**
   Hazardous materials, chemicals, batteries, asbestos, medical waste. See About page for full list.

6. **Do you do full property cleanouts?**
   Yes. Homes, rentals, estates, businesses. Contact us to schedule.

7. **How do I book?**
   Text or call 715-760-1610. We'll get back to you within 24 hours.

**SEO:**
- Title: `FAQ | Unlimited Junk | Hudson WI`
- Meta description: `Common questions about Unlimited Junk's services, pricing, and service area. Hudson WI junk removal.`

---

### 5. Contact Page (`/contact`)

**Purpose:** All contact methods in one place.

**Content:**
- "Text or Call: 715-760-1610" (with `sms:` and `tel:` links)
- Email: dan@unlimitedjunk.com (with `mailto:` link)
- Address: 703 Oak St, Hudson, WI 54016
- Embedded Google Map (optional, can skip if adds complexity)
- "We respond within 24 hours"

**NO contact form.** The whole point is to simplify to SMS/phone.

**SEO:**
- Title: `Contact Unlimited Junk | Hudson WI Junk Removal`
- Meta description: `Contact Unlimited Junk for junk removal in Hudson, WI. Text or call 715-760-1610 for a free quote.`

---

## Design Requirements

### Mobile-First

- **Primary breakpoint:** Design for 375px width first, then scale up
- **Touch targets:** Minimum 48x48px for all interactive elements
- **CTAs:** Large, full-width buttons on mobile for SMS and phone links
- **Navigation:** Hamburger menu on mobile, horizontal on desktop

### CTA Styling

Two button styles:
1. **Primary (SMS):** High contrast, prominent. Green or blue.
2. **Secondary (Call):** Slightly less prominent but still obvious.

Both should be visible without scrolling on homepage.

### Typography

- Keep it simple: 2 fonts max
- Body: System font stack or a clean sans-serif (Inter, Open Sans)
- Headings: Same family, heavier weight

### Colors

Extracted from logo:

- **Primary red:** `#ED1C24` (logo background, CTAs, accents)
- **White:** `#FFFFFF` (logo icon/text, page backgrounds)
- **Dark text:** `#222222` (body text on light backgrounds)
- **Light gray:** `#F5F5F5` (alternate section backgrounds)

CTA buttons should use the primary red with white text. The red is bold and high-contrast - use it for primary actions (Text Us, Call Now).

### Images

- Use real photos from Dan where available
- Compress aggressively (WebP preferred)
- Lazy load below-the-fold images
- Alt text on all images for accessibility and SEO

---

## SEO Requirements

### Technical SEO

- [ ] Semantic HTML5 (header, main, nav, footer, article, section)
- [ ] Proper heading hierarchy (one H1 per page, then H2, H3)
- [ ] Meta title and description on every page
- [ ] Open Graph tags for social sharing
- [ ] Canonical URLs
- [ ] XML sitemap
- [ ] robots.txt
- [ ] Schema.org LocalBusiness markup on homepage
- [ ] Fast load times (<2s)
- [ ] Mobile responsive

### Local SEO

- [ ] NAP (Name, Address, Phone) consistent across all pages
- [ ] Service area mentions on relevant pages
- [ ] Location-specific keywords in titles and content
- [ ] Link to Google Business Profile: `https://g.page/r/CQ_peUeZZ4rMEBE/review`

### Schema Markup (Homepage)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Unlimited Junk",
  "description": "Junk removal services in Hudson, WI and the East Twin Cities Metro",
  "telephone": "+1-715-760-1610",
  "email": "dan@unlimitedjunk.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "703 Oak St",
    "addressLocality": "Hudson",
    "addressRegion": "WI",
    "postalCode": "54016",
    "addressCountry": "US"
  },
  "areaServed": [
    "Hudson, WI",
    "River Falls, WI",
    "New Richmond, WI",
    "Stillwater, MN",
    "Woodbury, MN"
  ],
  "priceRange": "$95+"
}
```

---

## File Structure

```
/
├── index.html
├── services.html
├── about.html
├── faq.html
├── contact.html
├── css/
│   └── style.css
├── images/
│   ├── logo.png (or .webp)
│   ├── favicon.ico
│   ├── dan-trailer.webp
│   ├── garage-before.webp
│   ├── garage-after.webp
│   ├── alley-before.webp
│   └── alley-after.webp
├── sitemap.xml
├── robots.txt
└── _redirects (Netlify redirects if needed)
```

---

## Deployment Notes

### Netlify Setup

1. Create new site from Git repo (or manual deploy)
2. Set custom domain: unlimitedjunk.com
3. Enable HTTPS (automatic)
4. Set up redirects if needed (www → non-www or vice versa)

### Domain Transfer from Wix

1. Unlock domain in Wix
2. Get authorization/EPP code from Wix
3. Transfer to Netlify (or Cloudflare/another registrar)
4. Update nameservers
5. Wait for propagation (24-48 hours)

**Note:** During transfer, keep old site live. Only point domain to Netlify once new site is ready.

---

## Content to Migrate

From current site, preserve and clean up:

- [x] Service descriptions (simplify)
- [x] FAQ content (already good)
- [x] Items hauled/not hauled lists (consolidate)
- [x] Service area list
- [x] Contact info
- [x] Real photos provided (2 before/after sets, Dan portrait)

---

## Out of Scope (For Now)

- Dump trailer rental page (not yet operational)
- Dumpster bag rental page (not yet operational)
- Online booking calendar
- Contact form
- Blog
- Reviews integration

These can be added later as the business evolves.

---

## Success Metrics

After launch, track:
- Page load speed (target: <2s on mobile)
- Mobile usability (Google Search Console)
- Organic traffic (Google Analytics)
- Conversion (texts/calls received - track informally with Dan)

---

## Asset Workflow

### Image Inventory

All source images in repo root directory (filenames have spaces - rename when copying to `/images/`):

| Source Filename (in repo root) | Description | Recommended Use |
|-------------------------------|-------------|-----------------|
| `UNLIMITED JUNK LOGO.png` | Logo (red bg, white icon/text) | Header, favicon source |
| `Unlimited Junk - Dan by trailer.jpeg` | Dan standing with truck/trailer | About page, Contact page |
| `UJ - Garage - Before.JPG` | Cluttered garage (before) | Services page - cleanouts |
| `UJ - Garage - After.JPG` | Clean garage (after) | Services page - cleanouts |
| `UJ - Alley - Before 1.JPG` | Alley with debris (before) | Homepage or Services |
| `UJ - Alley - Before 2.JPG` | Alley with debris, alt angle | Backup/alternate |
| `UJ - Alley - After.JPG` | Clean alley (after) | Homepage or Services |

**Image processing for Claude Code:**
1. Create `/images/` directory
2. Copy and rename source images (remove spaces, use hyphens):
   - `UNLIMITED JUNK LOGO.png` → `images/logo.png`
   - `Unlimited Junk - Dan by trailer.jpeg` → `images/dan-trailer.jpg`
   - `UJ - Garage - Before.JPG` → `images/garage-before.jpg`
   - `UJ - Garage - After.JPG` → `images/garage-after.jpg`
   - `UJ - Alley - Before 1.JPG` → `images/alley-before.jpg`
   - `UJ - Alley - After.JPG` → `images/alley-after.jpg`
3. Compress/optimize images (WebP preferred if tooling available, otherwise optimize JPEGs)
4. Resize to reasonable max widths (1200px for full-width, 600px for cards)
5. Generate favicon from logo

**Before/After pairing:**
- Garage: Before → After (dramatic transformation, good for cleanouts section)
- Alley: Before 1 → After (shows debris removal)

**Deployment approach:**
1. Build in GitHub repo: `https://github.com/EMERKOR/unlimitedjunk`
2. Connect repo to Netlify
3. Deploy to preview URL (e.g., `unlimitedjunk.netlify.app`)
4. Dan reviews live preview
5. Once approved, transfer domain from Wix and point to Netlify

---

## Decisions Made

- [x] Hosting: Netlify
- [x] Domain transfer: Will transfer from Wix to Netlify (after site approval)
- [x] Colors: Match current site, derive from logo
- [x] Rental services: Excluded until operational
- [x] Booking method: SMS/phone only, no forms or calendar

## Still Needed

1. ~~**Logo file:** High-res vector from Emerson~~ ✓ Provided (PNG)
2. ~~**Photos:** Whatever real job photos Dan has available~~ ✓ Provided (7 images)
3. ~~**Final approval to build:** Emerson approved~~ ✓ Proceeding with build
4. **Domain transfer:** Pending Dan's confirmation (build first, migrate domain later)
