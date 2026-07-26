import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import LogoWatermark from '../components/LogoWatermark'

const services = [
  {
    icon: '🎯',
    title: 'Lead Generation',
    desc: 'Comprehensive outbound lead generation systems combining direct outreach, digital marketing, and strategic community presence to build a consistent, high-quality pipeline of qualified prospects and decision-makers.',
    outcomes: ['30–60 qualified leads/month', 'Predictable pipeline fill', 'Measurable cost-per-lead'],
    tier: 'bronze',
    deliverables: ['Outbound strategy & territory mapping', 'Digital ad setup & management', 'Lead tracking dashboard', 'Weekly pipeline reports'],
  },
  {
    icon: '👥',
    title: 'Recruiting & Staffing',
    desc: 'End-to-end talent acquisition for your sales organization. We source, screen, interview, and onboard elite sales professionals who are proven in high-volume, commission-driven environments.',
    outcomes: ['2–3x faster hiring', 'Higher first-year retention', 'Culture-fit screening'],
    tier: 'bronze',
    deliverables: ['Job posting optimization', 'Behavioral interview framework', 'Assessment & scoring rubrics', 'Onboarding playbook'],
  },
  {
    icon: '📈',
    title: 'Sales & Marketing Consulting',
    desc: 'A comprehensive audit and rebuild of your entire revenue operation — from how you generate leads to how you close deals and retain customers. Delivered as a strategic engagement with hands-on implementation support.',
    outcomes: ['+15–25% close rate lift', 'Unified sales & marketing strategy', 'Custom KPI dashboard'],
    tier: 'silver',
    deliverables: ['Full revenue operation audit', 'Custom sales playbook', 'Marketing alignment strategy', '90-day execution roadmap'],
  },
  {
    icon: '🏢',
    title: 'Event & Conference Strategy',
    desc: 'Transform industry events and professional conferences from passive marketing expenses into your most powerful lead-generation channel. We design your presence strategy, train your team, and build the follow-up system.',
    outcomes: ['3–5x more qualified leads per event', 'Higher conversion from conference presence', 'Systematic follow-up pipeline'],
    tier: 'bronze',
    deliverables: ['Event presence & messaging strategy', 'Conference team training', 'Lead capture system', 'Post-event follow-up sequence'],
  },
  {
    icon: '🚀',
    title: 'Outbound Sales Deployment',
    desc: 'We build, manage, and deploy outbound sales teams on your behalf — handling recruiting, training, territory strategy, and performance management so you get a fully operational lead engine without the overhead.',
    outcomes: ['Consistent daily prospecting activity', 'Predictable pipeline flow', 'Lower cost-per-lead than inbound alone'],
    tier: 'silver',
    deliverables: ['Sales team recruitment & onboarding', 'Word track & objection training', 'Territory strategy & performance management', 'Daily performance reporting'],
  },
  {
    icon: '🏆',
    title: 'Performance Coaching',
    desc: 'Intensive 1-on-1 and group coaching programs for sales reps and managers designed to maximize close rates, build consistent high-performance habits, and create a culture of accountability.',
    outcomes: ['+10–20% individual close rate', 'Stronger manager-rep relationships', 'Measurable KPI improvement'],
    tier: 'bronze',
    deliverables: ['Weekly group coaching sessions', '1-on-1 rep coaching calls', 'Role-play & word track refinement', 'Personal development plans'],
  },
  {
    icon: '🎓',
    title: 'Online Training Academy',
    desc: 'A comprehensive 18-module online learning platform covering mindset, direct sales excellence, sales technique, leadership development, and professional growth — available for your entire team, on-demand.',
    outcomes: ['Scalable team training', '24/7 access for all reps', 'Standardized sales process'],
    tier: 'bronze',
    deliverables: ['12-Module Mindset Program', '6-Module Direct Sales Excellence', 'Assessments & certifications', 'Manager progress dashboard'],
  },
  {
    icon: '💼',
    title: 'Fractional Sales Director',
    desc: 'Sekayi serves as your embedded executive sales leader on a fractional basis — providing strategy, management oversight, hiring decisions, and daily leadership without the cost of a full-time executive hire.',
    outcomes: ['Executive strategy without exec cost', 'Team culture transformation', 'Revenue system architecture'],
    tier: 'gold',
    deliverables: ['Weekly executive strategy sessions', 'Manager development & coaching', 'KPI & compensation plan design', 'Quarterly growth planning'],
  },
  {
    icon: '🏢',
    title: 'Sales Agency',
    desc: 'The full white-glove engagement: BraveHeart runs your entire outbound sales operation as your outsourced revenue agency. We own the team, the process, the pipeline, and the results — you collect the revenue.',
    outcomes: ['Complete revenue outsourcing', 'Scalable without in-house overhead', 'Agency-level accountability'],
    tier: 'gold',
    deliverables: ['Full team recruitment & management', 'End-to-end pipeline operation', 'Real-time reporting & analytics', 'Monthly executive strategy reviews'],
  },
]

const tiers = {
  bronze: {
    label: 'Bronze',
    price: '$7,500',
    color: '#CD7F32',
    bg: 'rgba(205,127,50,0.12)',
    border: 'rgba(205,127,50,0.3)',
    desc: 'Focused engagements for teams ready to plug specific gaps and start generating results fast.',
  },
  silver: {
    label: 'Silver',
    price: '$15,000–$25,000',
    color: '#C0C0C0',
    bg: 'rgba(192,192,192,0.08)',
    border: 'rgba(192,192,192,0.25)',
    desc: 'Comprehensive strategy and implementation for companies serious about scaling their sales operation.',
  },
  gold: {
    label: 'Gold',
    price: '$50,000–$100,000',
    color: '#D4A017',
    bg: 'rgba(212,160,23,0.1)',
    border: 'rgba(212,160,23,0.35)',
    desc: 'Full executive partnership and/or complete outsourced sales operation for companies ready to dominate their market.',
  },
}

function ServiceCard({ service, index }) {
  const [open, setOpen] = useState(false)
  const tier = tiers[service.tier]

  return (
    <ScrollReveal delay={index * 60}>
      <div style={{
        background: 'rgba(255,254,248,0.85)',
        border: `1px solid ${open ? tier.border : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '10px',
        overflow: 'hidden',
        transition: 'all 0.35s ease',
        transform: open ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: open ? `0 8px 40px rgba(0,0,0,0.4)` : 'none',
      }}>
        <div
          onClick={() => setOpen(!open)}
          style={{
            padding: '32px',
            cursor: 'pointer',
            display: 'flex',
            gap: '20px',
            alignItems: 'flex-start',
          }}
        >
          <div style={{ fontSize: '36px', flexShrink: 0 }}>{service.icon}</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
              <h3 style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '19px',
                fontWeight: 700,
                color: '#0A0A0A',
              }}>
                {service.title}
              </h3>
              <span style={{
                background: tier.bg,
                border: `1px solid ${tier.border}`,
                color: tier.color,
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '3px 10px',
                borderRadius: '100px',
              }}>
                {tier.label} · {tier.price}
              </span>
            </div>
            <p style={{ color: '#5C5C5C', fontSize: '14px', lineHeight: 1.7 }}>{service.desc}</p>
          </div>
          <div style={{
            color: '#D4A017',
            transition: 'transform 0.3s',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            flexShrink: 0,
            marginTop: '4px',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
        </div>

        {open && (
          <div style={{
            borderTop: `1px solid ${tier.border}`,
            padding: '28px 32px',
            background: tier.bg,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
          }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: tier.color, marginBottom: '14px' }}>
                Outcome Metrics
              </div>
              {service.outcomes.map((o, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                  <span style={{ color: tier.color, fontSize: '16px' }}>✓</span>
                  <span style={{ color: '#0A0A0A', fontSize: '14px', fontWeight: 500 }}>{o}</span>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: tier.color, marginBottom: '14px' }}>
                What's Included
              </div>
              {service.deliverables.map((d, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                  <span style={{ color: '#D4A017' }}>→</span>
                  <span style={{ color: '#3A3A3A', fontSize: '14px' }}>{d}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ScrollReveal>
  )
}

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero" style={{ minHeight: '55vh', display: 'flex', alignItems: 'center' }}>
        <LogoWatermark position="top-right" size={400} opacity={0.055} delay={150} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <span className="label-text">Services & Pricing</span>
            <h1 className="display-xl" style={{ color: '#0A0A0A', marginTop: '16px', marginBottom: '24px' }}>
              9 Ways to Build Your<br />
              <span style={{ color: '#D4A017' }}>Revenue Engine</span>
            </h1>
            <p style={{ color: '#5C5C5C', fontSize: 'clamp(16px,2vw,20px)', maxWidth: '580px', lineHeight: 1.7 }}>
              Every service is built from real-world results — not theory. Click any card to see
              outcome metrics and deliverables.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section style={{ background: '#F2EAD8', padding: '80px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="label-text">Investment Tiers</span>
              <h2 className="display-md" style={{ marginTop: '12px', color: '#0A0A0A' }}>
                Three Tiers. One Goal:<br />
                <span style={{ color: '#D4A017' }}>Your Revenue Growth</span>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '16px' }}>
            {Object.entries(tiers).map(([key, tier], i) => (
              <ScrollReveal key={key} delay={i * 100}>
                <div style={{
                  background: tier.bg,
                  border: `1px solid ${tier.border}`,
                  borderRadius: '12px',
                  padding: '36px 32px',
                  textAlign: 'center',
                  position: 'relative',
                }}>
                  {key === 'silver' && (
                    <div style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#D4A017',
                      color: '#0A0F1E',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '4px 16px',
                      borderRadius: '100px',
                    }}>
                      Most Popular
                    </div>
                  )}
                  <div style={{
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: '32px',
                    letterSpacing: '0.08em',
                    color: tier.color,
                    marginBottom: '4px',
                  }}>
                    {tier.label}
                  </div>
                  <div style={{
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: '28px',
                    color: '#0A0A0A',
                    marginBottom: '16px',
                  }}>
                    {tier.price}
                  </div>
                  <p style={{ color: '#5C5C5C', fontSize: '14px', lineHeight: 1.7 }}>{tier.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section style={{ background: '#FAF7F2', padding: '80px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="label-text">All Services</span>
              <h2 className="display-md" style={{ marginTop: '12px', color: '#0A0A0A' }}>
                Click to Explore<br />
                <span style={{ color: '#D4A017' }}>Each Service</span>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {services.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} />
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div style={{
              marginTop: '64px',
              textAlign: 'center',
              padding: '60px 40px',
              background: 'linear-gradient(135deg, rgba(212,160,23,0.1), rgba(212,160,23,0.04))',
              border: '1px solid rgba(212,160,23,0.2)',
              borderRadius: '12px',
            }}>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(24px, 3vw, 36px)',
                fontWeight: 700,
                color: '#0A0A0A',
                marginBottom: '16px',
              }}>
                Not Sure Which Package Is Right?
              </h3>
              <p style={{ color: '#5C5C5C', fontSize: '17px', maxWidth: '520px', margin: '0 auto 32px', lineHeight: 1.7 }}>
                Every company is different. Book a free strategy call and Sekayi will personally
                recommend the exact engagement to fit your goals, team size, and budget.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://calendly.com/braveheartway/30min" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Book Free Strategy Call</a>
                <Link to="/" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#D4A017',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  padding: '16px 24px',
                  textDecoration: 'none',
                }}>
                  Take the Service Matcher Quiz →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
