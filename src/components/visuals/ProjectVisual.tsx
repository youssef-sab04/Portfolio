import { BankArchitecture } from '../BankArchitecture'
import { RailDashboard } from './RailDashboard'
import { SchoolDashboard } from './SchoolDashboard'
import { ShopChat } from './ShopChat'
import type { Locale, ProjectVisual as ProjectVisualType } from '../../data/portfolio'
import './visuals.css'

type Props = {
  visual: ProjectVisualType
  locale: Locale
  active?: boolean
  decorative?: boolean
}

export function ProjectVisual({ visual, locale, active = false, decorative = true }: Props) {
  switch (visual) {
    case 'bank':
      return <BankArchitecture locale={locale} active={active} decorative={decorative} />
    case 'rail':
      return <RailDashboard locale={locale} active={active} />
    case 'shop':
      return <ShopChat locale={locale} active={active} />
    case 'school':
      return <SchoolDashboard locale={locale} active={active} />
  }
}
