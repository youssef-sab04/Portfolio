import { GraduationCap, Quote } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { ProgressTimeline } from '../components/ProgressTimeline'
import { portfolio, type Locale } from '../data/portfolio'

export function About({ locale }: { locale: Locale }) {
  const copy = portfolio[locale].about
  return (
    <section className="section-wrap about-section" id="about" aria-labelledby="about-title">
      <Reveal className="section-kicker"><span className="section-number">01</span>{copy.eyebrow}</Reveal>
      <div className="about-layout">
        <Reveal className="section-heading-block"><h2 className="section-heading" id="about-title">{copy.title.split('\n').map((line) => <span key={line}>{line}</span>)}</h2></Reveal>
        <Reveal className="about-copy" delay={0.1}>
          {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="about-note"><Quote size={17} /><span>{copy.note}</span></div>
        </Reveal>
      </div>
      <Reveal className="about-tags" delay={0.15}>{copy.labels.map((label, index) => <span className="about-tag" key={label}><span>0{index + 1}</span>{label}</span>)}</Reveal>
      <div className="education-block">
        <Reveal><h3 className="about-subtitle"><GraduationCap size={19} />{copy.educationTitle}</h3></Reveal>
        <ProgressTimeline className="education-list">
          {copy.education.map((entry, index) => <Reveal as="li" className={`education-item ${entry.ongoing ? 'education-item--current' : ''}`} key={entry.date} delay={index * 0.08}>
            <div className="education-card">
              <div className="education-card-top"><span className="education-date">{entry.date}</span>{entry.ongoing && <span className="education-status">{copy.ongoing}</span>}</div>
              <h4>{entry.title}</h4><p className="education-organization">{entry.organization}</p><p className="education-description">{entry.description}</p>
              <div className="education-tags">{entry.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </Reveal>)}
        </ProgressTimeline>
      </div>
    </section>
  )
}
