import React, { useRef, useEffect } from 'react'

export default function ScrollReveal({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('visible')
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const baseClass =
    direction === 'left' ? 'reveal-left' :
    direction === 'right' ? 'reveal-right' :
    'reveal'

  return (
    <div ref={ref} className={`${baseClass} ${className}`}>
      {children}
    </div>
  )
}
