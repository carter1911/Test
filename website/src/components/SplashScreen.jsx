import React, { useState, useEffect } from 'react'

export default function SplashScreen() {
  const [phase, setPhase] = useState('visible') // visible → fading → gone

  useEffect(() => {
    // Hold logo for 1.4s, then start fade
    const fadeTimer = setTimeout(() => setPhase('fading'), 1400)
    // Remove from DOM after fade completes (0.7s)
    const doneTimer = setTimeout(() => setPhase('gone'), 2100)
    return () => { clearTimeout(fadeTimer); clearTimeout(doneTimer) }
  }, [])

  if (phase === 'gone') return null

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 99999,
      background: '#FAF7F2',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '24px',
      opacity: phase === 'fading' ? 0 : 1,
      transition: 'opacity 0.7s ease',
      pointerEvents: phase === 'fading' ? 'none' : 'auto',
    }}>
      <img
        src="/images/braveheart-way-logo.png"
        alt="BraveHeart Way"
        style={{
          width: 'min(160px, 40vw)',
          height: 'auto',
          filter: 'sepia(0.3) saturate(0.8) brightness(0.9) drop-shadow(0 0 24px rgba(184,134,11,0.3))',
          animation: 'splash-pulse 1.4s ease-in-out',
        }}
      />
      <div style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(28px, 6vw, 48px)',
        letterSpacing: '0.1em',
        color: '#0A0A0A',
        lineHeight: 1,
      }}>
        BRAVE<span style={{ color: '#B8860B' }}>HEART</span> WAY
      </div>
      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: '#B8860B',
      }}>
        BraveHeart Consulting LLC
      </div>
      <style>{`
        @keyframes splash-pulse {
          0%   { opacity: 0; transform: scale(0.88); }
          40%  { opacity: 1; transform: scale(1.04); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}
