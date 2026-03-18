import React, { useState } from 'react'
import ROICalculator from './ROICalculator'
import ServiceMatcherQuiz from './ServiceMatcherQuiz'

const TABS = [
  { id: 'roi',  label: 'ROI Calculator', icon: '📊' },
  { id: 'quiz', label: 'Service Match',  icon: '🎯' },
]

export default function ToolsDrawer() {
  const [open, setOpen]   = useState(false)
  const [tab,  setTab]    = useState('roi')

  return (
    <>
      <style>{`
        /* ---- trigger tab ---- */
        .tools-trigger {
          position: fixed;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1200;
          background: #D4A017;
          color: #0A0F1E;
          border: none;
          padding: 18px 10px;
          cursor: pointer;
          writing-mode: vertical-rl;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 15px;
          letter-spacing: 0.12em;
          border-radius: 8px 0 0 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          transition: background 0.25s ease, padding 0.25s ease;
          box-shadow: -4px 0 24px rgba(212,160,23,0.35);
        }
        .tools-trigger:hover {
          background: #E8B930;
          padding-right: 14px;
        }
        .tools-trigger-icon {
          writing-mode: horizontal-tb;
          font-size: 18px;
        }

        /* ---- backdrop ---- */
        .tools-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(5, 8, 20, 0.7);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 1201;
          animation: backdropIn 0.3s ease forwards;
        }
        @keyframes backdropIn {
          from { opacity: 0 } to { opacity: 1 }
        }

        /* ---- drawer ---- */
        .tools-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(500px, 100vw);
          background: linear-gradient(180deg, #0D1526 0%, #0A0F1E 100%);
          border-left: 1px solid rgba(212,160,23,0.2);
          z-index: 1202;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          overflow: hidden;
          box-shadow: -8px 0 60px rgba(0,0,0,0.8);
        }
        .tools-drawer.open {
          transform: translateX(0);
        }

        /* ---- drawer header ---- */
        .tools-drawer-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 20px;
          border-bottom: 1px solid rgba(212,160,23,0.12);
          flex-shrink: 0;
          background: rgba(212,160,23,0.04);
        }
        .tools-drawer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .tools-drawer-logo img {
          height: 34px;
          width: 34px;
          object-fit: contain;
          filter: drop-shadow(0 0 10px rgba(212,160,23,0.5));
        }
        .tools-drawer-close {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: #A0A8B8;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          transition: all 0.2s;
        }
        .tools-drawer-close:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.1);
        }

        /* ---- tabs ---- */
        .tools-tab-bar {
          display: flex;
          gap: 6px;
          padding: 12px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          flex-shrink: 0;
        }
        .tools-tab {
          flex: 1;
          padding: 11px 12px;
          border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.08);
          background: transparent;
          color: #6B7280;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          white-space: nowrap;
        }
        .tools-tab.active {
          background: rgba(212,160,23,0.12);
          border-color: rgba(212,160,23,0.35);
          color: #D4A017;
        }
        .tools-tab:hover:not(.active) {
          background: rgba(255,255,255,0.05);
          color: #fff;
        }

        /* ---- scrollable content ---- */
        .tools-drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 20px 14px 32px;
          -webkit-overflow-scrolling: touch;
        }
        /* Override inner component max-widths inside the drawer */
        .tools-drawer-body .roi-outer,
        .tools-drawer-body .quiz-inner {
          max-width: 100% !important;
          margin: 0 !important;
        }

        /* ---- mobile: bottom sheet ---- */
        @media (max-width: 640px) {
          .tools-trigger {
            writing-mode: horizontal-tb;
            top: auto;
            bottom: 96px;
            transform: none;
            padding: 12px 12px 12px 14px;
            border-radius: 8px 0 0 8px;
            flex-direction: row;
            gap: 6px;
            font-size: 13px;
          }
          .tools-trigger-icon { font-size: 16px; }
          .tools-drawer {
            top: auto;
            height: 88vh;
            width: 100vw;
            border-left: none;
            border-top: 1px solid rgba(212,160,23,0.2);
            border-radius: 20px 20px 0 0;
            transform: translateY(100%);
            box-shadow: 0 -8px 60px rgba(0,0,0,0.8);
          }
          .tools-drawer.open { transform: translateY(0); }
          .tools-drawer-head { border-radius: 20px 20px 0 0; }
        }
      `}</style>

      {/* Trigger tab — hidden when drawer is open */}
      {!open && (
        <button
          className="tools-trigger"
          onClick={() => setOpen(true)}
          aria-label="Open interactive tools"
        >
          <span className="tools-trigger-icon">⚡</span>
          <span>TOOLS</span>
        </button>
      )}

      {/* Backdrop */}
      {open && <div className="tools-backdrop" onClick={() => setOpen(false)} />}

      {/* Drawer panel */}
      <div className={`tools-drawer ${open ? 'open' : ''}`} aria-label="Interactive tools panel">
        {/* Header */}
        <div className="tools-drawer-head">
          <div className="tools-drawer-logo">
            <img src="/images/braveheart-consulting-logo.png" alt="BraveHeart" />
            <div>
              <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '17px', letterSpacing: '0.07em', color: '#fff' }}>
                Interactive Tools
              </div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: '#D4A017', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
                BraveHeart Way
              </div>
            </div>
          </div>
          <button className="tools-drawer-close" onClick={() => setOpen(false)} aria-label="Close tools">×</button>
        </div>

        {/* Tab switcher */}
        <div className="tools-tab-bar">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`tools-tab ${tab === t.id ? 'active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              <span>{t.icon}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* Scrollable content */}
        <div className="tools-drawer-body">
          {tab === 'roi' ? <ROICalculator /> : <ServiceMatcherQuiz />}
        </div>
      </div>
    </>
  )
}
