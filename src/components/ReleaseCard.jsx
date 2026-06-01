import { useState } from 'react'

export default function ReleaseCard({ release }) {
  const [activePlayer, setActivePlayer] = useState(null)

  const hasSpotify = !!release.spotifyEmbedUrl
  const hasBandcamp = !!release.bandcampEmbedUrl

  return (
    <div className="border border-site-border bg-surface flex flex-col">
      {/* Cover art */}
      <div className="aspect-square bg-surface-2 overflow-hidden">
        {release.coverArt ? (
          <img
            src={release.coverArt}
            alt={`${release.title} cover art`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-site-border text-6xl font-display tracking-widest">
              A
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-baseline justify-between gap-2 mb-1">
          <h3 className="font-display text-2xl tracking-widest text-accent-bright leading-tight">
            {release.title}
          </h3>
          <span className="text-[10px] text-accent-dim tracking-wider uppercase shrink-0">
            {release.year}
          </span>
        </div>
        <span className="text-[10px] tracking-widest2 text-accent-dim uppercase mb-4">
          {release.type}
        </span>
        <p className="text-sm text-accent leading-relaxed mb-6 flex-1">
          {release.description}
        </p>

        {/* Player toggle buttons */}
        {(hasSpotify || hasBandcamp) && (
          <div className="flex gap-2 mb-4">
            {hasSpotify && (
              <button
                onClick={() => setActivePlayer(activePlayer === 'spotify' ? null : 'spotify')}
                className={`btn-outline text-[10px] ${activePlayer === 'spotify' ? 'border-accent text-accent-bright' : ''}`}
              >
                Spotify
              </button>
            )}
            {hasBandcamp && (
              <button
                onClick={() => setActivePlayer(activePlayer === 'bandcamp' ? null : 'bandcamp')}
                className={`btn-outline text-[10px] ${activePlayer === 'bandcamp' ? 'border-accent text-accent-bright' : ''}`}
              >
                Bandcamp
              </button>
            )}
          </div>
        )}

        {/* Embedded players */}
        {activePlayer === 'spotify' && hasSpotify && (
          <div className="w-full">
            <iframe
              src={release.spotifyEmbedUrl}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title={`${release.title} on Spotify`}
              className="rounded"
            />
          </div>
        )}
        {activePlayer === 'bandcamp' && hasBandcamp && (
          <div className="w-full">
            <iframe
              src={release.bandcampEmbedUrl}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay"
              loading="lazy"
              title={`${release.title} on Bandcamp`}
            />
          </div>
        )}

        {!hasSpotify && !hasBandcamp && (
          <p className="text-xs text-accent-dim italic">
            No streaming links yet — add embed URLs in discography.js
          </p>
        )}
      </div>
    </div>
  )
}
