import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '../lib/utils'

export function ProgressTimeline({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLOListElement>(null)
  const [progressed, setProgressed] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setProgressed(true)
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setProgressed(true)
        observer.disconnect()
      }
    }, { threshold: 0.12 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return <ol ref={ref} className={cn('timeline-progress', className)} data-progressed={progressed || undefined}>{children}</ol>
}
