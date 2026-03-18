import React, { useEffect, useState } from 'react'
import { useNotification } from '../context/NotificationContext'

const TYPE_CONFIG = {
  info:    { icon: '💡', color: '#3B82F6' },
  success: { icon: '✅', color: '#10B981' },
  warning: { icon: '⚠️', color: '#F59E0B' },
  promo:   { icon: '🔥', color: '#D4A017' },
}

function Toast({ id, type, title, message, action, onRemove }) {
  const [visible, setVisible] = useState(false)
  const { icon, color } = TYPE_CONFIG[type] ?? TYPE_CONFIG.info

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  const dismiss = () => {
    setVisible(false)
    setTimeout(() => onRemove(id), 300)
  }

  return (
    <div
      role="alert"
      aria-live="polite"
      onClick={dismiss}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        background: 'rgba(15, 20, 38, 0.97)',
        border: `1px solid ${color}30`,
        borderLeft: `3px solid ${color}`,
        borderRadius: '10px',
        padding: '14px 14px 14px 16px',
        maxWidth: '360px',
        width: '100%',
        boxShadow: '0 8px 40px rgba(0,0,0,0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        transform: visible ? 'translateX(0) scale(1)' : 'translateX(110%) scale(0.95)',
        opacity: visible ? 1 : 0,
        transition: 'transform 0.35s cubic-bezier(0.34,1.4,0.64,1), opacity 0.3s ease',
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      <span style={{ fontSize: '20px', flexShrink: 0, lineHeight: '1.3', marginTop: '1px' }}>
        {icon}
      </span>

      <div style={{ flex: 1, minWidth: 0 }}>
        {title && (
          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '3px',
            lineHeight: 1.3,
          }}>
            {title}
          </div>
        )}
        <div style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '13px',
          color: '#A0A8B8',
          lineHeight: 1.5,
        }}>
          {message}
        </div>
        {action && (
          <button
            onClick={(e) => { e.stopPropagation(); action.onClick(); dismiss() }}
            style={{
              marginTop: '8px',
              fontSize: '12px',
              fontWeight: 700,
              color,
              fontFamily: 'DM Sans, sans-serif',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            {action.label}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        )}
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); dismiss() }}
        aria-label="Dismiss notification"
        style={{
          background: 'none',
          border: 'none',
          color: '#6B7280',
          fontSize: '18px',
          cursor: 'pointer',
          flexShrink: 0,
          lineHeight: 1,
          padding: '2px 4px',
          borderRadius: '4px',
          transition: 'color 0.2s',
        }}
        onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
        onMouseOut={(e) => e.currentTarget.style.color = '#6B7280'}
      >
        ×
      </button>
    </div>
  )
}

export default function ToastNotification() {
  const { toasts, removeToast } = useNotification()

  return (
    <div
      aria-label="Notifications"
      style={{
        position: 'fixed',
        bottom: 'max(24px, env(safe-area-inset-bottom, 24px))',
        right: 'max(16px, env(safe-area-inset-right, 16px))',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column-reverse',
        gap: '10px',
        alignItems: 'flex-end',
        pointerEvents: 'none',
        maxWidth: 'calc(100vw - 32px)',
      }}
    >
      {toasts.map((toast) => (
        <div key={toast.id} style={{ pointerEvents: 'auto', width: '100%', maxWidth: '360px' }}>
          <Toast {...toast} onRemove={removeToast} />
        </div>
      ))}
    </div>
  )
}
