import { useState } from 'react'
import gallery from '../content/gallery'
import Lightbox from './Lightbox'

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)

  const openLightbox = (i) => setActiveIndex(i)
  const closeLightbox = () => setActiveIndex(null)
  const prev = () => setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length)
  const next = () => setActiveIndex((i) => (i + 1) % gallery.length)

  return (
    <section id="gallery" className="py-28 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading">Gallery</h2>
        <div className="section-divider" />

        {gallery.length === 0 ? (
          <p className="text-accent-dim text-sm tracking-wide">No photos yet.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            {gallery.map((image, i) => (
              <button
                key={image.filename}
                className="relative aspect-square overflow-hidden bg-surface-2 group focus:outline-none focus:ring-1 focus:ring-accent/30"
                onClick={() => openLightbox(i)}
                aria-label={`Open photo: ${image.alt}`}
              >
                <img
                  src={`/gallery/${image.filename}`}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-void/0 group-hover:bg-void/20 transition-colors duration-300" />
              </button>
            ))}
          </div>
        )}
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={gallery}
          index={activeIndex}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  )
}
