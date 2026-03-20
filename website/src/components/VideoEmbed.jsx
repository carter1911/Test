import React, { useState } from 'react'

/**
 * VideoEmbed — supports YouTube, Vimeo, and native HTML5 video.
 *
 * Props:
 *  type      – 'youtube' | 'vimeo' | 'native'  (default: 'youtube')
 *  src       – YouTube/Vimeo ID or native video URL
 *  poster    – thumbnail image URL (optional, used for native video or custom thumbnail)
 *  title     – accessible title / caption (default: 'Video')
 *  autoplay  – boolean, loads iframe immediately without click (default: false)
 *  aspect    – CSS padding-bottom percentage for aspect ratio (default: '56.25%' = 16:9)
 */
export default function VideoEmbed({
  type = 'youtube',
  src,
  poster,
  title = 'Video',
  autoplay = false,
  aspect = '56.25%',
}) {
  const [active, setActive] = useState(autoplay)

  if (!src) return null

  const getEmbedUrl = () => {
    if (type === 'youtube') {
      return `https://www.youtube-nocookie.com/embed/${src}?autoplay=1&rel=0&modestbranding=1`
    }
    if (type === 'vimeo') {
      return `https://player.vimeo.com/video/${src}?autoplay=1&color=b8860b&title=0&byline=0`
    }
    return null
  }

  const thumbnailUrl = poster || (type === 'youtube' ? `https://img.youtube.com/vi/${src}/maxresdefault.jpg` : null)

  return (
    <>
      <style>{`
        .video-embed-wrap {
          position: relative;
          width: 100%;
          border-radius: 10px;
          overflow: hidden;
          background: #E8DCC8;
          box-shadow: 0 8px 40px rgba(0,0,0,0.1);
        }
        .video-embed-sizer {
          position: relative;
          width: 100%;
          padding-bottom: var(--aspect);
        }
        .video-embed-iframe,
        .video-embed-native {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }
        .video-embed-thumb {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          cursor: pointer;
          transition: transform 0.4s ease;
        }
        .video-embed-thumb:hover { transform: scale(1.02); }
        .video-embed-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 72px;
          height: 72px;
          background: rgba(184,134,11,0.92);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
          transition: all 0.3s ease;
          pointer-events: none;
          box-shadow: 0 4px 24px rgba(0,0,0,0.25);
        }
        .video-embed-overlay:hover .video-embed-play {
          background: #B8860B;
          transform: translate(-50%, -50%) scale(1.1);
          box-shadow: 0 6px 32px rgba(184,134,11,0.5);
        }
        .video-embed-overlay {
          position: absolute;
          inset: 0;
          cursor: pointer;
        }
        .video-embed-caption {
          padding: 12px 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #5C5C5C;
          text-align: center;
          font-style: italic;
        }
      `}</style>

      <div className="video-embed-wrap">
        <div className="video-embed-sizer" style={{ '--aspect': aspect }}>
          {active ? (
            type === 'native' ? (
              <video
                className="video-embed-native"
                src={src}
                poster={poster}
                controls
                autoPlay
                title={title}
              />
            ) : (
              <iframe
                className="video-embed-iframe"
                src={getEmbedUrl()}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )
          ) : (
            <div className="video-embed-overlay" onClick={() => setActive(true)} role="button" aria-label={`Play ${title}`} tabIndex={0} onKeyDown={e => e.key === 'Enter' && setActive(true)}>
              {thumbnailUrl && (
                <img
                  className="video-embed-thumb"
                  src={thumbnailUrl}
                  alt={`${title} thumbnail`}
                  loading="lazy"
                />
              )}
              {!thumbnailUrl && (
                <div style={{ position: 'absolute', inset: 0, background: '#EDE3CF' }} />
              )}
              <button className="video-embed-play" aria-hidden="true" tabIndex={-1}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </button>
            </div>
          )}
        </div>
        {title && title !== 'Video' && (
          <div className="video-embed-caption">{title}</div>
        )}
      </div>
    </>
  )
}
