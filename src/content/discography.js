// Add new releases by copying a block and filling in the fields.
//
// spotifyEmbedUrl: get from Spotify → Share → Embed → copy the src attribute of the iframe
//   e.g. "https://open.spotify.com/embed/album/ALBUM_ID?utm_source=generator"
//
// bandcampEmbedUrl: get from Bandcamp → Share/Embed → copy the src attribute of the iframe
//   e.g. "https://bandcamp.com/EmbeddedPlayer/album=ALBUM_ID/size=large/..."
//
// coverArt: place image in /public/releases/ and reference as '/releases/filename.jpg'

const discography = [
  {
    id: 1,
    title: 'Omnicide',
    year: 2026,
    type: 'Single', // Album | EP | Single | Demo
    description: 'A standalone single driven by atmosphere and agression',
    coverArt: '/releases/omnicide.jpg',
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/3rIZpaDxfOExsqeUawMGCC?utm_source=generator&theme=0" ,
    bandcampEmbedUrl: null,
  },
    {
    id: 3,
    title: 'Time and Again',
    year: 2026,
    type: 'Single', // Album | EP | Single | Demo
    description: 'A standalone single driven by atmosphere and agression',
    coverArt: '/releases/timeandagain.jpg',
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/7bdDIiBxvX00JzFxD7PF0R?utm_source=generator",
    bandcampEmbedUrl: null,
  },
  {
    id: 2,
    title: 'There Is Only War',
    year: 2025,
    type: 'EP',
    description: 'The debut EP from AMISSA',
    coverArt: '/releases/amissaep.jpg',
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/3rIZpaDxfOExsqeUawMGCC?utm_source=generator&theme=0",
    bandcampEmbedUrl: null,
  },
]

export default discography
