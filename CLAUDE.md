# AMISSA Band Website — Claude Context

## Project overview
Official website for **AMISSA**, a death metal band from Stockholm, Sweden.  
Single-page React app with smooth-scroll navigation + dedicated member sub-pages.  
No backend. Deployed on **Vercel**.

## Tech stack
- React 18 + Vite 5
- Tailwind CSS 3 (custom config in `tailwind.config.js`)
- React Router 6 (client-side routing)
- Google Fonts: **Bebas Neue** (headings) + **Inter** (body) — loaded in `index.html`

## Running locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to /dist
```

## File structure
```
public/
  hero.jpg              ← hero background (user supplies)
  gallery/              ← gallery photos (listed in src/content/gallery.js)
  members/              ← member photos (pf.jpg, lk.jpg, ph.jpg, lb.jpg)
  releases/             ← album art (omnicide.jpg, amissaep.jpg, timeandagain.jpg)
  merch/                ← merch product photos

src/
  content/              ← ALL editable band data lives here (never touch components for content)
    siteConfig.js       ← band name, tagline, contact email, hero image path
    bio.js              ← band biography paragraphs (array of strings)
    members.js          ← 4 members: slug, name, role, photo, shortBio, fullBio[], spotifyPlaylistUrl
    discography.js      ← releases: id, title, year, type, description, coverArt, spotifyEmbedUrl, bandcampEmbedUrl
    gallery.js          ← [{filename, alt}] — files must exist in public/gallery/
    merch.js            ← bandcampStoreUrl (iframe src) OR items[] with id/name/description/photo/price/buyUrl
    socials.js          ← instagram, facebook, spotify, bandcamp, youtube (set to null to hide)

  components/
    Nav.jsx             ← fixed top nav, scroll-aware, mobile hamburger
    Hero.jsx            ← full-viewport hero with background image
    About.jsx           ← band bio + member card grid
    MemberCard.jsx      ← card linking to /members/:slug
    Discography.jsx     ← release grid
    ReleaseCard.jsx     ← single release with toggle Spotify/Bandcamp players
    Shows.jsx           ← Bandsintown widget embed
    Gallery.jsx         ← photo grid + Lightbox
    Lightbox.jsx        ← keyboard-navigable modal (ESC, arrows)
    Merch.jsx           ← Bandcamp store embed OR manual item grid
    Contact.jsx         ← email + social links
    Footer.jsx

  pages/
    HomePage.jsx        ← assembles all sections (route: /)
    MemberPage.jsx      ← individual member bio + Spotify playlist (route: /members/:slug)

  index.css             ← Tailwind directives + .hero-section, .section-heading, .btn-outline, .nav-link
  App.jsx               ← React Router routes
  main.jsx              ← entry point
```

## Current band data
- **Members**: Pontus Filén (Lead Guitar), Ludvig Klement (Rhythm Guitar/Vocals), Pontus Henningsson (Bass), Love Bernhard (Drums)
- **Releases**: "Omnicide" (Single, 2026), "Time and Again" (Single, 2026), "There Is Only War" (EP, 2025)
- **Contact**: amissbandofficial@gmail.com
- **Socials**: Instagram `amissa_band`, Facebook, Spotify, Bandcamp (`amissaband.bandcamp.com`), YouTube

## Design system (Tailwind custom tokens)
| Token | Value | Usage |
|-------|-------|-------|
| `void` | `#080808` | Page background |
| `surface` | `#111111` | Card backgrounds |
| `surface-2` | `#181818` | Hover/secondary surfaces |
| `site-border` | `#252525` | All borders |
| `accent` | `#c4c4c4` | Primary text / icons |
| `accent-bright` | `#f0f0f0` | Headings, highlights |
| `accent-dim` | `#888888` | Secondary text, labels |
| `font-display` | Bebas Neue | All section headings, nav brand |
| `font-body` | Inter | All body text |

## Key patterns & decisions

### Content-as-data
All band data lives in `src/content/`. Components import from there. **Never hardcode band data in component files.**

### Grid layout
Use `gap-6` for card grids (Music, Merch). **Do not use `gap-px bg-site-border`** — that technique bleeds grey background into empty grid cells when there are fewer items than columns.  
Gallery uses `gap-1` for tight photo mosaic feel.

### Shows section
Uses the **Bandsintown widget** (not the REST API). The script is injected dynamically via `useEffect` in `Shows.jsx`. Widget config (`data-artist-name`, `data-app-id`, etc.) is set directly on the `<a class="bit-widget-initializer">` element.

### Hero background
Uses `<img>` with `object-cover object-top` (not CSS `background-image`). This gives proper mobile scaling for landscape band photos on portrait screens. The section uses the custom `.hero-section` CSS class which sets `min-height: 100svh` (with `100vh` fallback) to handle mobile browser chrome correctly.

### Mobile nav
The hamburger overlay background uses the literal `bg-[#080808]` (not `bg-void/98`). Custom color + opacity modifiers can silently fail on some mobile browsers.  
The header always shows a dark gradient when not scrolled so the hamburger bars are visible against any hero image.

### Member pages
Route: `/members/:slug` where slug matches the `slug` field in `members.js`.  
Clicking a `MemberCard` navigates to the member page. The page shows photo, name, role, full bio paragraphs, and an optional embedded Spotify playlist.

## Environment variables
No env vars are currently required (widget doesn't need an API key).  
If switching back to Bandsintown REST API: set `VITE_BANDSINTOWN_APP_ID` in `.env` (gitignored).

## Deploying to Vercel
Push to GitHub → import repo on Vercel → framework preset: **Vite** → build: `npm run build` → output: `dist`. No env vars needed with the widget approach.
