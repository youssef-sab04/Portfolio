import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { profile, portfolio, type Locale } from '../data/portfolio'

export function Footer({ locale }: { locale: Locale }) {
  const copy = portfolio[locale].footer
  return (
    <footer className="site-footer section-wrap">
      <a href="#top" className="footer-brand"><span>YS<span>.</span></span><small>{copy.made}</small></a>
      <div className="footer-meta"><span>© {new Date().getFullYear()} {profile.name}. {copy.rights}</span><a href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={13} /></a></div>
      <a className="footer-cv" href={profile.cv} download>{copy.cv}<ArrowUpRight size={13} /></a>
      <a className="back-to-top" href="#top"><span>{copy.backTop}</span><ArrowUp size={15} /></a>
    </footer>
  )
}
