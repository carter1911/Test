import React, { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import LogoWatermark from '../components/LogoWatermark'

const challenges = [
  'Not generating enough leads',
  'Low close rates / poor conversion',
  'High team turnover & recruiting issues',
  'Need help with home show strategy',
  'Want to scale my canvassing operation',
  'Need a fractional sales director',
  'Want to enroll my team in Training Academy',
  'Building sales systems from scratch',
  'Other / Let\'s discuss',
]

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
            <h1 className="display-xl" style={{ color: '#fff', marginTop: '16px', marginBottom: '24px' }}>
              Book Your Free<br />
              <span style={{ color: '#D4A017' }}>Strategy Call</span>
            </h1>
            <p style={{ color: '#A0A8B8', fontSize: 'clamp(16px,2vw,20px)', maxWidth: '560px', lineHeight: 1.7 }}>
              30 minutes. Zero pressure. Walk away knowing exactly what's holding your revenue back
              and how BraveHeart can fix it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ background: '#0A0F1E', padding: '100px 0' }}>
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
                  color: '#fff',
                  marginTop: '16px',
                  marginBottom: '28px',
                  lineHeight: 1.2,
                }}>
                  Ready to Build Something<br />
                  <em style={{ color: '#D4A017' }}>That Lasts?</em>
                </h2>

                {/* Phone - Styled Prominently */}
                <a href="tel:8435353251" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  background: 'linear-gradient(135deg, rgba(212,160,23,0.12), rgba(212,160,23,0.04))',
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
                    <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#A0A8B8', marginBottom: '4px' }}>
                      Call or Text Directly
                    </div>
                    <div style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '32px',
                      letterSpacing: '0.08em',
                      color: '#D4A017',
                    }}>
                      843-535-3251
                    </div>
                  </div>
                </a>

                <a href="mailto:info@braveheartway.com" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  background: 'rgba(28,35,51,0.5)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '10px',
                  padding: '20px 24px',
                  marginBottom: '40px',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
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
                    <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#A0A8B8', marginBottom: '4px' }}>
                      Email Us
                    </div>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 600, color: '#D0D5E0' }}>
                      info@braveheartway.com
                    </div>
                  </div>
                </a>

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
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                    }}>
                      <span style={{ fontSize: '22px', flexShrink: 0 }}>{item.icon}</span>
                      <div>
                        <div style={{ fontWeight: 700, color: '#fff', fontSize: '15px', marginBottom: '4px' }}>{item.title}</div>
                        <div style={{ color: '#A0A8B8', fontSize: '14px', lineHeight: 1.6 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Form */}
            <ScrollReveal direction="right">
              <div>
                {/* Calendly Placeholder */}
                <div style={{
                  background: 'linear-gradient(135deg, rgba(28,35,51,0.9), rgba(37,45,64,0.9))',
                  border: '1px solid rgba(212,160,23,0.2)',
                  borderRadius: '12px',
                  padding: '40px',
                  marginBottom: '32px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '40px', marginBottom: '16px' }}>📅</div>
                  <h3 style={{
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: '24px',
                    letterSpacing: '0.08em',
                    color: '#fff',
                    marginBottom: '8px',
                  }}>
                    Schedule Directly on Calendly
                  </h3>
                  <p style={{ color: '#A0A8B8', fontSize: '14px', marginBottom: '24px', lineHeight: 1.6 }}>
                    Pick a date and time that works for you. The 30-minute strategy call with
                    Sekayi is completely free, no commitment required.
                  </p>
                  {/* Calendly embed placeholder */}
                  <div style={{
                    background: 'rgba(10,15,30,0.6)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '8px',
                    padding: '40px 24px',
                    marginBottom: '20px',
                    color: '#6B7280',
                    fontSize: '14px',
                    fontStyle: 'italic',
                  }}>
                    [Calendly embed will be integrated here with your scheduling link]
                    <br/>
                    <code style={{ fontSize: '12px', color: '#A0A8B8', marginTop: '8px', display: 'block' }}>
                      Replace this block with: &lt;InlineWidget url="https://calendly.com/your-link" /&gt;
                    </code>
                  </div>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold"
                    style={{ display: 'inline-block', padding: '14px 32px' }}
                  >
                    Open Calendly Scheduler
                  </a>
                </div>

                {/* Or Divider */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                  <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
                  <span style={{ color: '#6B7280', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Or send a message
                  </span>
                  <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
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
                      color: '#fff',
                      marginBottom: '12px',
                    }}>
                      Message Received!
                    </h3>
                    <p style={{ color: '#A0A8B8', fontSize: '15px', lineHeight: 1.7, maxWidth: '340px', margin: '0 auto 20px' }}>
                      Sekayi or someone from the BraveHeart team will follow up within 24 hours.
                      For faster response, call or text: <strong style={{ color: '#D4A017' }}>843-535-3251</strong>
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    style={{
                      background: 'rgba(28,35,51,0.5)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '12px',
                      padding: '40px',
                    }}
                  >
                    <h3 style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#fff',
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

                    <p style={{ color: '#6B7280', fontSize: '12px', textAlign: 'center', marginTop: '12px', lineHeight: 1.5 }}>
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
      <section style={{ background: '#0D1526', padding: '60px 0' }}>
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
                  <div style={{ fontSize: '13px', color: '#A0A8B8', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '2px' }}>
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
