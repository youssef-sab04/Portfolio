import { ArrowDownRight, ArrowUpRight, Download, MapPin } from 'lucide-react'
import { profile, portfolio, type Locale } from '../data/portfolio'
import { MagneticLink } from '../components/MagneticLink'

export function Hero({ locale }: { locale: Locale }) {
  const copy = portfolio[locale].hero

  return (
    <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-eyebrow"><span className="eyebrow-dot" />{copy.eyebrow}</div>
        <h1 id="hero-title">
          {copy.headline.split('\n').map((line, index) => <span className="hero-headline-line" key={line}>{index === 1 ? <>{line.split(' ').slice(0, -1).join(' ')} <em>{line.split(' ').at(-1)}</em></> : line}</span>)}
        </h1>
        <p className="hero-descriptor">{copy.descriptor}</p>
        <p className="hero-intro">{copy.intro}</p>
        <div className="hero-availability"><span className="availability-pulse" />{copy.availability}</div>
        <div className="hero-actions">
          <MagneticLink className="button button-primary" href="#projects">{copy.projectsCta}<ArrowDownRight size={16} /></MagneticLink>
          <a className="button button-text" href={`mailto:${profile.email}`}>{copy.contactCta}<ArrowUpRight size={16} /></a>
          <a className="button button-outline" href={profile.cv} download="Youssef-Sabbab-CV.pdf">{copy.cvCta}<Download size={15} /></a>
        </div>
      </div>
      <div className="hero-portrait-wrap">
        <div className="portrait-frame"><img src={profile.photo} alt={copy.portraitAlt} width="400" height="400" fetchPriority="high" /></div>
        <div className="portrait-caption"><MapPin size={13} />{copy.portraitNote}</div>
        <div className="portrait-index" aria-hidden="true">FIG. 01 — YS</div>
      </div>
    </section>
  )
}
