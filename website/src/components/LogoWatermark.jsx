import React, { useRef, useEffect, useState } from 'react'

/**
 * Renders an oversized, low-opacity BraveHeart logo that dramatically
 * scales + fades in as the section enters the viewport, then breathes
 * gently while visible.
 *
 * Props:
 *  position  – 'center' | 'top-right' | 'bottom-left' | 'right' | 'left'
 *  size      – px width/height of the watermark (default 560)
 *  opacity   – max opacity when visible (default 0.055)
 *  delay     – ms before animation starts once triggered (default 0)
 */
export default function LogoWatermark({
  position = 'center',
  size = 560,
  opacity = 0.055,
  delay = 0,
}) {
  const wrapRef  = useRef(null)
  const [phase, setPhase] = useState('hidden') // hidden | blooming | resting

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && phase === 'hidden') {
          setTimeout(() => {
            setPhase('blooming')
            setTimeout(() => setPhase('resting'), 1400)
          }, delay)
        }
      },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [phase, delay])

  // Position lookup — outer wrapper handles placement
  const posMap = {
    center:        { top: '50%',  left: '50%',  transform: 'translate(-50%, -50%)' },
    'top-right':   { top: '-8%',  right: '-8%'  },
    'bottom-left': { bottom: '-8%', left: '-8%' },
    right:         { top: '50%',  right: '-6%', transform: 'translateY(-50%)' },
    left:          { top: '50%',  left: '-6%',  transform: 'translateY(-50%)' },
  }
  const outerStyle = posMap[position] ?? posMap.center

  // Inner wrapper drives the animation (scale + opacity + filter)
  // Using a wrapper lets the outer keep its positioning transform clean.
  const innerStyle = {
    transition: phase === 'hidden'
      ? 'none'
      : 'opacity 1.3s ease, transform 1.5s cubic-bezier(0.22,1,0.36,1), filter 1s ease',
    ...(phase === 'hidden'   && { opacity: 0,                  transform: 'scale(0.5)',  filter: 'blur(16px)' }),
    ...(phase === 'blooming' && { opacity: opacity * 1.5,       transform: 'scale(1.12)', filter: 'blur(0px)'  }),
    ...(phase === 'resting'  && { opacity,                      transform: 'scale(1)',    filter: 'blur(0px)'  }),
  }

  return (
    <>
      <style>{`
        @keyframes logoBreathe {
          0%, 100% { opacity: var(--lw-op);      transform: scale(1); }
          50%       { opacity: var(--lw-op-high); transform: scale(1.03); }
        }
        .logo-watermark-resting {
          animation: logoBreathe 6s ease-in-out infinite;
        }
      `}</style>

      {/* Outer: absolute positioning anchor */}
      <div
        style={{
          position: 'absolute',
          width: size,
          height: size,
          pointerEvents: 'none',
          zIndex: 0,
          ...outerStyle,
        }}
      >
        {/* Inner: animation layer */}
        <div
          ref={wrapRef}
          className={phase === 'resting' ? 'logo-watermark-resting' : ''}
          style={{
            width: '100%',
            height: '100%',
            '--lw-op':      opacity,
            '--lw-op-high': opacity * 1.4,
            ...innerStyle,
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
              // Warm gold tint so it matches the brand palette
              filter: `
                sepia(0.9)
                saturate(0.6)
                brightness(2.2)
                drop-shadow(0 0 60px rgba(212,160,23,0.3))
              `,
              userSelect: 'none',
            }}
          />
        </div>
      </div>
    </>
  )
}
