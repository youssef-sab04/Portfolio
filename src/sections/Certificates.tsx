import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowUpRight, Expand, X } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { portfolio, type Certificate, type Locale } from '../data/portfolio'

type CertificatesCopy = (typeof portfolio)[Locale]['certificates']

function CertificateCard({ certificate, copy, index, locale }: { certificate: Certificate; copy: CertificatesCopy; index: number; locale: Locale }) {
  const [open, setOpen] = useState(false)
  return <Dialog.Root open={open} onOpenChange={setOpen}>
    <Reveal className="certificate-card" delay={(index % 2) * 0.07}>
      <button className="certificate-preview-button" type="button" onClick={() => setOpen(true)} aria-label={`${copy.view}: ${certificate.title}`}>
        <span className="certificate-image-wrap"><img src={certificate.image} alt="" loading="lazy" /><span className="certificate-expand"><Expand size={16} /></span></span>
        <span className="certificate-meta"><span>{certificate.category}</span><time>{certificate.date}</time></span>
        <span className="certificate-title">{certificate.title}</span>
        <span className="certificate-org">{certificate.organization}</span>
      </button>
      {certificate.verificationUrl && <a className="certificate-verify" href={certificate.verificationUrl} target="_blank" rel="noreferrer">{copy.verify}<ArrowUpRight size={13} /></a>}
    </Reveal>
    <Dialog.Portal>
      <Dialog.Overlay className="dialog-overlay certificate-overlay" />
      <Dialog.Content className="certificate-dialog">
        <div className="certificate-dialog-top"><Dialog.Title>{certificate.title}</Dialog.Title><Dialog.Close className="dialog-close" aria-label={locale === 'fr' ? 'Fermer' : 'Close'}><X size={19} /></Dialog.Close></div>
        <img src={certificate.image} alt={`${certificate.title} — ${certificate.organization}`} />
        <Dialog.Description>{certificate.organization} · {certificate.date}</Dialog.Description>
        {certificate.verificationUrl && <a className="certificate-verify" href={certificate.verificationUrl} target="_blank" rel="noreferrer">{copy.verify}<ArrowUpRight size={13} /></a>}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
}

export function Certificates({ locale }: { locale: Locale }) {
  const copy = portfolio[locale].certificates
  return (
    <section className="section-wrap certificates-section" id="certifications" aria-labelledby="certificates-title">
      <Reveal className="section-kicker"><span className="section-number">05</span>{copy.eyebrow}</Reveal>
      <div className="section-heading-row"><Reveal><h2 className="section-heading" id="certificates-title">{copy.title}</h2></Reveal><Reveal delay={0.1}><p className="section-intro">{copy.intro}</p></Reveal></div>
      <div className="certificates-grid">{copy.items.map((certificate, index) => <CertificateCard key={certificate.title} certificate={certificate} copy={copy} index={index} locale={locale} />)}</div>
    </section>
  )
}
