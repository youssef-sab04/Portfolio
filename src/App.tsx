import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { portfolio, type Locale } from './data/portfolio'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Experience } from './sections/Experience'
import { Certificates } from './sections/Certificates'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { translations } from './data/translations'

function App() {
  const { i18n } = useTranslation()
  const locale: Locale = i18n.resolvedLanguage?.startsWith('en') || i18n.language.startsWith('en') ? 'en' : 'fr'

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = locale === 'fr'
      ? 'Youssef Sabbab — AI / LLM Engineer & Développeur Full-Stack'
      : 'Youssef Sabbab — AI / LLM Engineer & Full-Stack Developer'
    const description = portfolio[locale].hero.intro
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', document.title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description)
  }, [locale])

  return (
    <>
      <a className="skip-link" href="#main-content">{translations[locale].skip}</a>
      <div className="ambient-backdrop" aria-hidden="true"><span className="ambient-glow ambient-glow--one" /><span className="ambient-glow ambient-glow--two" /><span className="ambient-grid" /></div>
      <div className="reading-progress" aria-hidden="true"><span /></div>
      <Header locale={locale} />
      <main id="main-content" tabIndex={-1}>
        <Hero locale={locale} />
        <div className="section-rule" />
        <About locale={locale} />
        <Experience locale={locale} />
        <Projects locale={locale} />
        <Skills locale={locale} />
        <Certificates locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  )
}

export default App
