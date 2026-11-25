import { useRef, useState, type FocusEvent, type PointerEvent as ReactPointerEvent } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, CheckCircle2, Code2, ExternalLink, X } from 'lucide-react'
import { ProjectVisual } from '../components/visuals/ProjectVisual'
import { LinkedInIcon } from '../components/LinkedInIcon'
import { Reveal } from '../components/Reveal'
import { cn } from '../lib/utils'
import { portfolio, type Locale, type Project, type ProjectFilter } from '../data/portfolio'

type ProjectsCopy = (typeof portfolio)[Locale]['projects']
type FilterId = 'all' | ProjectFilter
type BentoLayout = 'featured' | 'wide' | 'narrow' | 'full'

function ProjectCard({ project, copy, locale, layout, onOpen }: { project: Project; copy: ProjectsCopy; locale: Locale; layout: BentoLayout; onOpen: () => void }) {
  const [active, setActive] = useState(false)
  const cardRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    const element = cardRef.current
    if (!element) return
    const rect = element.getBoundingClientRect()
    element.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`)
    element.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`)
  }

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setActive(false)
  }

  return (
    <motion.div
      layout
      className={cn('project-card-shell', `project-card-shell--${layout}`)}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.985 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.28, ease: [0.22, 1, 0.36, 1], layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
    >
      <article
        ref={cardRef}
        className={cn('project-card', `project-card--${layout}`, active && 'is-active')}
        onPointerMove={handlePointerMove}
        onPointerEnter={() => setActive(true)}
        onPointerLeave={() => setActive(false)}
        onFocusCapture={() => setActive(true)}
        onBlurCapture={handleBlur}
      >
        <button className="project-card-visual" type="button" onClick={onOpen} aria-label={`${copy.open}: ${project.title}`}>
          <ProjectVisual visual={project.visual} locale={locale} active={active} />
          <span className="project-visual-hint" aria-hidden="true">{copy.open}<ArrowUpRight size={13} /></span>
        </button>
        <div className="project-card-content">
          <div className="project-card-meta"><span>{project.kind}</span>{project.year && <span>{project.year}</span>}</div>
          {project.featured && <span className="project-featured-badge">{copy.featuredLabel}</span>}
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-impact">{project.impact}</p>
          <div className="project-tags" aria-label={copy.stackLabel}>{project.stack.slice(0, 5).map((technology) => <span key={technology}>{technology}</span>)}{project.stack.length > 5 && <span>+{project.stack.length - 5}</span>}</div>
          <div className="project-card-actions">
            {project.github && <a className="project-action" href={project.github} target="_blank" rel="noopener noreferrer"><Code2 size={14} />{copy.code}<ArrowUpRight size={13} /></a>}
            {project.linkedin && <a className="project-action" href={project.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${copy.post}: ${project.title}`}><LinkedInIcon />{copy.post}<ArrowUpRight size={13} /></a>}
            {project.demo && <a className="project-action" href={project.demo} target="_blank" rel="noopener noreferrer"><ExternalLink size={14} />{copy.demo}<ArrowUpRight size={13} /></a>}
            <button className="project-action project-action--detail" type="button" onClick={onOpen}>{copy.detail}<ArrowDownRight size={14} /></button>
          </div>
        </div>
      </article>
    </motion.div>
  )
}

function ProjectDialog({ project, copy, locale, onClose }: { project: Project | null; copy: ProjectsCopy; locale: Locale; onClose: () => void }) {
  return (
    <Dialog.Root open={project !== null} onOpenChange={(open) => { if (!open) onClose() }}>
      <Dialog.Portal>
        {project && (
          <>
            <Dialog.Overlay className="dialog-overlay" />
            <Dialog.Content className="project-dialog project-dialog--case">
              <div className="dialog-topline">
                <span>{project.kind}{project.year ? ` · ${project.year}` : ''}</span>
                <Dialog.Close className="dialog-close" aria-label={copy.close}><X size={19} /></Dialog.Close>
              </div>
              <div className="project-dialog-hero">
                <div className="project-dialog-visual"><ProjectVisual visual={project.visual} locale={locale} active decorative={false} /></div>
                <div className="project-dialog-intro">
                  <Dialog.Title className="dialog-title">{project.title}</Dialog.Title>
                  <Dialog.Description className="dialog-impact">{project.impact}</Dialog.Description>
                  <p className="dialog-description">{project.description}</p>
                  <div className="project-tags">{project.stack.map((technology) => <span key={technology}>{technology}</span>)}</div>
                  {(project.github || project.linkedin || project.demo) && <div className="dialog-links">
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer"><Code2 size={15} />{copy.code}<ArrowUpRight size={14} /></a>}
                    {project.linkedin && <a href={project.linkedin} target="_blank" rel="noopener noreferrer"><LinkedInIcon />{copy.post}<ArrowUpRight size={14} /></a>}
                    {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer"><ExternalLink size={15} />{copy.demo}<ArrowUpRight size={14} /></a>}
                  </div>}
                </div>
              </div>
              <div className="project-dialog-grid">
                <section className="dialog-section"><h3>{copy.contextLabel}</h3><p>{project.context}</p></section>
                <section className="dialog-section"><h3>{copy.architectureLabel}</h3><p>{project.architecture}</p></section>
                <section className="dialog-section"><h3>{copy.challengesLabel}</h3><ul>{project.challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}</ul></section>
                <section className="dialog-section"><h3>{copy.resultsLabel}</h3><ul className="dialog-result-list">{project.results.map((result) => <li key={result}><CheckCircle2 size={13} /><span>{result}</span></li>)}</ul></section>
              </div>
              <div className="dialog-footer">
                <div><h3>{copy.stackLabel}</h3><div className="project-tags">{project.stack.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
                <div><h3>{copy.roleLabel}</h3><p>{project.role}</p></div>
              </div>
            </Dialog.Content>
          </>
        )}
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export function Projects({ locale }: { locale: Locale }) {
  const copy = portfolio[locale].projects
  const [activeFilter, setActiveFilter] = useState<FilterId>('all')
  const [selected, setSelected] = useState<Project | null>(null)
  const reduceMotion = useReducedMotion()
  const visibleProjects = activeFilter === 'all' ? copy.items : copy.items.filter((project) => (project.filters as readonly ProjectFilter[]).includes(activeFilter))
  const rest = visibleProjects.filter((project) => !project.featured)
  const layoutFor = (project: Project, index: number): BentoLayout => {
    if (project.number === '02' || project.number === '03') return 'full'
    if (rest.length === 1) return 'full'
    if (rest.length === 2) return index === 0 ? 'wide' : 'narrow'
    return (['wide', 'narrow', 'full'][index % 3] as BentoLayout)
  }
  const countFor = (id: FilterId) => id === 'all' ? copy.items.length : copy.items.filter((project) => (project.filters as readonly ProjectFilter[]).includes(id)).length

  return (
    <section className="section-wrap projects-section" id="projects" aria-labelledby="projects-title">
      <Reveal className="section-kicker"><span className="section-number">03</span>{copy.eyebrow}</Reveal>
      <div className="section-heading-row projects-heading-row"><Reveal><h2 className="section-heading" id="projects-title">{copy.title.split('\n').map((line) => <span key={line}>{line}</span>)}</h2></Reveal><Reveal delay={0.1}><p className="section-intro">{copy.intro}</p></Reveal></div>
      <Reveal>
        <div className="project-filters" role="group" aria-label={locale === 'fr' ? 'Filtrer les projets par catégorie' : 'Filter projects by category'}>
          {copy.filters.map((filter) => {
            const isActive = activeFilter === filter.id
            return (
              <button key={filter.id} type="button" className={cn('project-filter', isActive && 'is-active')} aria-pressed={isActive} onClick={() => setActiveFilter(filter.id)}>
                {isActive && <motion.span layoutId="project-filter-active" className="project-filter-bg" transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 32 }} />}
                <span className="project-filter-label">{filter.label}</span>
                <span className="project-filter-count">{countFor(filter.id)}</span>
              </button>
            )
          })}
        </div>
      </Reveal>
      <p className="sr-only" aria-live="polite">{locale === 'fr' ? `${visibleProjects.length} projets affichés` : `${visibleProjects.length} projects shown`}</p>
      <motion.div layout className="projects-bento">
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
              copy={copy}
              locale={locale}
              layout={project.featured ? 'featured' : layoutFor(project, rest.indexOf(project))}
              onOpen={() => setSelected(project)}
            />
          ))}
        </AnimatePresence>
      </motion.div>
      <Reveal className="project-footnote"><span className="footnote-line" />{copy.footnote}</Reveal>
      <ProjectDialog project={selected} copy={copy} locale={locale} onClose={() => setSelected(null)} />
    </section>
  )
}
