# Beautiology Salon — Site & Booking Audit (Oct 2026)

## 1. Current website (beautiologynv.com)

WordPress 7.1 with a generic "hairsaloon" theme. Four pages: Home, About (`/sample-page/`), Gallery, Our Services.

| Problem | Why it matters |
|---|---|
| **"Book Now" button only dials the phone** (`tel:725-404-4247`). It never reaches the online booking page. | The site's main call to action skips online booking entirely. |
| **No prices anywhere.** The services page has 12 marketing blurbs but no prices or durations. The real menu (48 priced services) only lives on FullSlate. | Price is the #1 thing salon visitors look for. Without it they bounce or call. |
| **No address or hours.** The footer says "Las Vegas, NV" while About says "Henderson". | Hurts local SEO and trust, and there's no way to find the salon. |
| **The Gallery page is empty.** | A dead page linked from the homepage hero ("See How We Do It"). |
| About page URL is `/sample-page/` (the WordPress default) | Looks unfinished and is bad for SEO. |
| Three `<h1>` tags on the homepage, no meta description, all stock photos | Weak SEO with no real proof of the work. |
| The Facebook link goes to `facebook.com/hairaddictiam` | Probably an old or different brand. **Confirm.** |
| "Proudly powered by Beautiology" in the footer | Leftover theme text. |

**What's worth keeping:** purple `#5F2D8F`, near-black `#14100C`, Josefin Sans, the script-B monogram, and the About copy (it's good).

## 2. Current booking page (beautiology.fullslate.com)

FullSlate's landing page is confusing because **it is not a Beautiology page. It's a shared page for four salons owned by Tracey La:**

| Location | Address |
|---|---|
| Beautiology Salon (id 4) | 2550 Anthem Village Dr, Ste 170, Henderson NV 89052 |
| Crystal Salon & Headspa (id 9731) | 2200 Horizon Ridge Pkwy, Henderson NV 89052 |
| Salon Lunas Headspa (id 9370) | 2233 W Balboa Blvd #104, Newport Beach CA |
| Stella Headspa & Salon (id 2570) | 9928 Garden Grove Blvd, Garden Grove CA |

What a client sees before they can book:
- About 450 words covering all four salons.
- **Five different phone numbers**: 702-483-6660, 702-268-7411, 949-220-7329 (listed twice, for different salons), 714-865-9408, plus the website's 725-404-4247.
- A contact email on hotmail.com (`traceyla397@hotmail.com`).
- The newest reviews date from 2017–2018 and mention stylists who may no longer be there (Jennifer, Cindy).
- Hours listed as 9–6 daily, yet the calendar offers 7:00 AM and 7:15 PM slots.

The booking flow itself works: location → staff (Tracey La, Lupita Pandula, or no preference) → service → calendar → slot. It takes a **40% deposit**. The UI dates from about 2012 and isn't built for phones.

**About the customer data:** all four salons share **one FullSlate account**. Client records, appointment history and notes for every location sit in the same account, so Beautiology's data is mixed in with the sister salons'. Whoever owns the account (presumably Tracey) controls the export. Settle this before migrating.

**FullSlate itself:** Intuit bought it in 2013 and sold the parent company (Demandforce) to Internet Brands in 2016. Its legal pages now point to Internet Brands. The product still runs but shows no sign of active development. Common reviewer complaints are a dated UI, few integrations and weak support. Pricing is $31.95/mo for 1 schedule, $51.95/mo for up to 5, and $81.95/mo for up to 10.

### How to export the data (official FullSlate help center)
- **Clients:** Clients → List → Export icon (top right) → CSV. [Help article](https://support.fullslate.com/knowledge/how-do-i-export-my-client-list)
- **Appointments:** Schedule → More → Sync, Import & Export → Export Appointments → Download .csv. You can pick a date range and schedule. Tick "Include canceled appointments" to keep those. [Help article](https://support.fullslate.com/knowledge/exporting-appointment-data)
- Export one year at a time if it times out.
- **Unverified:** whether per-client notes are in the client CSV (appointment notes are). The client list is account-wide, so you'll have to filter out the other salons' clients by hand.

## 3. Platform recommendation

**Square Appointments (Plus plan)**

| | Square Appointments | Vagaro (runner-up) | GlossGenius | Fresha | Boulevard |
|---|---|---|---|---|---|
| Price for 2 stylists | Free tier; Plus ≈ $49/location/mo* | $30/mo + $10/calendar ≈ $50 | $28–56/mo | ≈ $30/mo **+ 20% fee on marketplace new clients** | $143+/mo |
| Website embed | **Best**: button, inline widget, or direct link | Embed, popup or link | Link only, no embed | Link only | Overlay script |
| Deposits / no-show fees | Yes (no-show fees on Plus) | Yes | Yes | Yes | Yes |
| Client CSV import | Yes | Free migration (unverified) | Free migration (unverified) | Yes | Concierge |
| Fit | ✅ | ✅ if they want marketplace exposure | No embed | Fees add up | Overkill |

\* Square's US price page didn't render for our research tool. Confirm on squareup.com.

**Why Square:**
1. It has the cleanest embed options for a custom site.
2. It costs about the same as FullSlate's 5-schedule plan.
3. Payments, deposits, card-on-file and no-show fees are built in.
4. Clients get a modern mobile booking flow.
5. Each salon can have its own location (or its own account), which ends the shared-account confusion.

**Caveat:** past appointments probably can't be imported. Keep the FullSlate appointment CSV as an archive.

### Migration checklist
1. Confirm with Tracey who owns the FullSlate account and which phone number/email Beautiology should publish.
2. Export clients and appointments from FullSlate (above).
3. Set up Square with Beautiology's services (the menu in `site/src/data/salon.ts` is ready to copy), its staff and the 40% deposit rule.
4. Import the client CSV into Square Customers.
5. In `site/src/lib/booking.ts`, set `provider: 'square'` and `newPlatformUrl` to the Square booking link. The rest of the site updates automatically.
6. Run both systems for 2–4 weeks, then retire FullSlate.

## 4. The new site (`/site`, Astro 7)

- **Pages:** Home, Services (all 48 services with real prices), Book (guided picker), About. Old WordPress URLs redirect (`/sample-page` → `/about`, `/our-services` → `/services`).
- **Booking works today.** Every "Book" button deep-links into FullSlate at the exact service (`/services/{id}?location=4`), skipping the confusing four-salon landing page. Switching platforms is a one-line change.
- **Brand:** the same purple, ink, Josefin Sans and monogram, modernized with warm neutrals, an editorial serif accent and pill buttons. Phones get a sticky Call / Book bar.
- **SEO:** one H1 per page, meta descriptions, schema.org `HairSalon` data with address and hours, and an embedded map.
- **Weight:** about 0.5 MB total with almost no JavaScript, so it can be hosted free on Netlify, Cloudflare Pages or Vercel.

### Still needed from the salon
- Real photos of their own work and the salon (replace `public/images/*`; these are the stock images from the current site).
- Which public phone number and email to use, and confirmed hours.
- Whether the Facebook page is theirs.
- Fresh reviews (Google reviews are worth pulling in once they're on Square).
