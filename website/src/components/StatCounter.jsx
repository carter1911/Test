import React, { useRef, useEffect, useState } from 'react'

function useCountUp(end, duration = 2000, start = 0, triggered = false) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    if (!triggered) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * (end - start) + start))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [triggered, end, start, duration])

  return count
}

function Counter({ end, prefix = '', suffix = '', label, sublabel, duration = 2000, triggered }) {
  const count = useCountUp(end, duration, 0, triggered)

  return (
    <div style={{
      textAlign: 'center',
      padding: '40px 24px',
    }}>
      <div style={{
        fontFamily: 'Bebas Neue, sans-serif',
        fontSize: 'clamp(52px, 7vw, 88px)',
        lineHeight: 1,
        color: '#D4A017',
        letterSpacing: '0.02em',
      }}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '18px',
        fontWeight: 700,
        color: '#fff',
        marginTop: '12px',
        marginBottom: '6px',
        letterSpacing: '0.02em',
      }}>
        {label}
      </div>
      {sublabel && (
        <div style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '13px',
          color: '#A0A8B8',
          maxWidth: '160px',
          margin: '0 auto',
          lineHeight: 1.5,
        }}>
          {sublabel}
        </div>
      )}
    </div>
  )
}

export default function StatCounter({ stats }) {
  const ref = useRef(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [triggered])

  return (
    <div ref={ref} style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
      gap: '1px',
      background: 'rgba(212,160,23,0.1)',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid rgba(212,160,23,0.15)',
    }}>
      <style>{`
        @media (max-width: 768px) {
          .stat-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .stat-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      {stats.map((stat, i) => (
        <div
          key={i}
          style={{
            background: 'rgba(28, 35, 51, 0.9)',
            borderRight: i < stats.length - 1 ? '1px solid rgba(212,160,23,0.1)' : 'none',
          }}
        >
          <Counter {...stat} triggered={triggered} duration={2000 + i * 200} />
        </div>
      ))}
    </div>
  )
}
