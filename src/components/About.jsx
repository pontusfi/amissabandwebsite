import bio from '../content/bio'
import members from '../content/members'
import MemberCard from './MemberCard'

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-void">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div>
          <h2 className="section-heading">About</h2>
          <div className="section-divider" />
        </div>

        {/* Band biography */}
        <div className="max-w-2xl mb-24">
          {bio.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-accent text-base leading-8 mb-5 last:mb-0"
            >
              {p}
            </p>
          ))}
        </div>

        {/* Members */}
        <div>
          <h3 className="text-xs tracking-widest3 text-accent-dim uppercase mb-8">
            Members
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-site-border">
            {members.map((member) => (
              <div key={member.slug} className="bg-void">
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
