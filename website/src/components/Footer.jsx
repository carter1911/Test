import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      background: '#EDE3CF',
      borderTop: '1px solid rgba(184, 134, 11, 0.2)',
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
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
          text-decoration: none;
        }
        .footer-logo-img {
          width: 60px;
          height: 60px;
          object-fit: contain;
          filter: sepia(0.5) saturate(0.7) brightness(0.85)
                  drop-shadow(0 0 8px rgba(184,134,11,0.2));
          flex-shrink: 0;
        }
        .footer-logo-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 26px;
          letter-spacing: 0.08em;
          color: #0A0A0A;
          line-height: 1;
        }
        .footer-logo-text span { color: #B8860B; }
        .footer-tagline {
          color: #5C5C5C;
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 24px;
          max-width: 280px;
        }
        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #5C5C5C;
          font-size: 14px;
          margin-bottom: 10px;
          transition: color 0.2s;
          text-decoration: none;
        }
        .footer-contact-item:hover { color: #B8860B; }
        .footer-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 0.1em;
          color: #0A0A0A;
          margin-bottom: 20px;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-links a {
          color: #5C5C5C;
          font-size: 14px;
          text-decoration: none;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .footer-links a:hover { color: #B8860B; }
        .footer-links a::before {
          content: '→';
          color: #B8860B;
          font-size: 12px;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .footer-links a:hover::before { opacity: 1; }
        .footer-cta-box {
          background: rgba(184,134,11,0.08);
          border: 1px solid rgba(184,134,11,0.25);
          border-radius: 8px;
          padding: 24px;
        }
        .footer-cta-box p {
          color: #3A3A3A;
          font-size: 14px;
          margin-bottom: 16px;
          line-height: 1.6;
        }
        .footer-cta-btn {
          display: inline-block;
          background: #B8860B;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          padding: 12px 24px;
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.3s;
          letter-spacing: 0.02em;
        }
        .footer-cta-btn:hover {
          background: #9A7009;
          transform: translateY(-1px);
        }
        .footer-bottom {
          border-top: 1px solid rgba(0,0,0,0.1);
          padding-top: 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .footer-copyright {
          color: #888888;
          font-size: 13px;
        }
        .footer-legal {
          display: flex;
          gap: 24px;
        }
        .footer-legal a {
          color: #888888;
          font-size: 13px;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-legal a:hover { color: #5C5C5C; }
        .footer-phone-big {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
          letter-spacing: 0.05em;
          color: #B8860B;
          text-decoration: none;
          display: block;
          margin-bottom: 8px;
          transition: color 0.2s;
        }
        .footer-phone-big:hover { color: #9A7009; }
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
            <Link to="/" className="footer-logo">
            <img
              src="/images/braveheart-way-logo.png"
              alt="The BraveHeart Way"
              className="footer-logo-img"
            />
            <span className="footer-logo-text">BRAVE<span>HEART</span> WAY</span>
          </Link>
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
