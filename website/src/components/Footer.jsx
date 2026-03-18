import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      background: '#060A15',
      borderTop: '1px solid rgba(212, 160, 23, 0.15)',
      padding: '80px 0 32px',
    }}>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 64px;
        }
        .footer-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          letter-spacing: 0.08em;
          color: #fff;
          margin-bottom: 16px;
          display: block;
          text-decoration: none;
        }
        .footer-logo span { color: #D4A017; }
        .footer-tagline {
          color: #A0A8B8;
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 24px;
          max-width: 280px;
        }
        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #A0A8B8;
          font-size: 14px;
          margin-bottom: 10px;
          transition: color 0.2s;
          text-decoration: none;
        }
        .footer-contact-item:hover { color: #D4A017; }
        .footer-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.1em;
          color: #fff;
          margin-bottom: 20px;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-links a {
          color: #A0A8B8;
          font-size: 14px;
          text-decoration: none;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .footer-links a:hover { color: #D4A017; }
        .footer-links a::before {
          content: '→';
          color: #D4A017;
          font-size: 12px;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .footer-links a:hover::before { opacity: 1; }
        .footer-cta-box {
          background: linear-gradient(135deg, rgba(212,160,23,0.1), rgba(212,160,23,0.05));
          border: 1px solid rgba(212,160,23,0.2);
          border-radius: 8px;
          padding: 24px;
        }
        .footer-cta-box p {
          color: #A0A8B8;
          font-size: 14px;
          margin-bottom: 16px;
          line-height: 1.6;
        }
        .footer-cta-btn {
          display: inline-block;
          background: #D4A017;
          color: #0A0F1E;
          font-weight: 700;
          font-size: 14px;
          padding: 12px 24px;
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.3s;
          letter-spacing: 0.02em;
        }
        .footer-cta-btn:hover {
          background: #E8B930;
          transform: translateY(-1px);
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .footer-copyright {
          color: #6B7280;
          font-size: 13px;
        }
        .footer-legal {
          display: flex;
          gap: 24px;
        }
        .footer-legal a {
          color: #6B7280;
          font-size: 13px;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-legal a:hover { color: #A0A8B8; }
        .footer-phone-big {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
          letter-spacing: 0.05em;
          color: #D4A017;
          text-decoration: none;
          display: block;
          margin-bottom: 8px;
          transition: color 0.2s;
        }
        .footer-phone-big:hover { color: #E8B930; }
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <Link to="/" className="footer-logo">BRAVE<span>HEART</span> WAY</Link>
            <p className="footer-tagline">
              Developing and consulting small to medium size businesses in sales and customer service
              to help increase revenue and retention using the latest resources and strategies.
            </p>
            <a href="tel:8435353251" className="footer-phone-big">843-535-3251</a>
            <a href="mailto:info@braveheartway.com" className="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/>
              </svg>
              info@braveheartway.com
            </a>
          </div>

          {/* Pages */}
          <div>
            <div className="footer-heading">Navigation</div>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Sekayi</Link>
              <Link to="/services">Services</Link>
              <Link to="/training">Training Academy</Link>
              <Link to="/results">Results</Link>
              <Link to="/resources">Resources</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="footer-heading">Services</div>
            <div className="footer-links">
              <Link to="/services">Lead Generation</Link>
              <Link to="/services">Recruiting & Staffing</Link>
              <Link to="/services">Sales Consulting</Link>
              <Link to="/services">Home Show Management</Link>
              <Link to="/services">Done-For-You Canvassing</Link>
              <Link to="/services">Fractional Sales Director</Link>
              <Link to="/services">Sales Agency</Link>
            </div>
          </div>

          {/* CTA Box */}
          <div>
            <div className="footer-heading">Ready to Scale?</div>
            <div className="footer-cta-box">
              <p>
                Book a free 30-minute strategy call with Sekayi and discover exactly how to build a
                revenue engine for your remodeling company.
              </p>
              <Link to="/contact" className="footer-cta-btn">Book Free Strategy Call</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} BraveHeart Consulting LLC · All rights reserved · Sekayi Brown
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
