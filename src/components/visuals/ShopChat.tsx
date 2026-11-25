import { useEffect, useState } from 'react'
import { Headphones, Keyboard, Mouse, Send, ShoppingBag, Sparkles } from 'lucide-react'
import { cn } from '../../lib/utils'
import { usePrefersReducedMotion } from '../../lib/usePrefersReducedMotion'
import type { Locale } from '../../data/portfolio'

type Props = { locale: Locale; active?: boolean }

export function ShopChat({ locale, active = false }: Props) {
  const reduced = usePrefersReducedMotion()
  const response = locale === 'fr'
    ? 'Je vous recommande le casque Nova : léger, et parfait avec votre panier.'
    : 'I recommend the Nova headset: lightweight and a perfect match for your cart.'
  const greeting = locale === 'fr' ? 'Bonjour, besoin d’un conseil ?' : 'Hi, need a hand?'
  const input = locale === 'fr' ? 'Posez votre question…' : 'Ask a question…'
  const labels = locale === 'fr'
    ? { online: 'en ligne', store: 'Nova Store', products: [{ name: 'Casque Nova', price: '89 €' }, { name: 'Clavier Arc', price: '129 €' }, { name: 'Souris Flux', price: '59 €' }] }
    : { online: 'online', store: 'Nova Store', products: [{ name: 'Nova headset', price: '$89' }, { name: 'Arc keyboard', price: '$129' }, { name: 'Flux mouse', price: '$59' }] }
  const icons = [Headphones, Keyboard, Mouse]
  const [typed, setTyped] = useState('')

  useEffect(() => {
    if (!active) {
      setTyped('')
      return
    }
    if (reduced) {
      setTyped(response)
      return
    }

    setTyped('')
    let index = 0
    const timer = window.setInterval(() => {
      index += 1
      setTyped(response.slice(0, index))
      if (index >= response.length) window.clearInterval(timer)
    }, 26)
    return () => window.clearInterval(timer)
  }, [active, reduced, response])

  return (
    <div className={cn('shop-visual', active && 'is-active')} aria-hidden="true">
      <div className="shop-browser">
        <span className="shop-dots"><i /><i /><i /></span>
        <span className="shop-url">nova-store.app</span>
      </div>
      <div className="shop-body">
        <div className="shop-topline">
          <span>{labels.store}</span>
          <span className="shop-cart"><ShoppingBag size={12} />2</span>
        </div>
        <div className="shop-products">
          {labels.products.map((product, index) => {
            const Icon = icons[index]
            return (
              <div className={cn('shop-product', index === 0 && 'shop-product--featured')} key={product.name}>
                <span className="shop-product-art"><Icon size={18} /></span>
                <span className="shop-product-name">{product.name}</span>
                <span className="shop-product-price">{product.price}</span>
              </div>
            )
          })}
        </div>
        <div className="shop-chat">
          <div className="shop-chat-head">
            <span className="shop-ai-avatar"><Sparkles size={11} /></span>
            <span>AI Assistant</span>
            <span className="shop-chat-status"><i />{labels.online}</span>
          </div>
          <p className="shop-chat-message">{typed || greeting}<span className={cn('shop-caret', active && typed.length < response.length && 'is-visible')} /></p>
          <div className="shop-chat-input"><span>{input}</span><Send size={11} /></div>
        </div>
      </div>
    </div>
  )
}
