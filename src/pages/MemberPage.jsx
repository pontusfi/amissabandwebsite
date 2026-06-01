import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import members from '../content/members'
import siteConfig from '../content/siteConfig'

export default function MemberPage() {
  const { slug } = useParams()
  const member = members.find((m) => m.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (member) {
      document.title = `${member.name} — ${siteConfig.bandName}`
    }
    return () => { document.title = siteConfig.bandName }
  }, [member])

  if (!member) {
    return (
      <div className="min-h-screen bg-void flex flex-col items-center justify-center gap-6 px-6">
        <p className="text-accent-dim text-sm tracking-wide">Member not found.</p>
        <Link to="/" className="btn-outline">
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-void">
      {/* Back nav */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-site-border bg-void/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-accent-dim hover:text-accent-bright transition-colors text-xs tracking-widest2 uppercase"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
          <span className="font-display text-lg tracking-widest2 text-accent-bright">
            {siteConfig.bandName}
          </span>
        </div>
      </div>

      <main className="pt-24 pb-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Photo */}
            <div className="aspect-[3/4] bg-surface overflow-hidden sticky top-24">
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-surface-2">
                  <span className="font-display text-8xl text-site-border">A</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="pt-2">
              <p className="text-[10px] tracking-widest3 text-accent-dim uppercase mb-2">
                {member.role}
              </p>
              <h1 className="font-display text-5xl md:text-6xl tracking-widest2 text-accent-bright leading-none mb-8">
                {member.name}
              </h1>

              <div className="w-12 h-px bg-site-border mb-8" />

              <div className="space-y-5">
                {member.fullBio.map((paragraph, i) => (
                  <p key={i} className="text-accent leading-8 text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Spotify playlist embed */}
              {member.spotifyPlaylistUrl && (
                <div className="mt-12">
                  <p className="text-[10px] tracking-widest3 text-accent-dim uppercase mb-4">
                    Personal Playlist
                  </p>
                  <iframe
                    src={member.spotifyPlaylistUrl}
                    width="100%"
                    height="380"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title={`${member.name}'s Spotify Playlist`}
                    className="rounded"
                  />
                </div>
              )}

              {/* Back to band */}
              <div className="mt-12 pt-8 border-t border-site-border">
                <Link
                  to="/#about"
                  className="btn-outline inline-block"
                  onClick={() => {
                    setTimeout(() => {
                      const el = document.getElementById('about')
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }, 100)
                  }}
                >
                  All Members
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
