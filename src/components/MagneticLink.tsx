import { useEffect, useRef, type AnchorHTMLAttributes, type ReactNode, type PointerEvent } from 'react'

type MagneticLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode; magnetic?: boolean }

export function MagneticLink({ children, magnetic = true, className, onPointerMove, onPointerLeave, ...props }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const frame = useRef(0)
  const pending = useRef({ x: 0, y: 0 })

  useEffect(() => () => window.cancelAnimationFrame(frame.current), [])

  const handlePointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    onPointerMove?.(event)
    if (!magnetic || event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !ref.current) return
    const bounds = ref.current.getBoundingClientRect()
    pending.current = {
      x: (event.clientX - bounds.left - bounds.width / 2) * 0.1,
      y: (event.clientY - bounds.top - bounds.height / 2) * 0.1,
    }
    const element = ref.current
    if (frame.current) return
    frame.current = window.requestAnimationFrame(() => {
      element.style.setProperty('--magnetic-x', `${pending.current.x}px`)
      element.style.setProperty('--magnetic-y', `${pending.current.y}px`)
      frame.current = 0
    })
  }

  const handlePointerLeave = (event: PointerEvent<HTMLAnchorElement>) => {
    onPointerLeave?.(event)
    window.cancelAnimationFrame(frame.current)
    frame.current = 0
    if (ref.current) {
      ref.current.style.setProperty('--magnetic-x', '0px')
      ref.current.style.setProperty('--magnetic-y', '0px')
    }
  }

  return <a ref={ref} {...props} className={`magnetic-link ${className ?? ''}`} onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>{children}</a>
}
