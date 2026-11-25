import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { profile, portfolio, type Locale } from '../data/portfolio'
import { translations } from '../data/translations'

export function Header({ locale }: { locale: Locale }) {
  const { i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('')
  const [compact, setCompact] = useState(false)
  const copy = translations[locale]
  const links = portfolio[locale].nav
  const changeLanguage = () => void i18n.changeLanguage(locale === 'fr' ? 'en' : 'fr')

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => section !== null)
    if (!('IntersectionObserver' in window) || sections.length === 0) return

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
      if (visible[0]) setActiveHref(`#${visible[0].target.id}`)
    }, { rootMargin: '-90px 0px -55% 0px', threshold: 0 })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [links])

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>('#top')
    if (!hero) return
    const observer = new IntersectionObserver(([entry]) => setCompact(!entry.isIntersecting), { threshold: 0.05 })
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`site-header ${compact ? 'site-header--compact' : ''}`}>
      <a className="brand" href="#top">
        <span className="brand-mark">YS<span>.</span></span>
        <span className="brand-name">Youssef Sabbab</span>
      </a>
      <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label={locale === 'fr' ? 'Navigation principale' : 'Main navigation'}>
        {links.map((link) => (
          <a href={link.href} key={link.href} aria-current={activeHref === link.href ? 'location' : undefined} onClick={() => { setActiveHref(link.href); setMenuOpen(false) }}>{link.label}</a>
        ))}
      </nav>
      <div className="header-actions">
        <button className="language-toggle" type="button" onClick={changeLanguage} aria-label={`FR / EN — ${copy.language}: ${copy.switchTo}`}>
          <span className={locale === 'fr' ? 'is-current' : ''}>FR</span><i aria-hidden="true">/</i><span className={locale === 'en' ? 'is-current' : ''}>EN</span>
        </button>
        <a className="header-cta" href={`mailto:${profile.email}`}>
          {locale === 'fr' ? 'Discutons' : 'Let’s talk'} <ArrowUpRight size={15} />
        </a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? copy.closeMenu : copy.menu} aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  )
}
