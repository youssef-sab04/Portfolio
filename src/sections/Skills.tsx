import { ChartNoAxesColumn, Code2, Database, Layers3, Network, Sparkles } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { portfolio, type Locale } from '../data/portfolio'

const skillIcons = [Sparkles, Layers3, Code2, Network, Database, ChartNoAxesColumn]

export function Skills({ locale }: { locale: Locale }) {
  const copy = portfolio[locale].skills

  return (
    <section className="section-wrap skills-section" id="skills" aria-labelledby="skills-title">
      <Reveal className="section-kicker"><span className="section-number">04</span>{copy.eyebrow}</Reveal>
      <div className="section-heading-row"><Reveal><h2 className="section-heading" id="skills-title">{copy.title}</h2></Reveal><Reveal delay={0.1}><p className="section-intro">{copy.intro}</p></Reveal></div>
      <div className="skills-grid">
        {copy.groups.map((group, index) => {
          const Icon = skillIcons[index] ?? Code2
          return <Reveal className="skill-card" key={group.title} delay={(index % 3) * 0.06}>
            <div className="skill-card-top"><span className="skill-icon"><Icon size={18} strokeWidth={1.6} /></span><span className="skill-index">0{index + 1}</span></div>
            <h3>{group.title}</h3>
            <div className="skill-chip-list">{group.items.map((item) => <span className="skill-chip" key={item}>{item}</span>)}</div>
            <div className="skill-signal" aria-hidden="true"><span /></div>
          </Reveal>
        })}
      </div>
      <Reveal className="language-row"><span className="language-label">{copy.languagesTitle}</span><div>{copy.languages.map((language) => <span key={language}>{language}</span>)}</div></Reveal>
    </section>
  )
}
