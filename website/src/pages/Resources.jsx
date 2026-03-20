import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import LogoWatermark from '../components/LogoWatermark'

const conferences2026 = [
  { name: 'International Roofing Expo', date: 'Feb 4–6, 2026', location: 'Houston, TX', region: 'South', type: 'National', link: '#' },
  { name: 'Roofing Day in D.C.', date: 'April 7–9, 2026', location: 'Washington, D.C.', region: 'East', type: 'National', link: '#' },
  { name: 'Western Roofing Expo', date: 'June 15–17, 2026', location: 'Las Vegas, NV', region: 'West', type: 'Regional', link: '#' },
  { name: 'METALCON 2026', date: 'Oct 5–7, 2026', location: 'Charlotte, NC', region: 'East', type: 'National', link: '#' },
  { name: 'RCAT Texas Annual Convention', date: 'Sept 10–12, 2026', location: 'San Antonio, TX', region: 'South', type: 'Regional', link: '#' },
  { name: 'Northeast Roofing Conference', date: 'March 3–4, 2026', location: 'Boston, MA', region: 'East', type: 'Regional', link: '#' },
  { name: 'Remodeling Leadership Conference', date: 'May 20–22, 2026', location: 'Nashville, TN', region: 'South', type: 'National', link: '#' },
  { name: 'Home Improvement Franchise Expo', date: 'July 8–9, 2026', location: 'Chicago, IL', region: 'Midwest', type: 'National', link: '#' },
  { name: 'Pacific Coast Contractors Summit', date: 'Aug 12–13, 2026', location: 'Seattle, WA', region: 'West', type: 'Regional', link: '#' },
  { name: 'NARI Fall Forum', date: 'Nov 3–5, 2026', location: 'Denver, CO', region: 'West', type: 'National', link: '#' },
]

const books = [
  { title: 'The Closer\'s Survival Guide', author: 'Grant Cardone', desc: 'The definitive guide to closing any deal in any environment. Essential reading for every sales professional in the exterior remodeling space.', category: 'Sales' },
  { title: 'Fanatical Prospecting', author: 'Jeb Blount', desc: 'The ultimate guide to opening sales conversations and filling the pipeline — directly applicable to canvassing and outbound lead generation.', category: 'Lead Generation' },
  { title: 'Mindset', author: 'Carol S. Dweck', desc: 'The science behind the growth mindset that underlies the BraveHeart Training Academy. A foundational read before Module 01.', category: 'Mindset' },
  { title: 'Traction', author: 'Gino Wickman', desc: 'The EOS framework for getting your company out of chaos and into scalable, systemized growth. Recommended for owners and directors.', category: 'Leadership' },
  { title: 'Never Split the Difference', author: 'Chris Voss', desc: 'Former FBI hostage negotiator reveals the communication tactics that transfer directly to in-home and threshold sales conversations.', category: 'Sales' },
  { title: 'Can\'t Hurt Me', author: 'David Goggins', desc: 'The mental toughness framework that drives the resilience sections of the Mindset Mastery track. Required reading for canvassers.', category: 'Mindset' },
]

const regions = ['All', 'East', 'West', 'South', 'Midwest', 'National']

function GatedDownloadForm({ onSubmit }) {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    if (onSubmit) onSubmit(form)
  }

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
        <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '28px', letterSpacing: '0.05em', color: '#0A0A0A', marginBottom: '12px' }}>
          Your Script is on the Way!
        </h3>
        <p style={{ color: '#5C5C5C', fontSize: '15px' }}>
          Check your inbox. We've also enrolled you in our weekly sales tips newsletter — no spam, just tactics.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div className="form-group">
          <label>Full Name *</label>
          <input className="form-control" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name" />
        </div>
        <div className="form-group">
          <label>Company *</label>
          <input className="form-control" required value={form.company} onChange={e => setForm({...form, company: e.target.value})} placeholder="Your company" />
        </div>
        <div className="form-group">
          <label>Email *</label>
          <input className="form-control" type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="your@email.com" />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input className="form-control" type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="(843) 000-0000" />
        </div>
      </div>
      <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
        Send Me the Free Cold Call Script →
      </button>
      <p style={{ color: '#888888', fontSize: '12px', textAlign: 'center', marginTop: '12px' }}>
        We respect your privacy. No spam, ever. Unsubscribe anytime.
      </p>
    </form>
  )
}

export default function Resources() {
  const [selectedRegion, setSelectedRegion] = useState('All')

  const filteredConfs = selectedRegion === 'All'
    ? conferences2026
    : conferences2026.filter(c => c.region === selectedRegion || c.type === selectedRegion)

  return (
    <div>
      {/* Hero */}
      <section className="page-hero" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
        <LogoWatermark position="top-right" size={380} opacity={0.055} delay={150} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <span className="label-text">Free Resources</span>
            <h1 className="display-xl" style={{ color: '#0A0A0A', marginTop: '16px', marginBottom: '24px' }}>
              Tools to Grow<br />
              <span style={{ color: '#D4A017' }}>Your Revenue</span>
            </h1>
            <p style={{ color: '#5C5C5C', fontSize: 'clamp(16px,2vw,20px)', maxWidth: '560px', lineHeight: 1.7 }}>
              Free downloads, conference intel, book recommendations, and video content
              to help you sharpen your edge between sessions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Free Download CTA */}
      <section style={{ background: '#F2EAD8', padding: '100px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
            maxWidth: '960px',
            margin: '0 auto',
          }}>
            <ScrollReveal direction="left">
              <div>
                <span className="label-text">Free Download</span>
                <h2 style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(36px,5vw,60px)',
                  letterSpacing: '0.05em',
                  color: '#0A0A0A',
                  marginTop: '16px',
                  marginBottom: '20px',
                  lineHeight: 1,
                }}>
                  The BraveHeart<br />
                  <span style={{ color: '#D4A017' }}>Cold Call Script</span>
                </h2>
                <p style={{ color: '#5C5C5C', fontSize: '16px', lineHeight: 1.8, marginBottom: '24px' }}>
                  The exact cold call script Sekayi refined over 10+ years and thousands of dials in the
                  exterior remodeling industry. Opens homeowners, handles gatekeepers, and books appointments.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Proven opening pattern that bypasses resistance',
                    'Gatekeeper navigation framework',
                    '5 most common objections with scripted responses',
                    'Appointment-setting close sequence',
                    'Follow-up cadence template',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ color: '#D4A017', fontSize: '16px', marginTop: '2px' }}>✓</span>
                      <span style={{ color: '#D0D5E0', fontSize: '15px' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div style={{
                background: 'linear-gradient(135deg, rgba(255,254,248,0.95), rgba(242,234,216,0.95))',
                border: '1px solid rgba(212,160,23,0.2)',
                borderRadius: '12px',
                padding: '40px',
              }}>
                <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                  <div style={{ fontSize: '48px', marginBottom: '12px' }}>📋</div>
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#0A0A0A',
                    marginBottom: '6px',
                  }}>
                    Get Your Free Script
                  </h3>
                  <p style={{ color: '#5C5C5C', fontSize: '14px' }}>Delivered instantly to your inbox</p>
                </div>
                <GatedDownloadForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Conference Calendar */}
      <section style={{ background: '#FAF7F2', padding: '100px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="label-text">2026 Conference Calendar</span>
              <h2 className="display-lg" style={{ marginTop: '12px', color: '#0A0A0A' }}>
                Industry Events<br />
                <span style={{ color: '#D4A017' }}>Worth Your Time</span>
              </h2>
              <p style={{ color: '#5C5C5C', fontSize: '17px', maxWidth: '560px', margin: '16px auto 0' }}>
                Filter by region to find conferences near you. Sekayi speaks and trains at several of these annually.
              </p>
            </div>
          </ScrollReveal>

          {/* Filters */}
          <ScrollReveal delay={100}>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
              {regions.map((r) => (
                <button
                  key={r}
                  onClick={() => setSelectedRegion(r)}
                  style={{
                    background: selectedRegion === r ? '#D4A017' : 'rgba(255,254,248,0.85)',
                    border: `1px solid ${selectedRegion === r ? '#D4A017' : 'rgba(0,0,0,0.10)'}`,
                    color: selectedRegion === r ? '#0A0F1E' : '#5C5C5C',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    padding: '10px 20px',
                    borderRadius: '100px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    letterSpacing: '0.02em',
                  }}
                >
                  {r}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '860px', margin: '0 auto' }}>
            {filteredConfs.map((conf, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div style={{
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'center',
                  background: 'rgba(255,254,248,0.85)',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: '8px',
                  padding: '20px 24px',
                  transition: 'all 0.2s',
                  flexWrap: 'wrap',
                }}>
                  <div style={{ flex: '1 1 200px' }}>
                    <div style={{ fontWeight: 700, color: '#0A0A0A', fontSize: '16px', marginBottom: '4px' }}>{conf.name}</div>
                    <div style={{ color: '#5C5C5C', fontSize: '13px' }}>{conf.location}</div>
                  </div>
                  <div style={{ color: '#D4A017', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, minWidth: '140px' }}>
                    📅 {conf.date}
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ background: 'rgba(212,160,23,0.1)', border: '1px solid rgba(212,160,23,0.2)', color: '#D4A017', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: '100px' }}>
                      {conf.region}
                    </span>
                    <span style={{ background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.10)', color: '#5C5C5C', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: '100px' }}>
                      {conf.type}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Books */}
      <section style={{ background: '#E8DCC8', padding: '100px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="label-text">Recommended Reading</span>
              <h2 className="display-lg" style={{ marginTop: '12px', color: '#0A0A0A' }}>
                Books That Build<br />
                <span style={{ color: '#D4A017' }}>Revenue Champions</span>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {books.map((book, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div style={{
                  background: 'rgba(255,254,248,0.85)',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: '10px',
                  padding: '28px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}>
                  <div style={{
                    display: 'inline-block',
                    background: 'rgba(212,160,23,0.1)',
                    border: '1px solid rgba(212,160,23,0.2)',
                    color: '#D4A017',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '3px 10px',
                    borderRadius: '100px',
                    alignSelf: 'flex-start',
                  }}>
                    {book.category}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: '#0A0A0A', marginBottom: '4px', lineHeight: 1.3 }}>
                      {book.title}
                    </h3>
                    <div style={{ color: '#D4A017', fontSize: '13px', fontWeight: 600 }}>by {book.author}</div>
                  </div>
                  <p style={{ color: '#5C5C5C', fontSize: '14px', lineHeight: 1.7, flex: 1 }}>{book.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video Resources */}
      <section style={{ background: '#FAF7F2', padding: '100px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="label-text">Video Training</span>
              <h2 className="display-md" style={{ marginTop: '12px', color: '#0A0A0A' }}>
                Watch & Learn<br />
                <span style={{ color: '#D4A017' }}>From the Field</span>
              </h2>
              <p style={{ color: '#5C5C5C', fontSize: '17px', maxWidth: '540px', margin: '16px auto 0' }}>
                Short-form training videos covering canvassing, closing, leadership, and mindset.
                Follow BraveHeart Way on social for new content every week.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { icon: '🎥', title: 'The Perfect Door Knock Opening', duration: '12 min', tag: 'Canvassing', desc: 'The exact 3-sentence opening that gets homeowners to engage instead of shut the door.' },
              { icon: '🎥', title: 'How to Handle "I Need to Think About It"', duration: '15 min', tag: 'Closing', desc: 'The objection that kills 40% of deals. Here\'s the proven pattern to reframe and close.' },
              { icon: '🎥', title: 'Building a 90-Day Sales Plan', duration: '20 min', tag: 'Planning', desc: 'The exact quarterly planning framework Sekayi uses with every coaching client.' },
              { icon: '🎥', title: 'Recruiting Elite Canvassers', duration: '18 min', tag: 'Recruiting', desc: 'What to look for, what questions to ask, and how to spot a real canvasser vs. a pretender.' },
              { icon: '🎥', title: 'Morning Routine of a $1M Producer', duration: '10 min', tag: 'Mindset', desc: 'The non-negotiable morning habits of the top 1% in exterior sales.' },
              { icon: '🎥', title: 'Running a Home Show Booth That Converts', duration: '22 min', tag: 'Lead Gen', desc: 'The booth setup, approach script, and follow-up system that generates real appointments.' },
            ].map((vid, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div style={{
                  background: 'rgba(255,254,248,0.85)',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                }}>
                  <div style={{
                    background: 'rgba(10,15,30,0.8)',
                    aspectRatio: '16/9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    position: 'relative',
                  }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      background: 'rgba(212,160,23,0.2)',
                      border: '2px solid rgba(212,160,23,0.4)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="#D4A017">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                    </div>
                    <div style={{ position: 'absolute', bottom: '10px', right: '12px', background: 'rgba(0,0,0,0.7)', color: '#fff', fontSize: '12px', fontWeight: 600, padding: '3px 8px', borderRadius: '4px' }}>
                      {vid.duration}
                    </div>
                  </div>
                  <div style={{ padding: '20px' }}>
                    <span style={{ background: 'rgba(212,160,23,0.1)', border: '1px solid rgba(212,160,23,0.2)', color: '#D4A017', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '2px 10px', borderRadius: '100px', marginBottom: '10px', display: 'inline-block' }}>
                      {vid.tag}
                    </span>
                    <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '8px', lineHeight: 1.3 }}>
                      {vid.title}
                    </h3>
                    <p style={{ color: '#A0A8B8', fontSize: '13px', lineHeight: 1.6 }}>{vid.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0D1526', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 className="display-md" style={{ color: '#fff', marginBottom: '16px' }}>
              Want More Than Resources?
            </h2>
            <p style={{ color: '#A0A8B8', fontSize: '18px', maxWidth: '520px', margin: '0 auto 36px', lineHeight: 1.7 }}>
              Resources are great. But nothing replaces a direct conversation with Sekayi about your specific situation.
            </p>
            <Link to="/contact" className="btn btn-gold btn-lg">Book Your Free Strategy Call</Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
