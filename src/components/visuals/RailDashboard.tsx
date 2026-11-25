import type { CSSProperties } from 'react'
import { TrainFront } from 'lucide-react'
import { cn } from '../../lib/utils'
import { useCountUp, usePrefersReducedMotion } from '../../lib/usePrefersReducedMotion'
import type { Locale } from '../../data/portfolio'

type Props = { locale: Locale; active?: boolean }

const bars = [38, 56, 44, 72, 61, 84, 68]

export function RailDashboard({ locale, active = false }: Props) {
  const reduced = usePrefersReducedMotion()
  const dashboards = useCountUp(6, active, reduced)
  const channels = useCountUp(4, active, reduced)
  const axes = useCountUp(3, active, reduced)
  const labels = locale === 'fr'
    ? { brand: 'SNCF · Railway Analytics', trend: 'Évolution des revenus', dashboards: 'Dashboards', channels: 'Canaux', axes: 'Axes', live: 'Live' }
    : { brand: 'SNCF · Railway Analytics', trend: 'Revenue trend', dashboards: 'Dashboards', channels: 'Channels', axes: 'Axes', live: 'Live' }
  const kpis = [
    { value: dashboards, label: labels.dashboards },
    { value: channels, label: labels.channels },
    { value: axes, label: labels.axes },
  ]

  return (
    <div className={cn('rail-visual', active && 'is-active')} aria-hidden="true">
      <div className="rail-visual-top">
        <span className="rail-visual-brand"><TrainFront size={13} />{labels.brand}</span>
        <span className="rail-live"><i />{labels.live}</span>
      </div>
      <div className="rail-kpis">
        {kpis.map((kpi) => <div className="rail-kpi" key={kpi.label}><strong>{String(kpi.value).padStart(2, '0')}</strong><span>{kpi.label}</span></div>)}
      </div>
      <div className="rail-chart">
        <span className="rail-chart-label">{labels.trend}</span>
        <div className="rail-bars">
          {bars.map((height, index) => <span className="rail-bar" key={index} style={{ '--bar-height': `${height}%`, '--bar-index': index } as CSSProperties} />)}
        </div>
        <svg className="rail-line" viewBox="0 0 220 64" preserveAspectRatio="none">
          <path className="rail-line-shadow" d="M0 52 C22 49 30 38 48 40 S78 26 96 30 S130 20 148 23 S186 12 220 8" />
          <path className="rail-line-path" d="M0 52 C22 49 30 38 48 40 S78 26 96 30 S130 20 148 23 S186 12 220 8" />
        </svg>
        <div className="rail-chart-grid" />
      </div>
      <div className="rail-tracks"><span /><span /></div>
    </div>
  )
}
