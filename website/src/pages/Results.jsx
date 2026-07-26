import React from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import StatCounter from '../components/StatCounter'
import LogoWatermark from '../components/LogoWatermark'

const testimonials = [
  {
    quote: "Sekayi transformed how we think about outbound sales. We went from 20 leads a month to over 80 within 60 days of implementing his system. The word tracks, the territory strategy, the accountability framework — it all clicked.",
    name: 'Marcus T.',
    title: 'Owner, Regional Sales Co.',
    location: 'Charlotte, NC',
    result: '+300% Lead Volume in 60 Days',
  },
  {
    quote: "We'd tried other consultants before and they gave us binders full of theory. Sekayi gave us systems. Real, working systems. Our close rate went from 18% to 31% in 3 months and we haven't looked back.",
    name: 'Jennifer R.',
    title: 'VP of Sales, Apex Revenue Group',
    location: 'Dallas, TX',
    result: '18% → 31% Close Rate',
  },
  {
    quote: "The Fractional Sales Director engagement was the best investment we made in 2024. Sekayi didn't just coach — he was in the trenches with us, running team meetings, refining our hiring process, and building the culture we'd always wanted.",
    name: 'Derek W.',
    title: 'CEO, Apex Business Solutions',
    location: 'Atlanta, GA',
    result: '$2.1M Revenue Added in Year 1',
  },
  {
    quote: "Our conference and event conversion was abysmal before BraveHeart. Sekayi came in, retrained our booth team, redesigned the lead capture process, and our last expo produced 3x the qualified appointments we'd ever seen.",
    name: 'Priya S.',
    title: 'Marketing Director, FrontLine Business Group',
    location: 'Phoenix, AZ',
    result: '3x Conference Conversion',
  },
  {
    quote: "I went through the Mindset Mastery program as a sales rep and within 6 months I was a team lead managing 12 reps. The personal development work that Sekayi has built into the curriculum is unlike anything else in our industry.",
    name: 'Carlos M.',
    title: 'Team Lead, Peak Performance Group',
    location: 'Miami, FL',
    result: 'Rep → Team Lead in 6 Months',
  },
  {
    quote: "The Outbound Sales Deployment service paid for itself in the first month. We had a full team deployed, word tracks dialed in, and qualified appointments flowing before I had to make a single hire. It's exactly what we needed to scale fast.",
    name: 'Brian K.',
    title: 'Founder, Summit Growth Ventures',
    location: 'Denver, CO',
    result: 'ROI Positive in 30 Days',
  },
]

const conferences = [
  { name: 'National Sales Summit', type: 'National', region: 'East', year: '2024', desc: 'The premier national gathering of sales leaders, strategists, and revenue-growth professionals.' },
  { name: 'Leadership Accelerator Conference', type: 'National', region: 'West', year: '2024', desc: 'A high-impact leadership development conference for executives and emerging leaders.' },
  { name: 'Professional Development Expo', type: 'National', region: 'National', year: '2024', desc: 'The leading professional development event connecting trainers, coaches, and organizational leaders.' },
  { name: 'Sales Excellence Forum', type: 'Regional', region: 'South', year: '2024', desc: 'A regional gathering of top sales professionals focused on strategy, mindset, and performance.' },
]

const metrics = [
  { end: 150, prefix: '$', suffix: 'M+', label: 'Revenue Influenced', sublabel: 'Across all client engagements' },
  { end: 18, suffix: '+', label: 'Leaders Developed', sublabel: 'Directors and managers trained' },
  { end: 100, suffix: '+', label: 'Bootcamps Delivered', sublabel: 'Nationwide sales training events' },
  { end: 300, suffix: '%', label: 'Avg Lead Increase', sublabel: 'Within first 90 days' },
]

const industries = [
  'Sales Organizations', 'Corporate Training', 'Business Development', 'Professional Services', 'Technology & SaaS', 'Financial Services', 'Healthcare', 'Higher Education'
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
            <h1 className="display-xl" style={{ color: '#0A0A0A', marginTop: '16px', marginBottom: '24px' }}>
              Real Results.<br />
              <span style={{ color: '#D4A017' }}>Real Companies.</span>
            </h1>
            <p style={{ color: '#5C5C5C', fontSize: 'clamp(16px,2vw,20px)', maxWidth: '580px', lineHeight: 1.7 }}>
              Every number here is earned in the field — not projected, not hypothetical.
              This is what happens when proven systems meet committed teams.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Key Metrics */}
      <section style={{ background: '#F2EAD8', padding: '80px 0' }}>
        <div className="container">
          <ScrollReveal>
            <StatCounter stats={metrics} />
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: '#FAF7F2', padding: '100px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="label-text">Client Testimonials</span>
              <h2 className="display-lg" style={{ marginTop: '12px', color: '#0A0A0A' }}>
                What Our Clients<br />
                <span style={{ color: '#D4A017' }}>Say About BraveHeart</span>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div style={{
                  background: 'rgba(255,254,248,0.85)',
                  border: '1px solid rgba(0,0,0,0.08)',
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
                    color: '#3A3A3A',
                    fontSize: '15px',
                    lineHeight: 1.8,
                    fontStyle: 'italic',
                    flex: 1,
                  }}>
                    "{t.quote}"
                  </p>

                  {/* Author */}
                  <div style={{
                    borderTop: '1px solid rgba(0,0,0,0.08)',
                    paddingTop: '16px',
                  }}>
                    <div style={{ fontWeight: 700, color: '#0A0A0A', fontSize: '15px', marginBottom: '4px' }}>{t.name}</div>
                    <div style={{ color: '#5C5C5C', fontSize: '13px' }}>{t.title}</div>
                    <div style={{ color: '#888888', fontSize: '12px', marginTop: '2px' }}>{t.location}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Presence */}
      <section style={{ background: '#E8DCC8', padding: '100px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="label-text">Industry Presence</span>
              <h2 className="display-lg" style={{ marginTop: '12px', color: '#0A0A0A' }}>
                Speaking & Presenting<br />
                <span style={{ color: '#D4A017' }}>At National Conferences</span>
              </h2>
              <p style={{ color: '#5C5C5C', fontSize: '17px', maxWidth: '560px', margin: '16px auto 0' }}>
                Sekayi Brown is a recognized speaker and trainer on the national sales, leadership, and professional development conference circuit.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', maxWidth: '800px', margin: '0 auto' }}>
            {conferences.map((conf, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div style={{
                  background: 'rgba(255,254,248,0.85)',
                  border: '1px solid rgba(0,0,0,0.08)',
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
                      color: '#0A0A0A',
                      marginBottom: '6px',
                    }}>
                      {conf.name}
                    </div>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
                      <span style={{ background: 'rgba(212,160,23,0.1)', border: '1px solid rgba(212,160,23,0.2)', color: '#D4A017', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '2px 10px', borderRadius: '100px' }}>
                        {conf.region}
                      </span>
                      <span style={{ color: '#888888', fontSize: '12px', display: 'flex', alignItems: 'center' }}>{conf.year}</span>
                    </div>
                    <p style={{ color: '#5C5C5C', fontSize: '13px', lineHeight: 1.6 }}>{conf.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client Industries */}
      <section style={{ background: '#FAF7F2', padding: '80px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="label-text">Industry Expertise</span>
              <h2 className="display-md" style={{ marginTop: '12px', color: '#0A0A0A' }}>
                We Serve Organizations Across<br />
                <span style={{ color: '#D4A017' }}>Every Professional Sector</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              {industries.map((ind, i) => (
                <span key={i} style={{
                  background: 'rgba(255,254,248,0.85)',
                  border: '1px solid rgba(0,0,0,0.10)',
                  color: '#3A3A3A',
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
      <section style={{ background: '#F2EAD8', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 className="display-md" style={{ color: '#0A0A0A', marginBottom: '16px' }}>
              Your Success Story<br />
              <span style={{ color: '#D4A017' }}>Starts Here</span>
            </h2>
            <p style={{ color: '#5C5C5C', fontSize: '18px', marginBottom: '36px', maxWidth: '520px', margin: '0 auto 36px', lineHeight: 1.7 }}>
              These results are real. And they're available to you. The only variable is when you decide to start.
            </p>
            <a href="https://calendly.com/braveheartway/30min" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Book Your Free Strategy Call</a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
