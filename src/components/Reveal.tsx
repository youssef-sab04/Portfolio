import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from 'react'
import { cn } from '../lib/utils'

type RevealProps = { children: ReactNode; className?: string; delay?: number; as?: ElementType }

let revealObserver: IntersectionObserver | undefined

function observeOnce(element: Element) {
  revealObserver ??= new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.setAttribute('data-visible', 'true')
      observer.unobserve(entry.target)
    })
  }, { threshold: 0.12 })
  revealObserver.observe(element)
  return () => {
    revealObserver?.unobserve(element)
  }
}

export function Reveal({ children, className, delay = 0, as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      element.setAttribute('data-visible', 'true')
      return
    }
    return observeOnce(element)
  }, [])

  return (
    <Tag ref={ref} className={cn('reveal', className)} style={{ '--reveal-delay': `${delay}s` } as CSSProperties}>
      {children}
    </Tag>
  )
}
