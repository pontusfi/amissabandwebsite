import discography from '../content/discography'
import ReleaseCard from './ReleaseCard'

export default function Discography() {
  return (
    <section id="discography" className="py-28 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading">Music</h2>
        <div className="section-divider" />

        {discography.length === 0 ? (
          <p className="text-accent-dim text-sm tracking-wide">No releases yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {discography.map((release) => (
              <ReleaseCard key={release.id} release={release} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
