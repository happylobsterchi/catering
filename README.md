# Happy Lobster · Catering Landing Page

Standalone landing page for Happy Lobster Chicago's catering services (Live Bar, Food Truck, Party Kits, Drop-off). Static HTML + React via Babel-in-browser — no build step required.

## Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial catering page"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import on Vercel**
   - Vercel → New Project → Import this repo
   - Framework Preset: **Other**
   - Build Command: *(leave empty)*
   - Output Directory: *(leave empty — site is static)*
   - Click Deploy

That's it. Vercel will serve `index.html` as the entry.

## Local preview

Open `index.html` in a browser, or serve the folder:
```bash
npx serve .
# or
python3 -m http.server 8080
```

## File structure

```
deploy-catering/
├── index.html               ← entry point
├── colors_and_type.css      ← brand tokens (colors, fonts, eases)
├── bar.css                  ← shared chrome (.bar-nav, .bar-btn, .bar-footer, .bar-wrap)
├── catering.css             ← page-specific styles (.dirCB)
├── components-shared.jsx    ← BarNav, BarFooter, InquiryForm
├── direction-cb.jsx         ← page composition (CateringDirectionB)
├── fonts/                   ← Hammersmith One, Cormorant, Wonderful Sunset
├── assets/                  ← logos + photography
└── README.md
```

## Notes

**Babel-in-browser** — JSX is transpiled at page load. Fine for marketing pages but adds ~100kb of Babel runtime. If you want to optimize later:

- Convert the two `.jsx` files to plain JS (run them through Babel CLI once, commit the output)
- Or migrate to Vite/Next.js with proper bundling

You'll see one console warning from Babel about precompiling for production — that's the only flag.

**Fonts** — local `.ttf` files in `/fonts/`. Loaded via `@font-face` in `colors_and_type.css`. The `vercel.json` adds long-cache headers for `/fonts/` and `/assets/` so they're served fast.

**No backend** — the inquiry form is currently client-side only (shows a "received" confirmation but doesn't actually send). Wire it to your form handler of choice (Vercel serverless function, Formspree, Netlify Forms, etc.) when ready.

## Editing

- Copy lives in `direction-cb.jsx` (hero, service cards, inquiry section)
- Nav links + footer live in `components-shared.jsx`
- Section order, layout, and colors live in `catering.css`
- Brand tokens (colors, font families, easings) live in `colors_and_type.css`

## Cross-links

The page links to two other pages by relative URL:
- `Happy Lobster Bar Landing Page.html` — the Bar service page
- `Happy Lobster Truck Landing Page.html` — the Truck service page

If you deploy those alongside this catering page in the same project, the links will work as-is. Otherwise update the `href` values in `direction-cb.jsx` to point wherever you've hosted them.
