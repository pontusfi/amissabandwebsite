# AMISSA — Official Band Website

Built with React + Vite + Tailwind CSS. Deployed on Vercel.

---

## Running locally

```bash
npm install
cp .env.example .env   # fill in your Bandsintown App ID
npm run dev
```

The site will be available at `http://localhost:5173`.

---

## Content overview

All editable content lives in `src/content/`. You should never need to touch component code to update the site.

| File | What it controls |
|------|-----------------|
| `siteConfig.js` | Band name, tagline, contact email, Bandsintown artist name, hero image path |
| `bio.js` | Band biography paragraphs |
| `members.js` | Member names, roles, bios, photos, Spotify playlist URLs |
| `discography.js` | Releases (title, year, type, description, embed URLs) |
| `gallery.js` | Gallery image filenames |
| `merch.js` | Merch items or Bandcamp store embed URL |
| `socials.js` | Social media profile URLs |

---

## Adding a new release

1. Place the album art in `public/releases/` (e.g. `public/releases/my-album.jpg`)
2. Open `src/content/discography.js`
3. Add a new object to the array:

```js
{
  id: 3,                           // unique number
  title: 'My Album',
  year: 2025,
  type: 'Album',                   // Album | EP | Single | Demo
  description: 'Short description of the release.',
  coverArt: '/releases/my-album.jpg',
  spotifyEmbedUrl: 'https://open.spotify.com/embed/album/ALBUM_ID?utm_source=generator',
  bandcampEmbedUrl: 'https://bandcamp.com/EmbeddedPlayer/album=ID/size=large/...',
},
```

**Getting embed URLs:**
- **Spotify:** Open the album → `···` menu → Share → Embed → copy the `src` from the iframe code
- **Bandcamp:** Open the album → Share/Embed → copy the `src` from the iframe code

---

## Adding gallery photos

1. Place the image file in `public/gallery/` (e.g. `public/gallery/photo-7.jpg`)
2. Open `src/content/gallery.js`
3. Add an entry to the array:

```js
{ filename: 'photo-7.jpg', alt: 'Description of the photo' },
```

---

## Adding a new band member

Open `src/content/members.js` and add a new object following the existing pattern. Place their photo at `public/members/their-slug.jpg`.

---

## Updating member Spotify playlists

In `src/content/members.js`, set the `spotifyPlaylistUrl` field for a member to the embed `src` URL:

1. Open the playlist on Spotify
2. Click `···` → Share → Embed playlist
3. Copy the `src` attribute from the iframe code
4. Paste it as the member's `spotifyPlaylistUrl`

---

## Configuring the Bandsintown API

The Shows section fetches live tour dates from the Bandsintown API using the artist name **AMISSA**.

1. Get your App ID from [Bandsintown API documentation](https://help.artists.bandsintown.com/en/articles/9186477-api-documentation)
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Set your App ID:
   ```
   VITE_BANDSINTOWN_APP_ID=your_app_id_here
   ```

The artist name used for the API lookup is `"AMISSA"`, set in `src/content/siteConfig.js` under `bandsintownArtistName`.

> **Note:** `.env` is gitignored and never committed. On Vercel, set `VITE_BANDSINTOWN_APP_ID` as an environment variable under Project Settings → Environment Variables.

---

## Deploying to Vercel

### First deploy

1. Push the repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Add New Project → import the repo
3. Vercel auto-detects Vite. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`
4. Add environment variables under Project Settings → Environment Variables:
   - `VITE_BANDSINTOWN_APP_ID` = your app ID
5. Click Deploy

### Subsequent deploys

Push to `main` — Vercel deploys automatically.

### Custom domain

Project Settings → Domains → add your domain and follow the DNS instructions.

---

## Project structure

```
public/
  gallery/          ← add gallery photos here
  members/          ← add member photos here
  releases/         ← add album art here
  merch/            ← add merch product photos here
  hero.jpg          ← hero background image

src/
  content/          ← all editable content (band data)
  components/       ← UI components (rarely need editing)
  pages/            ← HomePage and MemberPage
  App.jsx
  main.jsx
  index.css
```
