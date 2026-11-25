import { BookOpen, CalendarDays, LayoutDashboard, Users } from 'lucide-react'
import { cn } from '../../lib/utils'
import type { Locale } from '../../data/portfolio'

type Props = { locale: Locale; active?: boolean }

const bars = [52, 68, 44, 76, 61, 88]

export function SchoolDashboard({ locale, active = false }: Props) {
  const labels = locale === 'fr'
    ? { title: 'Y-High · Administration', students: 'Élèves', classes: 'Classes', modules: 'Modules', attendance: 'Assiduité', recent: 'Derniers inscrits', rows: ['Élève 01', 'Élève 02', 'Élève 03'] }
    : { title: 'Y-High · Administration', students: 'Students', classes: 'Classes', modules: 'Modules', attendance: 'Attendance', recent: 'Recent sign-ups', rows: ['Student 01', 'Student 02', 'Student 03'] }
  const navIcons = [LayoutDashboard, Users, BookOpen, CalendarDays]

  return (
    <div className={cn('school-visual', active && 'is-active')} aria-hidden="true">
      <aside className="school-sidebar">
        <span className="school-logo">YH</span>
        {navIcons.map((Icon, index) => <span className={cn('school-nav-icon', index === 0 && 'is-active')} key={index}><Icon size={13} /></span>)}
        <span className="school-avatar" />
      </aside>
      <div className="school-main">
        <div className="school-topline"><span>{labels.title}</span><span className="school-year">2025</span></div>
        <div className="school-stats">
          <div className="school-stat"><strong>248</strong><span>{labels.students}</span><i /></div>
          <div className="school-stat"><strong>18</strong><span>{labels.classes}</span><i /></div>
          <div className="school-stat"><strong>32</strong><span>{labels.modules}</span><i /></div>
        </div>
        <div className="school-panels">
          <div className="school-chart">
            <div className="school-panel-head"><span>{labels.attendance}</span><span>+4%</span></div>
            <div className="school-bars">
              {bars.map((height, index) => <span className="school-bar" key={index} style={{ height: `${height}%`, transitionDelay: `${index * 45}ms` }} />)}
            </div>
          </div>
          <div className="school-table">
            <div className="school-panel-head"><span>{labels.recent}</span></div>
            {labels.rows.map((row) => <div className="school-row" key={row}><span className="school-row-avatar" /><span>{row}</span><span className="school-row-status" /></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}
