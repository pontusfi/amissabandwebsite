import siteConfig from '../content/siteConfig'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-site-border py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-display text-sm tracking-widest2 text-accent-dim">
          {siteConfig.bandName}
        </span>
        <span className="text-[10px] text-accent-dim/40 tracking-wide">
          © {year} {siteConfig.bandName}. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
