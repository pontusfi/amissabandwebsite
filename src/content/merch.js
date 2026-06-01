// Option A: embed your Bandcamp merch store directly.
// Get the embed URL from your Bandcamp store page → Share/Embed.
// Set bandcampStoreUrl to the iframe src, and set items to [].
//
// Option B: list individual merch items manually.
// Set bandcampStoreUrl to null and populate items[].
//
// photo: place images in /public/merch/ and reference as '/merch/filename.jpg'

const merch = {
  
  // Bandcamp store embed URL (iframe src). Set to null to use items list instead.
  bandcampStoreUrl: null,

  items: [
    /*{
      id: 1,
      name: 'AMISSA Logo T-Shirt',
      description: 'Black, 100% cotton. Sizes S–XXL.',
      photo: '/merch/tshirt.jpg',
      price: '€20',
      buyUrl: 'https://amissa.bandcamp.com/merch',
    },
    {
      id: 2,
      name: 'Album Vinyl',
      description: 'Limited pressing on black vinyl.',
      photo: '/merch/vinyl.jpg',
      price: '€25',
      buyUrl: 'https://amissa.bandcamp.com/merch',
    },*/
  ],
}

export default merch
