import merch from '../content/merch'

export default function Merch() {
  return (
    <section id="merch" className="py-28 px-6 bg-void">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading">Merch</h2>
        <div className="section-divider" />

        {/* Option A: Bandcamp store embed */}
        {merch.bandcampStoreUrl ? (
          <div className="w-full">
            <iframe
              src={merch.bandcampStoreUrl}
              width="100%"
              height="600"
              frameBorder="0"
              loading="lazy"
              title="AMISSA Merch Store"
              seamless
            />
          </div>
        ) : merch.items.length === 0 ? (
          /* No items */
          <p className="text-accent-dim text-sm tracking-wide">No merch available yet.</p>
        ) : (
          /* Option B: Manual merch items */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {merch.items.map((item) => (
              <a
                key={item.id}
                href={item.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-site-border hover:border-accent/30 transition-colors duration-300"
              >
                <div className="aspect-square bg-surface overflow-hidden">
                  {item.photo ? (
                    <img
                      src={item.photo}
                      alt={item.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-site-border font-display text-4xl">A</span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl tracking-widest text-accent-bright">
                    {item.name}
                  </h3>
                  <p className="text-xs text-accent-dim mt-1 leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-sm text-accent mt-3">{item.price}</p>
                  <span className="inline-block mt-3 text-[10px] tracking-widest2 text-accent uppercase border-b border-site-border pb-0.5 group-hover:border-accent transition-colors">
                    Buy
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
