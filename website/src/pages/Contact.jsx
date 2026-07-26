import React, { useState, useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import LogoWatermark from '../components/LogoWatermark'

const challenges = [
  'Not generating enough leads',
  'Low close rates / poor conversion',
  'High team turnover & recruiting issues',
  'Need help with event & conference strategy',
  'Want to scale my outbound sales operation',
  'Need a fractional sales director',
  'Want to enroll my team in Training Academy',
  'Building sales systems from scratch',
  'Other / Let\'s discuss',
]

const CALENDLY_URL = 'https://calendly.com/braveheartway/30min'

function CalendlyEmbed() {
  useEffect(() => {
    const existing = document.getElementById('calendly-script')
    if (!existing) {
      const script = document.createElement('script')
      script.id = 'calendly-script'
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  return (
    <div
      className="calendly-inline-widget"
      data-url={CALENDLY_URL}
      style={{ minWidth: '320px', height: '700px' }}
    />
  )
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    challenge: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      {/* Hero */}
      <section className="page-hero" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
        <LogoWatermark position="top-right" size={380} opacity={0.055} delay={150} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <span className="label-text">Let's Talk</span>
            <h1 className="display-xl" style={{ color: '#0A0A0A', marginTop: '16px', marginBottom: '24px' }}>
              Book Your Free<br />
              <span style={{ color: '#D4A017' }}>Strategy Call</span>
            </h1>
            <p style={{ color: '#5C5C5C', fontSize: 'clamp(16px,2vw,20px)', maxWidth: '560px', lineHeight: 1.7 }}>
              30 minutes. Zero pressure. Walk away knowing exactly what's holding your revenue back
              and how BraveHeart can fix it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ background: '#FAF7F2', padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '80px', alignItems: 'start' }}>

            {/* Left - Info */}
            <ScrollReveal direction="left">
              <div>
                <span className="label-text">Get in Touch</span>
                <h2 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(28px,3.5vw,44px)',
                  fontWeight: 700,
                  color: '#0A0A0A',
                  marginTop: '16px',
                  marginBottom: '28px',
                  lineHeight: 1.2,
                }}>
                  Ready to Build Something<br />
                  <em style={{ color: '#D4A017' }}>That Lasts?</em>
                </h2>

                {/* Phone - Styled Prominently */}
                <a href="tel:7146868157" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  background: 'linear-gradient(135deg, rgba(212,160,23,0.15), rgba(242,234,216,0.9))',
                  border: '1px solid rgba(212,160,23,0.3)',
                  borderRadius: '10px',
                  padding: '20px 24px',
                  marginBottom: '24px',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    background: 'rgba(212,160,23,0.15)',
                    border: '1px solid rgba(212,160,23,0.3)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.14 12 19.79 19.79 0 011.1 3.4 2 2 0 013.08 1.22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5C5C5C', marginBottom: '4px' }}>
                      Call or Text Directly
                    </div>
                    <div style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '32px',
                      letterSpacing: '0.08em',
                      color: '#D4A017',
                    }}>
                      714-686-8157
                    </div>
                  </div>
                </a>

                <a href="mailto:braveheartway@gmail.com" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  background: 'rgba(255,254,248,0.85)',
                  border: '1px solid rgba(0,0,0,0.10)',
                  borderRadius: '10px',
                  padding: '20px 24px',
                  marginBottom: '40px',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    background: 'rgba(0,0,0,0.04)',
                    border: '1px solid rgba(0,0,0,0.10)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A0A8B8" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5C5C5C', marginBottom: '4px' }}>
                      Email Us
                    </div>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 600, color: '#0A0A0A' }}>
                      braveheartway@gmail.com
                    </div>
                  </div>
                </a>

                {/* Social / Digital Card Links */}
                <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
                  {[
                    { href: 'https://linkedin.com/in/sekayibrown19892020', label: 'LinkedIn', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
                    { href: 'https://www.youtube.com/@thebraveheartway3934', label: 'YouTube', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg> },
                    { href: 'https://poplme.co/hash/cHNNt5m9/1/contactcard', label: 'Digital Card', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg> },
                  ].map(({ href, label, icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: '#FFFEF8',
                        border: '1px solid rgba(184,134,11,0.25)',
                        borderRadius: '8px',
                        padding: '10px 16px',
                        color: '#5C5C5C',
                        fontSize: '14px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#B8860B'; e.currentTarget.style.color = '#B8860B' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(184,134,11,0.25)'; e.currentTarget.style.color = '#5C5C5C' }}
                    >
                      {icon} {label}
                    </a>
                  ))}
                </div>

                {/* What to Expect */}
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D4A017', marginBottom: '20px' }}>
                    On Your Strategy Call You'll Get:
                  </div>
                  {[
                    { icon: '🔍', title: 'Revenue Bottleneck Analysis', desc: 'Sekayi will identify the #1 thing holding your revenue back right now.' },
                    { icon: '📋', title: 'Custom Growth Roadmap', desc: 'A clear 3-step action plan specific to your company, team, and market.' },
                    { icon: '💡', title: 'Package Recommendation', desc: 'Honest recommendation of whether and how BraveHeart can help you.' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      gap: '14px',
                      padding: '16px 0',
                      borderBottom: '1px solid rgba(0,0,0,0.08)',
                    }}>
                      <span style={{ fontSize: '22px', flexShrink: 0 }}>{item.icon}</span>
                      <div>
                        <div style={{ fontWeight: 700, color: '#0A0A0A', fontSize: '15px', marginBottom: '4px' }}>{item.title}</div>
                        <div style={{ color: '#5C5C5C', fontSize: '14px', lineHeight: 1.6 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Form */}
            <ScrollReveal direction="right">
              <div>
                {/* Calendly Inline Embed */}
                <div style={{
                  border: '1px solid rgba(184,134,11,0.2)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  marginBottom: '32px',
                }}>
                  <CalendlyEmbed />
                </div>

                {/* Or Divider */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                  <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.10)' }} />
                  <span style={{ color: '#888888', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Or send a message
                  </span>
                  <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.10)' }} />
                </div>

                {/* Lead Capture Form */}
                {submitted ? (
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(212,160,23,0.1), rgba(212,160,23,0.04))',
                    border: '1px solid rgba(212,160,23,0.25)',
                    borderRadius: '12px',
                    padding: '48px',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '56px', marginBottom: '16px' }}>🎯</div>
                    <h3 style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '28px',
                      letterSpacing: '0.05em',
                      color: '#0A0A0A',
                      marginBottom: '12px',
                    }}>
                      Message Received!
                    </h3>
                    <p style={{ color: '#5C5C5C', fontSize: '15px', lineHeight: 1.7, maxWidth: '340px', margin: '0 auto 20px' }}>
                      Sekayi or someone from the BraveHeart team will follow up within 24 hours.
                      For faster response, call or text: <strong style={{ color: '#D4A017' }}>714-686-8157</strong>
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    style={{
                      background: 'rgba(255,254,248,0.85)',
                      border: '1px solid rgba(0,0,0,0.10)',
                      borderRadius: '12px',
                      padding: '40px',
                    }}
                  >
                    <h3 style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#0A0A0A',
                      marginBottom: '24px',
                    }}>
                      Send Us a Message
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                      <div className="form-group">
                        <label>Full Name *</label>
                        <input
                          className="form-control"
                          required
                          value={form.name}
                          onChange={e => setForm({...form, name: e.target.value})}
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="form-group">
                        <label>Company *</label>
                        <input
                          className="form-control"
                          required
                          value={form.company}
                          onChange={e => setForm({...form, company: e.target.value})}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                      <div className="form-group">
                        <label>Phone *</label>
                        <input
                          className="form-control"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={e => setForm({...form, phone: e.target.value})}
                          placeholder="(843) 000-0000"
                        />
                      </div>
                      <div className="form-group">
                        <label>Email *</label>
                        <input
                          className="form-control"
                          type="email"
                          required
                          value={form.email}
                          onChange={e => setForm({...form, email: e.target.value})}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="form-group" style={{ marginBottom: '16px' }}>
                      <label>Biggest Challenge *</label>
                      <select
                        className="form-control"
                        required
                        value={form.challenge}
                        onChange={e => setForm({...form, challenge: e.target.value})}
                      >
                        <option value="">Select your biggest challenge...</option>
                        {challenges.map((c, i) => (
                          <option key={i} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group" style={{ marginBottom: '24px' }}>
                      <label>Tell Us More (Optional)</label>
                      <textarea
                        className="form-control"
                        rows={4}
                        value={form.message}
                        onChange={e => setForm({...form, message: e.target.value})}
                        placeholder="Tell us about your company, team size, and what you're looking to achieve..."
                        style={{ resize: 'vertical' }}
                      />
                    </div>

                    <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center', padding: '18px' }}>
                      Send Message & Request Callback
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>

                    <p style={{ color: '#888888', fontSize: '12px', textAlign: 'center', marginTop: '12px', lineHeight: 1.5 }}>
                      We respond within 24 hours. Your information is never sold or shared.
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section style={{ background: '#F2EAD8', padding: '60px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{
              display: 'flex',
              gap: '40px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}>
              {[
                { num: '$150M+', label: 'Revenue Influenced' },
                { num: '18+', label: 'Leaders Developed' },
                { num: '100+', label: 'Bootcamps Delivered' },
                { num: '10+', label: 'Years in Industry' },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '32px', letterSpacing: '0.05em', color: '#D4A017' }}>
                    {stat.num}
                  </div>
                  <div style={{ fontSize: '13px', color: '#5C5C5C', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '2px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
