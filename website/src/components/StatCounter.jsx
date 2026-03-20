import React, { useRef, useEffect, useState } from 'react'

function useCountUp(end, duration = 2000, start = 0, triggered = false) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    if (!triggered) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
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
    <div className="stat-cell">
      <div className="stat-number">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="stat-label">{label}</div>
      {sublabel && <div className="stat-sublabel">{sublabel}</div>}
    </div>
  )
}

export default function StatCounter({ stats }) {
  const ref = useRef(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) setTriggered(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [triggered])

  return (
    <>
      <style>{`
        .stat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(184,134,11,0.12);
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(184,134,11,0.2);
        }
        .stat-item {
          background: #FFFEF8;
        }
        .stat-cell {
          text-align: center;
          padding: 40px 20px;
        }
        .stat-number {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 6vw, 88px);
          line-height: 1;
          color: #B8860B;
          letter-spacing: 0.02em;
        }
        .stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #0A0A0A;
          margin-top: 12px;
          margin-bottom: 6px;
          letter-spacing: 0.02em;
          line-height: 1.3;
        }
        .stat-sublabel {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #5C5C5C;
          max-width: 160px;
          margin: 0 auto;
          line-height: 1.5;
        }
        @media (max-width: 900px) {
          .stat-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .stat-cell {
            padding: 32px 16px;
          }
        }
        @media (max-width: 480px) {
          .stat-grid {
            grid-template-columns: repeat(2, 1fr);
            border-radius: 8px;
          }
          .stat-cell {
            padding: 28px 12px;
          }
          .stat-number {
            font-size: 44px;
          }
          .stat-label {
            font-size: 14px;
          }
          .stat-sublabel {
            font-size: 12px;
          }
        }
      `}</style>
      <div ref={ref} className="stat-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-item">
            <Counter {...stat} triggered={triggered} duration={2000 + i * 200} />
          </div>
        ))}
      </div>
    </>
  )
}
