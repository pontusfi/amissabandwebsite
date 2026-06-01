import videos from '../content/videos'
import socials from '../content/socials'

export default function Videos() {
  return (
    <section id="videos" className="py-28 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading">Videos</h2>
        <div className="section-divider" />

        {videos.length === 0 ? (
          <div className="flex flex-col items-start gap-4">
            <p className="text-accent-dim text-sm tracking-wide">No videos yet.</p>
            {socials.youtube && (
              <a
                href={socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Visit our YouTube
              </a>
            )}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video) => (
                <div key={video.id} className="flex flex-col gap-3">
                  <div className="relative w-full aspect-video bg-surface-2">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-display text-xl tracking-widest text-accent-bright">
                      {video.title}
                    </p>
                    {video.description && (
                      <p className="text-xs text-accent-dim mt-1 leading-relaxed">
                        {video.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {socials.youtube && (
              <div className="mt-12">
                <a
                  href={socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  More on YouTube
                </a>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
