import { useEffect } from 'react'

const WIDGET_SCRIPT = 'https://widgetv3.bandsintown.com/main.min.js'

export default function Shows() {
  useEffect(() => {
    // Only inject the script once across navigations
    if (document.querySelector(`script[src="${WIDGET_SCRIPT}"]`)) return

    const script = document.createElement('script')
    script.charset = 'utf-8'
    script.src = WIDGET_SCRIPT
    document.body.appendChild(script)
  }, [])

  return (
    <section id="shows" className="py-28 px-6 bg-void">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading">Shows</h2>
        <div className="section-divider" />

        <div className="w-full overflow-hidden">
        <a
          className="bit-widget-initializer"
          data-artist-name="id_15638162"
          data-background-color="rgba(0,0,0,1)"
          data-separator-color="rgba(180,0,0,1)"
          data-text-color="rgba(255,255,255,1)"
          data-app-id="56f6b92de0736a98261c45d474a8e391"
          data-bit-logo-color="rgba(255,255,255,1)"
        />
        </div>
      </div>
    </section>
  )
}
