# Beautiology Salon website

Static Astro site. No backend: booking is handed off to the salon's booking platform.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/ — deploy to Netlify, Cloudflare Pages or Vercel
```

## Where things live

| To change… | Edit |
|---|---|
| Phone, address, hours, socials, deposit %, team, reviews, the full price menu | `src/data/salon.ts` |
| Booking platform (FullSlate today, Square later) | `src/lib/booking.ts` |
| Brand colors, fonts, buttons | `src/styles/global.css` (`:root` tokens) |
| Photos | `public/images/` (currently stock, replace with real work) |

`TODO(confirm)` comments in `salon.ts` mark details that need the salon's confirmation.

## Switching booking platforms

In `src/lib/booking.ts`, set `provider` (e.g. `'square'`) and `newPlatformUrl` to the new public booking link. Every Book button on the site then points there.
