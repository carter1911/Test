import React, { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Fixed background logo visible site-wide.
 * - Blooms (scales up + brightens) on every page navigation
 * - Gently fades as you scroll down into content
 * - Breathes softly while at rest
 */
export default function SitewideLogo() {
  const location    = useLocation()
  const [opacity,   setOpacity]   = useState(0.018)
  const [scale,     setScale]     = useState(1)
  const [glowing,   setGlowing]   = useState(false)
  const bloomTimer  = useRef(null)
  const scrollTimer = useRef(null)

  // Bloom on every route change
  useEffect(() => {
    clearTimeout(bloomTimer.current)
    setGlowing(true)
    setScale(1.08)
    setOpacity(0.055)

    bloomTimer.current = setTimeout(() => {
      setGlowing(false)
      setScale(1)
      setOpacity(0.02)
    }, 900)

    return () => clearTimeout(bloomTimer.current)
  }, [location.pathname])

  // Fade with scroll depth
  useEffect(() => {
    const handleScroll = () => {
      clearTimeout(scrollTimer.current)
      scrollTimer.current = setTimeout(() => {
        const depth  = window.scrollY / window.innerHeight   // 0 = top, 1 = 1 viewport down
        const base   = Math.max(0.008, 0.022 - depth * 0.012)
        const pulse  = Math.sin(window.scrollY / 600) * 0.004
        setOpacity(base + pulse)
      }, 30)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimer.current)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        width: 'min(640px, 90vw)',
        height: 'min(640px, 90vw)',
        transform: `translate(-50%, -50%) scale(${scale})`,
        zIndex: 0,
        pointerEvents: 'none',
        opacity,
        transition: glowing
          ? 'opacity 0.4s ease, transform 0.5s cubic-bezier(0.34,1.56,0.64,1)'
          : 'opacity 1.2s ease, transform 1.2s ease',
      }}
    >
      <img
        src="/images/braveheart-consulting-logo.png"
        alt=""
        draggable={false}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          filter: `
            sepia(1)
            saturate(0.7)
            brightness(${glowing ? 0.65 : 0.55})
            drop-shadow(0 0 ${glowing ? 60 : 30}px rgba(184,134,11,${glowing ? 0.3 : 0.12}))
          `,
          userSelect: 'none',
          transition: 'filter 0.6s ease',
        }}
      />
    </div>
  )
}
