import siteConfig from '../content/siteConfig'
import socials from '../content/socials'

const SOCIAL_LABELS = {
  instagram: 'Instagram',
  facebook: 'Facebook',
  spotify: 'Spotify',
  bandcamp: 'Bandcamp',
  youtube: 'YouTube',
}

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading">Contact</h2>
        <div className="section-divider" />

        <div className="grid md:grid-cols-2 gap-16">
          {/* Email */}
          <div>
            <p className="text-[10px] tracking-widest3 text-accent-dim uppercase mb-4">
              Bookings & Press
            </p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-accent-bright text-lg hover:text-white transition-colors duration-200 border-b border-site-border hover:border-accent pb-0.5"
            >
              {siteConfig.contactEmail}
            </a>
          </div>

          {/* Socials */}
          <div>
            <p className="text-[10px] tracking-widest3 text-accent-dim uppercase mb-4">
              Follow
            </p>
            <ul className="flex flex-col gap-3">
              {Object.entries(socials)
                .filter(([, url]) => url)
                .map(([platform, url]) => (
                  <li key={platform}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-accent hover:text-accent-bright transition-colors duration-200 group"
                    >
                      <span className="text-[10px] tracking-widest2 text-accent-dim uppercase w-20">
                        {SOCIAL_LABELS[platform] || platform}
                      </span>
                      <span className="text-xs text-accent-dim group-hover:text-accent transition-colors truncate">
                        {url.replace(/^https?:\/\//, '')}
                      </span>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
