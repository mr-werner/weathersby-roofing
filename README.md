# Weathersby Roofing — Blueprint WebStudio Concept

Independent, non-official redesign concept for https://www.weathersbyroofinginc.com/ (Weathersby Roofing Inc., Abilene, TX).
Preview: https://wr.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

Custom one-page build: content in `src/App.jsx`, styles in `src/styles.css`, concept widget in `src/concept.jsx`.

## Local setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Deployment
Vercel project `weathersby-roofing` (framework Vite, team mrwerner-s-projects); pushes to `main` deploy automatically. Domain `wr.blueprintwebstudio.com` is a CNAME at Porkbun (use the target Vercel shows).
Optional env vars: `VITE_CONCEPT_END_DATE` (defaults to 2026-12-08 23:59 Central), `RESEND_API_KEY` / `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` for the free estimate form (`api/contact.js`; demo mode without them).
Add `wr.blueprintwebstudio.com` to `allowedOrigins` in blueprint-digital `api/demo-interest.js`.

## Design
- Logo: their original "Weathersby Roofing" steel-and-copper italic wordmark (588 × 69 PNG), with the white background knocked out so it sits on the cream header; on a cream plate in the dark footer. Favicon is a copper gable over an italic W in the logo's slate.
- Palette from the logo: the steel blue deepened to slate #26404F for the topline, checklist section and footer, and the copper half of the logo (#A8642A) for buttons and accents, on an Abilene limestone cream (#F3ECE0) taken from the stone homes in their own photos. The old template's mint green (#7CC576) came from the purchased theme, not their brand, so it was dropped.
- Fonts: Zilla Slab (headings), Karla (body), Saira Condensed (labels and small caps; echoes the logo's condensed italic).
- Motif: roof lines. The hero photo is cut into a gable with a slate roof line over it and a hanging "Est. 1973" tag. Shingle-course edges sit under the hero and on top of the footer, and the eight services are laid out as two staggered shingle courses.
- Signature section: their own "Questions you need to ask a roofing contractor before signing a contract" list, turned into an interactive contract checklist. Each of the nine questions opens to Weathersby's answer, built only from facts on their site, with a "x of 9 answers read" meter.
- Section order: topline → header with phone → hero (tile-roof photo in a gable) → badge strip → roofing services + UL 2218 impact-resistant callout → before-you-sign checklist → example projects gallery with lightbox → credentials → free estimate form and contact → footer.

## What changed from the current site
- The site is a ThemeForest template ("Coded by Ahmed Yasser" logo still in the footer) with the theme's stock mint green, a "Return to top" button and a "Contact" section that only repeats the phone number. The concept removes the template leftovers.
- The phone button in the hero ("Call us today at 325-690-0995 for a free estimate") links to `#` instead of `tel:`, so it does nothing on a phone. Every phone number in the concept is a tap-to-call link.
- There was no way to ask for an estimate in writing. The concept adds a free estimate form (roof work, insurance claim yes/no, address).
- Services were one bold run-on line separated by dashes inside a badge grid. They are now eight labeled services plus a separate UL 2218 impact-resistant callout about insurance discounts.
- The nine "before signing" questions were listed with no answers. The concept answers each one with Weathersby's own facts.
- The 12 example photos were shown as small thumbnails inside iPad frames with the camera date stamps (2010) visible. The concept uses the larger versions, cropped to remove the date stamps, in a gallery with a full-size viewer.
- The page loads jQuery over plain `http://`, which browsers block on the https site.
- Checked at 1280px and 390px with no sideways scrolling.

## Photos
All photos are the company's own files from weathersbyroofinginc.com: the hero (`img/splash.jpg`, a stone home with a clay tile roof) and the 12 example projects (`examples/1.JPG`–`12.JPG`, about 1270px wide, taken in November 2010). The bottom of each was cropped to remove the camera's date stamp. Newer and larger project photos would help.
Badges shown (their own image files): Owens Corning Preferred Contractor, GAF Certified, Malarkey Certified Residential Contractor, CertainTeed Select ShingleMaster, Roofing Contractors Association of Texas, BBB Accredited Business. The certificate scans linked from the old site are not shown (see below).

## Owner should confirm
- Owner name spelling: the site writes "Russel Weathersby" but the email is russell@weathersbyroofinginc.com. The concept keeps "Russel" as written; confirm which is right.
- Whether the certifications are current. The certificate scans linked from the current site are all expired: GAF "valid through 09/30/2014", CertainTeed ShingleMaster "valid through January 31, 2015", Malarkey dated March 18, 2016 and "valid for one year", RCAT "valid through December 2018". The concept shows the badges (as the site does) but not the old certificates; send current ones before launch.
- BBB "Rated A+ Since 1993": the BBB link points to a "weathersby-roofing-in-tuscola-tx" profile, and the RCAT certificate also lists Tuscola, TX. Confirm the current rating, the BBB link and whether Tuscola or Abilene is the business address of record.
- Member of the Big Country Home Builders Association: confirm it is current.
- Answers in the checklist that go past the site's facts: references from past customers on request, a start date and timeline given with the written estimate, proof of insurance on request, permit handling explained in writing, and written workmanship and manufacturer warranties. Adjust any that don't match how they work.
- "Installed to the manufacturer's spec" on composition roofing, and the short service descriptions in general.
- Office hours (none on the current site, so none are shown).
- No reviews are shown (none on the current site). Facebook and BBB are linked.
