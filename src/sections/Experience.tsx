import { ArrowUpRight, BriefcaseBusiness, ChevronDown, Code2, MapPin } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { LinkedInIcon } from '../components/LinkedInIcon'
import { ProgressTimeline } from '../components/ProgressTimeline'
import { portfolio, type Locale } from '../data/portfolio'

export function Experience({ locale }: { locale: Locale }) {
  const copy = portfolio[locale].experience
  return (
    <section className="section-wrap experience-section" id="experience" aria-labelledby="experience-title">
      <Reveal className="section-kicker"><span className="section-number">02</span>{copy.eyebrow}</Reveal>
      <div className="section-heading-row experience-heading-row">
        <Reveal><h2 className="section-heading" id="experience-title">{copy.title}</h2></Reveal>
      </div>
      <ProgressTimeline className="experience-timeline">
        {copy.entries.map((entry, index) => <Reveal as="li" key={entry.date} className="experience-timeline-item" delay={index * 0.08}>
          <details className="experience-card">
            <summary className="experience-summary">
              <span className="timeline-node"><BriefcaseBusiness size={15} /></span>
              <div className="experience-card-copy">
                <div className="experience-meta"><span className="timeline-date">{entry.date}</span><span className="experience-position">{entry.position}</span></div>
                <h3>{entry.project}</h3>
                <p className="timeline-organization">{entry.company} · {entry.location}</p>
                <p className="experience-summary-text">{entry.summary}</p>
              </div>
              <ChevronDown className="experience-chevron" size={18} aria-hidden="true" />
            </summary>
            <div className="experience-details">
              <h4>{copy.achievementsTitle}</h4>
              <ul>{entry.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul>
              <h4>{copy.technologiesTitle}</h4>
              <div className="project-tags">{entry.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              {(entry.github || entry.linkedin) && <div className="experience-links">
                {entry.github && <a href={entry.github} target="_blank" rel="noopener noreferrer" aria-label={`${locale === 'fr' ? 'Code GitHub' : 'GitHub code'}: ${entry.project}`}><Code2 size={15} />GitHub<ArrowUpRight size={13} /></a>}
                {entry.linkedin && <a href={entry.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${locale === 'fr' ? 'Publication LinkedIn' : 'LinkedIn post'}: ${entry.project}`}><LinkedInIcon />LinkedIn<ArrowUpRight size={13} /></a>}
              </div>}
            </div>
          </details>
        </Reveal>)}
      </ProgressTimeline>
      <div className="events-block">
        <Reveal><div className="events-heading"><div><h3 className="section-kicker">{copy.eventsTitle}</h3><p className="section-intro">{copy.eventsIntro}</p></div></div></Reveal>
        <div className="events-grid">
          {copy.events.map((event, index) => <Reveal as="article" className="event-card" key={event.title} delay={index * 0.07}>
            <div className="event-card-top"><span>GITEX AFRICA</span><span>0{index + 1}</span></div>
            <h3>{event.title}</h3>
            <p className="event-place"><MapPin size={15} />{copy.eventPlace}</p>
            <a className="event-link" href={event.url} target="_blank" rel="noopener noreferrer" aria-label={`${copy.viewPost}: ${event.title} (${locale === 'fr' ? 'ouvre un nouvel onglet' : 'opens in a new tab'})`}>
              <LinkedInIcon />{copy.viewPost}<ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </Reveal>)}
        </div>
      </div>
    </section>
  )
}
