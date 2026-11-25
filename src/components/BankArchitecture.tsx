import { useId } from 'react'
import { cn } from '../lib/utils'
import type { Locale } from '../data/portfolio'

type Props = { locale: Locale; decorative?: boolean; active?: boolean }

export function BankArchitecture({ locale, decorative = false, active = false }: Props) {
  const markerId = `bank-arrow-${useId().replaceAll(':', '')}`
  const labels = locale === 'fr'
    ? { client: 'Client', api: 'API REST', gateway: 'Gateway', services: 'Services', kafka: 'Kafka', message: 'Message', config: 'Config server', discovery: 'Eureka server', observe: 'Observabilité', telemetry: 'OpenTelemetry · LGTM', title: 'Schéma de l’architecture EazyBank Microservices', pipeline: ['build', 'test', 'image', 'deploy'] }
    : { client: 'Client', api: 'REST API', gateway: 'Gateway', services: 'Services', kafka: 'Kafka', message: 'Message', config: 'Config server', discovery: 'Eureka server', observe: 'Observability', telemetry: 'OpenTelemetry · LGTM', title: 'EazyBank Microservices architecture diagram', pipeline: ['build', 'test', 'image', 'deploy'] }

  return (
    <div className={cn('architecture-map', active && 'is-active')} aria-hidden={decorative || undefined}>
      <svg className="architecture-diagram" viewBox="0 0 720 300" role={decorative ? undefined : 'img'} aria-labelledby={decorative ? undefined : `bank-architecture-title-${markerId}`}>
        {!decorative && <title id={`bank-architecture-title-${markerId}`}>{labels.title}</title>}
        <defs>
          <marker id={markerId} markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0 0 7 3.5 0 7z" fill="currentColor" /></marker>
        </defs>
        <g className="architecture-links" fill="none" markerEnd={`url(#${markerId})`}>
          <path d="M116 129h42" />
          <path d="M286 129C326 129 322 54 362 54" />
          <path d="M286 129h76" />
          <path d="M286 129c40 0 36 75 76 75" />
          <path d="M472 54c35 0 22 57 55 57" />
          <path d="M472 129h55" />
          <path d="M472 204c35 0 22-55 55-55" />
          <path d="M605 111c11 0 7 38 17 38" />
          <path d="M159 250C240 250 261 239 318 239" className="architecture-link--support" />
          <path d="M424 250h90" className="architecture-link--support" />
          <path d="M215 225C258 189 300 145 362 129" className="architecture-link--support" />
          <path d="M424 226C468 195 486 172 527 144" className="architecture-link--support" />
        </g>
        <g className="architecture-packets" aria-hidden="true">
          <circle className="architecture-packet architecture-packet--client" cx="116" cy="129" r="2.4" />
          <circle className="architecture-packet architecture-packet--gateway" cx="286" cy="129" r="2.6" />
          <circle className="architecture-packet architecture-packet--kafka" cx="472" cy="129" r="2.6" />
        </g>
        <g className="architecture-node architecture-node--client"><rect x="18" y="105" width="98" height="48" rx="8" /><text x="67" y="125" textAnchor="middle">{labels.client}</text><text x="67" y="141" textAnchor="middle" className="architecture-subtext">{labels.api}</text></g>
        <g className="architecture-node architecture-node--gateway"><rect x="158" y="105" width="128" height="48" rx="8" /><text x="222" y="134" textAnchor="middle">{labels.gateway}</text></g>
        <g className="architecture-node architecture-node--services"><rect x="362" y="30" width="110" height="48" rx="8" /><text x="417" y="59" textAnchor="middle">accounts</text></g>
        <g className="architecture-node architecture-node--services"><rect x="362" y="105" width="110" height="48" rx="8" /><text x="417" y="134" textAnchor="middle">loans</text></g>
        <g className="architecture-node architecture-node--services"><rect x="362" y="180" width="110" height="48" rx="8" /><text x="417" y="209" textAnchor="middle">cards</text></g>
        <g className="architecture-node architecture-node--event"><rect x="527" y="88" width="78" height="46" rx="8" /><text x="566" y="116" textAnchor="middle">{labels.kafka}</text></g>
        <g className="architecture-node architecture-node--event"><rect x="622" y="126" width="82" height="46" rx="8" /><text x="663" y="154" textAnchor="middle">{labels.message}</text></g>
        <g className="architecture-node architecture-node--support"><rect x="88" y="226" width="126" height="48" rx="8" /><text x="151" y="254" textAnchor="middle">{labels.config}</text></g>
        <g className="architecture-node architecture-node--support"><rect x="318" y="226" width="106" height="48" rx="8" /><text x="371" y="254" textAnchor="middle">{labels.discovery}</text></g>
        <g className="architecture-node architecture-node--support"><rect x="514" y="226" width="178" height="48" rx="8" /><text x="603" y="247" textAnchor="middle">{labels.observe}</text><text x="603" y="263" textAnchor="middle" className="architecture-subtext">{labels.telemetry}</text></g>
      </svg>
      <div className="architecture-pipeline" aria-hidden="true">
        {labels.pipeline.map((step, index) => (
          <span className="architecture-pipeline-item" key={step}>
            <span className="architecture-pipeline-dot" />
            {step}
            {index < labels.pipeline.length - 1 && <i className="architecture-pipeline-line" />}
          </span>
        ))}
      </div>
      <div className="architecture-mobile" aria-hidden="true">
        <div className="architecture-mobile-node">{labels.client} · {labels.api}</div><span>↓</span>
        <div className="architecture-mobile-node architecture-mobile-node--gateway">{labels.gateway}</div><span>↓</span>
        <div className="architecture-mobile-services"><div className="architecture-mobile-node">accounts</div><div className="architecture-mobile-node">loans</div><div className="architecture-mobile-node">cards</div></div>
        <span>↓</span><div className="architecture-mobile-flow"><div className="architecture-mobile-node architecture-mobile-node--event">{labels.kafka}</div><span>→</span><div className="architecture-mobile-node architecture-mobile-node--event">{labels.message}</div></div>
        <div className="architecture-mobile-support"><div className="architecture-mobile-node">{labels.config}</div><div className="architecture-mobile-node">{labels.discovery}</div><div className="architecture-mobile-node">{labels.observe}</div></div>
      </div>
    </div>
  )
}
