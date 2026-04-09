import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/training', label: 'Training Academy' },
  { to: '/results', label: 'Results' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 20px 0;
          transition: background 0.4s ease, padding 0.4s ease, border-bottom-color 0.4s ease, box-shadow 0.4s ease;
          border-bottom: 1px solid transparent;
        }
        .navbar--scrolled {
          background: rgba(250, 247, 242, 0.96);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 14px 0;
          border-bottom-color: rgba(184, 134, 11, 0.2);
          box-shadow: 0 4px 32px rgba(0, 0, 0, 0.08);
        }
        .navbar__inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .navbar__logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .navbar__logo-img {
          height: 52px;
          width: 52px;
          object-fit: contain;
          filter: drop-shadow(0 0 10px rgba(212,160,23,0.25));
          transition: filter 0.3s ease;
        }
        .navbar__logo:hover .navbar__logo-img {
          filter: drop-shadow(0 0 16px rgba(212,160,23,0.55));
        }
        .navbar__logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }
        .navbar__logo-main {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
          letter-spacing: 0.08em;
          color: #0A0A0A;
        }
        .navbar__logo-main span {
          color: #B8860B;
        }
        .navbar__logo-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #5C5C5C;
          margin-top: 2px;
        }
        .navbar__links {
          display: flex;
          align-items: center;
          gap: 4px;
          flex: 1;
          justify-content: center;
        }
        .navbar__link {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #3A3A3A;
          padding: 8px 12px;
          border-radius: 4px;
          transition: all 0.2s ease;
          white-space: nowrap;
          text-decoration: none;
        }
        .navbar__link:hover {
          color: #0A0A0A;
          background: rgba(0,0,0,0.05);
        }
        .navbar__link.active {
          color: #B8860B;
        }
        .navbar__cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #B8860B;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 700;
          padding: 12px 24px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          text-decoration: none;
          transition: all 0.3s ease;
          letter-spacing: 0.02em;
          flex-shrink: 0;
        }
        .navbar__cta:hover {
          background: #9A7009;
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(184, 134, 11, 0.3);
        }
        .navbar__hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 8px;
          border-radius: 4px;
          background: none;
          border: none;
          position: relative;
          z-index: 1003;
        }
        .navbar__hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #0A0A0A;
          transition: all 0.3s ease;
          transform-origin: center;
        }
        .navbar__hamburger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .navbar__hamburger.open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .navbar__hamburger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
        /* Mobile overlay — rendered via portal at document.body, no backdrop-filter parent */
        .navbar__mobile {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          background: #FAF7F2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          z-index: 9999;
          padding: 80px 24px 40px;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.25s ease, visibility 0.25s ease;
        }
        .navbar__mobile.open {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }
        .navbar__mobile-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 32px;
          text-decoration: none;
        }
        .navbar__mobile-logo img {
          height: 56px;
          width: 56px;
          object-fit: contain;
          filter: drop-shadow(0 0 12px rgba(212,160,23,0.4));
        }
        .navbar__mobile-logo-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          letter-spacing: 0.08em;
          color: #0A0A0A;
        }
        .navbar__mobile-logo-text span { color: #B8860B; }
        .navbar__mobile-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          color: #0A0A0A;
          font-size: 32px;
          line-height: 1;
          z-index: 10000;
        }
        .navbar__mobile-link {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 36px;
          letter-spacing: 0.05em;
          color: #5C5C5C;
          text-decoration: none;
          transition: color 0.2s ease;
          padding: 8px 0;
        }
        .navbar__mobile-link:hover,
        .navbar__mobile-link.active {
          color: #B8860B;
        }
        .navbar__mobile-cta {
          margin-top: 32px;
          background: #B8860B;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 18px;
          font-weight: 700;
          padding: 18px 48px;
          border-radius: 4px;
          text-decoration: none;
          width: 100%;
          max-width: 320px;
          text-align: center;
          letter-spacing: 0.02em;
        }
        @media (max-width: 1024px) {
          .navbar__links {
            display: none;
          }
          .navbar__cta {
            display: none;
          }
          .navbar__hamburger {
            display: flex;
          }
        }
      `}</style>

      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo">
            <img
              src="/images/braveheart-consulting-logo.png"
              alt="BraveHeart Consulting"
              className="navbar__logo-img"
            />
            <div className="navbar__logo-text">
              <span className="navbar__logo-main">BRAVE<span>HEART</span> WAY</span>
              <span className="navbar__logo-sub">BraveHeart Consulting LLC</span>
            </div>
          </Link>

          <div className="navbar__links">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}
              >
                {label}
              </NavLink>
            ))}
          </div>

          <Link to="/contact" className="navbar__cta">
            Book a Call
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>

          <button
            className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {createPortal(
        <div className={`navbar__mobile ${menuOpen ? 'open' : ''}`}>
          <button
            className="navbar__mobile-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
          <Link to="/" className="navbar__mobile-logo">
            <img src="/images/braveheart-consulting-logo.png" alt="BraveHeart" />
            <span className="navbar__mobile-logo-text">BRAVE<span>HEART</span> WAY</span>
          </Link>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `navbar__mobile-link${isActive ? ' active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="navbar__mobile-cta">
            Book a Free Strategy Call
          </Link>
        </div>,
        document.body
      )}
    </>
  )
}
