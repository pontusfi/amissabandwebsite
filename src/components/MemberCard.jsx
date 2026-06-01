import { Link } from 'react-router-dom'

export default function MemberCard({ member }) {
  return (
    <Link
      to={`/members/${member.slug}`}
      className="group block bg-surface border border-site-border hover:border-accent/30 transition-all duration-300"
    >
      <div className="aspect-[3/4] overflow-hidden bg-surface-2">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
          }}
        />
      </div>
      <div className="p-5">
        <p className="text-[10px] tracking-widest2 text-accent-dim uppercase mb-1">
          {member.role}
        </p>
        <h3 className="font-display text-2xl tracking-widest text-accent-bright">
          {member.name}
        </h3>
        <p className="mt-2 text-sm text-accent-dim leading-relaxed line-clamp-3">
          {member.shortBio}
        </p>
        <span className="inline-block mt-4 text-[10px] tracking-widest2 text-accent uppercase border-b border-site-border pb-0.5 group-hover:border-accent transition-colors duration-200">
          Read more
        </span>
      </div>
    </Link>
  )
}
