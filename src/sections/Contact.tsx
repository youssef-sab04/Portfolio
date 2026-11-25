import { ArrowUpRight, Code2, Mail, MapPin, Phone } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { MagneticLink } from '../components/MagneticLink'
import { LinkedInIcon } from '../components/LinkedInIcon'
import { profile, portfolio, type Locale } from '../data/portfolio'

export function Contact({ locale }: { locale: Locale }) {
  const copy = portfolio[locale].contact
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-wrap contact-layout">
        <div className="contact-copy">
          <Reveal><span className="section-kicker"><span className="section-number">06</span>{copy.eyebrow}</span><h2 className="section-heading" id="contact-title">{copy.title.split('\n').map((line) => <span key={line}>{line}</span>)}</h2><p className="section-intro">{copy.intro}</p></Reveal>
          <Reveal className="contact-details" delay={0.1}>
            <a href={`mailto:${profile.email}`}><span className="contact-detail-icon"><Mail size={16} /></span><span><small>{copy.email}</small>{profile.email}</span><ArrowUpRight size={15} /></a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}><span className="contact-detail-icon"><Phone size={16} /></span><span><small>{copy.phone}</small>{profile.phone}</span><ArrowUpRight size={15} /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><span className="contact-detail-icon"><LinkedInIcon /></span><span><small>{copy.linkedin}</small>youssef-sabbab</span><ArrowUpRight size={15} /></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer"><span className="contact-detail-icon"><Code2 size={16} /></span><span><small>{copy.github}</small>youssef-sab04</span><ArrowUpRight size={15} /></a>
            <div><span className="contact-detail-icon"><MapPin size={16} /></span><span><small>{copy.location}</small>{copy.place}</span></div>
          </Reveal>
        </div>
        <Reveal className="contact-action" delay={0.12}>
          <p>{locale === 'fr' ? 'Une question ou une idée à partager ?' : 'Have a question or an idea to share?'}</p>
          <MagneticLink className="button button-primary contact-cta" href={`mailto:${profile.email}`}>{copy.cta}<ArrowUpRight size={17} /></MagneticLink>
        </Reveal>
      </div>
    </section>
  )
}
