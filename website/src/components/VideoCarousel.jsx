import React, { useState, useRef, useCallback } from 'react'

/**
 * VideoCarousel — horizontal swipeable/clickable YouTube video carousel.
 *
 * Props:
 *  videos  – array of { id: string, title: string, label?: string }
 *            id = YouTube video ID (the part after ?v=)
 */
export default function VideoCarousel({ videos = [] }) {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(false)
  const containerRef = useRef(null)

  const goTo = useCallback((idx) => {
    setActive(idx)
    setPlaying(false)
  }, [])

  const prev = () => goTo((active - 1 + videos.length) % videos.length)
  const next = () => goTo((active + 1) % videos.length)

  if (!videos.length) return null

  const current = videos[active]
  const showNav = videos.length > 1

  return (
    <>
      <style>{`
        .vc-wrap { width: 100%; }

        /* ── Main player ── */
        .vc-player {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          background: #1a1a1a;
          box-shadow: 0 12px 48px rgba(0,0,0,0.18);
        }
        .vc-sizer {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
        }
        .vc-iframe,
        .vc-thumb-main {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
          object-fit: cover;
        }
        .vc-overlay {
          position: absolute;
          inset: 0;
          cursor: pointer;
        }
        .vc-overlay::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%);
          pointer-events: none;
        }
        .vc-play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background: rgba(184,134,11,0.92);
          border-radius: 50%;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 28px rgba(0,0,0,0.3);
          transition: all 0.25s ease;
          pointer-events: none;
        }
        .vc-overlay:hover .vc-play-btn {
          background: #B8860B;
          transform: translate(-50%, -50%) scale(1.1);
          box-shadow: 0 6px 36px rgba(184,134,11,0.55);
        }
        .vc-title-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 24px 24px 20px;
          z-index: 2;
          pointer-events: none;
        }
        .vc-label {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #B8860B;
          margin-bottom: 6px;
        }
        .vc-video-title {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(15px, 1.8vw, 20px);
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
          text-shadow: 0 1px 6px rgba(0,0,0,0.5);
        }

        /* ── Prev / Next arrows ── */
        .vc-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(250,247,242,0.92);
          border: 1px solid rgba(184,134,11,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 12px rgba(0,0,0,0.12);
        }
        .vc-arrow:hover {
          background: #B8860B;
          border-color: #B8860B;
        }
        .vc-arrow:hover svg { stroke: #fff; }
        .vc-arrow svg { stroke: #5C5C5C; transition: stroke 0.2s; }
        .vc-arrow-prev { left: -22px; }
        .vc-arrow-next { right: -22px; }
        @media (max-width: 640px) {
          .vc-arrow-prev { left: 8px; }
          .vc-arrow-next { right: 8px; }
        }

        /* ── Thumbnail strip ── */
        .vc-thumbs {
          display: flex;
          gap: 12px;
          margin-top: 20px;
          overflow-x: auto;
          padding-bottom: 4px;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: rgba(184,134,11,0.3) transparent;
        }
        .vc-thumbs::-webkit-scrollbar { height: 4px; }
        .vc-thumbs::-webkit-scrollbar-track { background: transparent; }
        .vc-thumbs::-webkit-scrollbar-thumb { background: rgba(184,134,11,0.3); border-radius: 2px; }

        .vc-thumb-item {
          flex: 0 0 auto;
          width: 160px;
          cursor: pointer;
          border-radius: 8px;
          overflow: hidden;
          border: 2px solid transparent;
          transition: all 0.25s ease;
          scroll-snap-align: start;
          position: relative;
        }
        .vc-thumb-item:hover { border-color: rgba(184,134,11,0.5); }
        .vc-thumb-item.active { border-color: #B8860B; }
        .vc-thumb-item.active::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(184,134,11,0.15);
          pointer-events: none;
        }
        .vc-thumb-img {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          display: block;
        }
        .vc-thumb-label {
          padding: 6px 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: #5C5C5C;
          background: #FFFEF8;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.3;
        }
        .vc-thumb-item.active .vc-thumb-label { color: #B8860B; }

        /* ── Dot indicators (mobile, when <= 4 videos) ── */
        .vc-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 16px;
        }
        .vc-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(0,0,0,0.2);
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          padding: 0;
        }
        .vc-dot.active {
          background: #B8860B;
          transform: scale(1.3);
        }
        @media (min-width: 641px) { .vc-dots { display: none; } }
        @media (max-width: 640px) { .vc-thumbs { display: none; } }
      `}</style>

      <div className="vc-wrap" ref={containerRef}>
        {/* ── Main player ── */}
        <div style={{ position: 'relative' }}>
          {showNav && (
            <>
              <button className="vc-arrow vc-arrow-prev" onClick={prev} aria-label="Previous video">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button className="vc-arrow vc-arrow-next" onClick={next} aria-label="Next video">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </>
          )}

          <div className="vc-player">
            <div className="vc-sizer">
              {playing ? (
                <iframe
                  key={current.id}
                  className="vc-iframe"
                  src={`https://www.youtube-nocookie.com/embed/${current.id}?autoplay=1&rel=0&modestbranding=1`}
                  title={current.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div
                  className="vc-overlay"
                  onClick={() => setPlaying(true)}
                  role="button"
                  aria-label={`Play: ${current.title}`}
                  tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && setPlaying(true)}
                >
                  <img
                    key={current.id}
                    className="vc-thumb-main"
                    src={`https://img.youtube.com/vi/${current.id}/maxresdefault.jpg`}
                    alt={current.title}
                    loading="lazy"
                  />
                  <button className="vc-play-btn" aria-hidden="true" tabIndex={-1}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                      <polygon points="6,3 20,12 6,21" />
                    </svg>
                  </button>
                  <div className="vc-title-overlay">
                    {current.label && <div className="vc-label">{current.label}</div>}
                    <div className="vc-video-title">{current.title}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── Thumbnail strip (desktop) ── */}
        {showNav && (
          <div className="vc-thumbs">
            {videos.map((v, i) => (
              <div
                key={v.id}
                className={`vc-thumb-item${i === active ? ' active' : ''}`}
                onClick={() => goTo(i)}
                role="button"
                tabIndex={0}
                aria-label={`Select video: ${v.title}`}
                onKeyDown={e => e.key === 'Enter' && goTo(i)}
              >
                <img
                  className="vc-thumb-img"
                  src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                  alt={v.title}
                  loading="lazy"
                />
                <div className="vc-thumb-label">{v.label || v.title}</div>
              </div>
            ))}
          </div>
        )}

        {/* ── Dot indicators (mobile) ── */}
        {showNav && (
          <div className="vc-dots">
            {videos.map((_, i) => (
              <button
                key={i}
                className={`vc-dot${i === active ? ' active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to video ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
