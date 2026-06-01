// Each member has a unique slug used in the URL: /members/:slug
// photo: place images in /public/members/ and reference by filename, e.g. '/members/alex.jpg'
// spotifyPlaylistUrl: the full Spotify playlist embed src URL (iframe src), or null
const members = [
  {
    slug: 'lead-guitarist',
    name: 'PONTUS FILÉN',
    role: 'Lead Guitar',
    photo: '/members/pf.jpg',
    shortBio: 'A short description shown on the band member card in the About section.',
    fullBio: [
      'Full biography paragraph one. Replace this placeholder text with the actual member biography.',
      'Full biography paragraph two. Add as many paragraphs as needed.',
    ],
    // Paste the src URL from a Spotify embed iframe, e.g.:
    // "https://open.spotify.com/embed/playlist/PLAYLIST_ID?utm_source=generator"
    spotifyPlaylistUrl: null,
  },
  {
    slug: 'vocalist',
    name: 'LUDVIG KLEMENT',
    role: 'Rhythm Guitar / Vocals',
    photo: '/members/lk.jpg',
    shortBio: 'A short description shown on the band member card in the About section.',
    fullBio: [
      'Full biography paragraph one. Replace this placeholder text with the actual member biography.',
      'Full biography paragraph two. Add as many paragraphs as needed.',
    ],
    spotifyPlaylistUrl: null,
  },
  {
    slug: 'bassist',
    name: 'PONTUS HENNINGSSON',
    role: 'Bass',
    photo: '/members/ph.jpg',
    shortBio: 'A short description shown on the band member card in the About section.',
    fullBio: [
      'Full biography paragraph one. Replace this placeholder text with the actual member biography.',
      'Full biography paragraph two. Add as many paragraphs as needed.',
    ],
    spotifyPlaylistUrl: null,
  },
  {
    slug: 'drummer',
    name: 'LOVE BERNHARD',
    role: 'Drums',
    photo: '/members/lb.jpg',
    shortBio: 'A short description shown on the band member card in the About section.',
    fullBio: [
      'Full biography paragraph one. Replace this placeholder text with the actual member biography.',
      'Full biography paragraph two. Add as many paragraphs as needed.',
    ],
    spotifyPlaylistUrl: null,
  },
]

export default members
