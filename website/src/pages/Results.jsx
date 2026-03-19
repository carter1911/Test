import React from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import StatCounter from '../components/StatCounter'
import LogoWatermark from '../components/LogoWatermark'

const testimonials = [
  {
    quote: "Sekayi transformed how we think about canvassing. We went from 20 leads a month to over 80 within 60 days of implementing his system. The scripts, the territory strategy, the accountability framework — it all clicked.",
    name: 'Marcus T.',
    title: 'Owner, Regional Roofing Co.',
    location: 'Charlotte, NC',
    result: '+300% Lead Volume in 60 Days',
  },
  {
    quote: "We'd tried other consultants before and they gave us binders full of theory. Sekayi gave us systems. Real, working systems. Our close rate went from 18% to 31% in 3 months and we haven't looked back.",
    name: 'Jennifer R.',
    title: 'VP of Sales, Exterior Solutions LLC',
    location: 'Dallas, TX',
    result: '18% → 31% Close Rate',
  },
  {
    quote: "The Fractional Sales Director engagement was the best investment we made in 2024. Sekayi didn't just coach — he was in the trenches with us, running team meetings, refining our hiring process, and building the culture we'd always wanted.",
    name: 'Derek W.',
    title: 'CEO, Apex Home Exteriors',
    location: 'Atlanta, GA',
    result: '$2.1M Revenue Added in Year 1',
  },
  {
    quote: "Our home show conversion was abysmal before BraveHeart. Sekayi came in, retrained our booth team, redesigned the lead capture process, and our last expo produced 3x the qualified appointments we'd ever seen.",
    name: 'Priya S.',
    title: 'Marketing Director, HomeFront Remodeling',
    location: 'Phoenix, AZ',
    result: '3x Home Show Conversion',
  },
  {
    quote: "I went through the Mindset Mastery program as a sales rep and within 6 months I was a team lead managing 12 reps. The personal development work that Sekayi has built into the curriculum is unlike anything else in our industry.",
    name: 'Carlos M.',
    title: 'Team Lead, Power Renovations',
    location: 'Miami, FL',
    result: 'Rep → Team Lead in 6 Months',
  },
  {
    quote: "The Done-For-You Canvassing service paid for itself in the first month. We had a full team deployed, scripts dialed in, and qualified appointments flowing before I had to make a single hire. It's exactly what we needed to scale fast.",
    name: 'Brian K.',
    title: 'Founder, Storm Guard Exteriors',
    location: 'Denver, CO',
    result: 'ROI Positive in 30 Days',
  },
]

const conferences = [
  { name: 'Roofing Day DC', type: 'National', region: 'East', year: '2024', desc: 'Annual advocacy and networking event for roofing professionals in Washington, D.C.' },
  { name: 'Western Roofing Expo', type: 'Regional', region: 'West', year: '2024', desc: 'The premier roofing industry event on the West Coast.' },
  { name: 'METALCON', type: 'National', region: 'National', year: '2024', desc: 'International trade show and conference for the metal construction industry.' },
  { name: 'RCAT Texas Annual Convention', type: 'Regional', region: 'South', year: '2024', desc: 'The Roofing Contractors Association of Texas premier networking and training event.' },
]

const metrics = [
  { end: 150, prefix: '$', suffix: 'M+', label: 'Revenue Influenced', sublabel: 'Across all client engagements' },
  { end: 18, suffix: '+', label: 'Leaders Developed', sublabel: 'Directors and managers trained' },
  { end: 100, suffix: '+', label: 'Bootcamps Delivered', sublabel: 'Nationwide sales training events' },
  { end: 300, suffix: '%', label: 'Avg Lead Increase', sublabel: 'Within first 90 days' },
]

const industries = [
  'Exterior Remodeling', 'Roofing', 'Siding & Windows', 'Solar', 'HVAC', 'Home Improvement', 'Door & Entry Systems', 'Gutters & Drainage'
]

export default function Results() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero" style={{ minHeight: '55vh', display: 'flex', alignItems: 'center' }}>
        <LogoWatermark position="top-right" size={400} opacity={0.055} delay={150} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <span className="label-text">Client Results</span>
            <h1 className="display-xl" style={{ color: '#fff', marginTop: '16px', marginBottom: '24px' }}>
              Real Results.<br />
              <span style={{ color: '#D4A017' }}>Real Companies.</span>
            </h1>
            <p style={{ color: '#A0A8B8', fontSize: 'clamp(16px,2vw,20px)', maxWidth: '580px', lineHeight: 1.7 }}>
              Every number here is earned in the field — not projected, not hypothetical.
              This is what happens when proven systems meet committed teams.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Key Metrics */}
      <section style={{ background: '#0D1526', padding: '80px 0' }}>
        <div className="container">
          <ScrollReveal>
            <StatCounter stats={metrics} />
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: '#0A0F1E', padding: '100px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="label-text">Client Testimonials</span>
              <h2 className="display-lg" style={{ marginTop: '12px', color: '#fff' }}>
                What Our Clients<br />
                <span style={{ color: '#D4A017' }}>Say About BraveHeart</span>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div style={{
                  background: 'rgba(28,35,51,0.6)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '10px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  height: '100%',
                  transition: 'all 0.3s',
                }}>
                  {/* Stars */}
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {[...Array(5)].map((_, si) => (
                      <span key={si} style={{ color: '#D4A017', fontSize: '16px' }}>★</span>
                    ))}
                  </div>

                  {/* Result Badge */}
                  <div style={{
                    background: 'rgba(212,160,23,0.1)',
                    border: '1px solid rgba(212,160,23,0.2)',
                    borderRadius: '6px',
                    padding: '8px 14px',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#D4A017',
                    letterSpacing: '0.05em',
                    alignSelf: 'flex-start',
                  }}>
                    ⚡ {t.result}
                  </div>

                  {/* Quote */}
                  <p style={{
                    color: '#D0D5E0',
                    fontSize: '15px',
                    lineHeight: 1.8,
                    fontStyle: 'italic',
                    flex: 1,
                  }}>
                    "{t.quote}"
                  </p>

                  {/* Author */}
                  <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.07)',
                    paddingTop: '16px',
                  }}>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: '15px', marginBottom: '4px' }}>{t.name}</div>
                    <div style={{ color: '#A0A8B8', fontSize: '13px' }}>{t.title}</div>
                    <div style={{ color: '#6B7280', fontSize: '12px', marginTop: '2px' }}>{t.location}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Presence */}
      <section style={{ background: '#111827', padding: '100px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="label-text">Industry Presence</span>
              <h2 className="display-lg" style={{ marginTop: '12px', color: '#fff' }}>
                Speaking & Presenting<br />
                <span style={{ color: '#D4A017' }}>At National Conferences</span>
              </h2>
              <p style={{ color: '#A0A8B8', fontSize: '17px', maxWidth: '560px', margin: '16px auto 0' }}>
                Sekayi Brown is a recognized speaker and trainer on the national exterior remodeling conference circuit.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', maxWidth: '800px', margin: '0 auto' }}>
            {conferences.map((conf, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div style={{
                  background: 'rgba(28,35,51,0.6)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '10px',
                  padding: '32px',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    background: 'rgba(212,160,23,0.1)',
                    border: '1px solid rgba(212,160,23,0.2)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                    flexShrink: 0,
                  }}>
                    🏛️
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '17px',
                      fontWeight: 700,
                      color: '#fff',
                      marginBottom: '6px',
                    }}>
                      {conf.name}
                    </div>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
                      <span style={{ background: 'rgba(212,160,23,0.1)', border: '1px solid rgba(212,160,23,0.2)', color: '#D4A017', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '2px 10px', borderRadius: '100px' }}>
                        {conf.region}
                      </span>
                      <span style={{ color: '#6B7280', fontSize: '12px', display: 'flex', alignItems: 'center' }}>{conf.year}</span>
                    </div>
                    <p style={{ color: '#A0A8B8', fontSize: '13px', lineHeight: 1.6 }}>{conf.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client Industries */}
      <section style={{ background: '#0A0F1E', padding: '80px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="label-text">Industry Expertise</span>
              <h2 className="display-md" style={{ marginTop: '12px', color: '#fff' }}>
                We Serve Companies Across<br />
                <span style={{ color: '#D4A017' }}>The Home Services Sector</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              {industries.map((ind, i) => (
                <span key={i} style={{
                  background: 'rgba(28,35,51,0.8)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#D0D5E0',
                  fontSize: '15px',
                  fontWeight: 500,
                  padding: '12px 24px',
                  borderRadius: '100px',
                  transition: 'all 0.2s',
                }}>
                  {ind}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0D1526', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 className="display-md" style={{ color: '#fff', marginBottom: '16px' }}>
              Your Success Story<br />
              <span style={{ color: '#D4A017' }}>Starts Here</span>
            </h2>
            <p style={{ color: '#A0A8B8', fontSize: '18px', marginBottom: '36px', maxWidth: '520px', margin: '0 auto 36px', lineHeight: 1.7 }}>
              These results are real. And they're available to you. The only variable is when you decide to start.
            </p>
            <Link to="/contact" className="btn btn-gold btn-lg">Book Your Free Strategy Call</Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
