import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import LogoWatermark from '../components/LogoWatermark'

const mindsetModules = [
  {
    num: '01',
    title: 'Are You Ready for What You Want?',
    desc: 'The foundational assessment. Discover the gap between where you are and where you\'re capable of going — and build the framework for intentional, results-driven growth.',
    duration: '45 min',
    outcomes: ['Self-assessment framework', 'Personal performance baseline', 'Goal architecture'],
  },
  {
    num: '02',
    title: "The Champion's Identity",
    desc: 'Reprogram your self-concept to align with high-performance outcomes. Champions aren\'t born — they\'re built through identity-level change.',
    duration: '50 min',
    outcomes: ['Identity mapping exercise', 'Core belief audit', 'Champion\'s declaration'],
  },
  {
    num: '03',
    title: 'Mastering Your Morning Ritual',
    desc: 'The first 90 minutes of your day determines your entire performance arc. Build a non-negotiable routine that primes your mind and body for peak output.',
    duration: '40 min',
    outcomes: ['Custom morning ritual design', 'Energy management tactics', 'Routine accountability tracker'],
  },
  {
    num: '04',
    title: 'The Art of Resilient Thinking',
    desc: 'Rejection is the job. Learn to process setbacks without emotional contamination, reset faster than your competition, and turn adversity into fuel.',
    duration: '55 min',
    outcomes: ['Resilience response framework', 'Mental reset protocols', 'Pressure performance techniques'],
  },
  {
    num: '05',
    title: 'Building Unshakeable Confidence',
    desc: 'Confidence isn\'t arrogance — it\'s preparation made visible. Build competence-backed confidence that shows up in every presentation, knock, and close.',
    duration: '50 min',
    outcomes: ['Confidence competency model', 'Pre-performance preparation ritual', 'Confidence building exercises'],
  },
  {
    num: '06',
    title: 'The Power of Purpose-Driven Selling',
    desc: 'When your "why" is bigger than your discomfort, the canvas becomes a mission. Discover your deeper purpose and connect it to your daily performance.',
    duration: '45 min',
    outcomes: ['Personal purpose statement', 'Values alignment exercise', 'Mission-driven performance metrics'],
  },
  {
    num: '07',
    title: 'Overcoming Rejection & Objections',
    desc: 'The most important skill in sales. Learn to hear "no" as data, not defeat — and transform objections into the fastest path to a close.',
    duration: '60 min',
    outcomes: ['Objection reframing system', 'Conversation response toolkit', 'Pattern-interrupt techniques'],
  },
  {
    num: '08',
    title: 'High-Performance Habits',
    desc: 'Your habits are your destiny. Install the daily disciplines used by top-1% producers across every high-stakes sales environment — and make them automatic.',
    duration: '50 min',
    outcomes: ['Habit audit & redesign', 'Performance habit stack', 'Weekly accountability system'],
  },
  {
    num: '09',
    title: 'Building & Leading Elite Teams',
    desc: 'Great leaders don\'t create followers — they create more leaders. Learn the systems, communication styles, and culture codes that build championship teams.',
    duration: '55 min',
    outcomes: ['Leadership style assessment', 'Team culture framework', 'Communication excellence toolkit'],
  },
  {
    num: '10',
    title: 'The Wealth Mindset',
    desc: 'Most salespeople are unconsciously capping their income. Break through the money ceiling with a prosperity mindset that aligns your beliefs with your earning potential.',
    duration: '50 min',
    outcomes: ['Income ceiling audit', 'Wealth identity installation', 'Financial goal architecture'],
  },
  {
    num: '11',
    title: 'Creating Your Legacy Brand',
    desc: 'You\'re not just a sales rep — you\'re building a personal brand that compounds over time. Learn to position yourself as the trusted authority in every room you enter.',
    duration: '45 min',
    outcomes: ['Personal brand audit', 'Authority positioning framework', 'Legacy vision statement'],
  },
  {
    num: '12',
    title: 'The Shortcut to Limitless Growth',
    desc: 'The final module synthesizes everything into a personal growth operating system — a repeatable, compounding process that keeps you evolving beyond every ceiling you encounter.',
    duration: '60 min',
    outcomes: ['Personal growth OS design', '90-day mastery roadmap', 'Certification & graduation'],
  },
]

const canvassingModules = [
  {
    num: '01',
    title: 'Mission & Mindset',
    desc: 'Before you make a single contact, you need to be mentally bulletproof. This module establishes the direct sales mindset framework that separates elite performers from average ones.',
    duration: '40 min',
    outcomes: ['High-performance identity programming', 'Daily mental preparation', 'Mission statement creation'],
  },
  {
    num: '02',
    title: 'Word Track & Structure',
    desc: 'Master the exact language patterns, tonality, and conversational structure used to generate appointments and open conversations — including handling every objection in the field.',
    duration: '75 min',
    outcomes: ['Proven opening word tracks', 'Objection response library', 'Appointment setting framework'],
  },
  {
    num: '03',
    title: 'Systems & Data',
    desc: 'Outbound sales without data is guessing. Learn how to track territory, measure conversion rates, and use performance data to optimize your strategy and approach in real time.',
    duration: '60 min',
    outcomes: ['CRM & tracking setup', 'Territory strategy system', 'KPI dashboard design'],
  },
  {
    num: '04',
    title: 'Advanced Communication',
    desc: 'Go beyond the word track. Learn advanced rapport-building techniques, reading body language, NLP communication patterns, and the psychological triggers that open conversations and build trust.',
    duration: '65 min',
    outcomes: ['Rapport acceleration techniques', 'Body language mastery', 'Psychological influence framework'],
  },
  {
    num: '05',
    title: 'Professional Operations',
    desc: 'Professional outbound sales means operating with discipline and standards. Cover territory protocols, professional conduct practices, legal compliance, and the logistics of running a field operation.',
    duration: '45 min',
    outcomes: ['Professional conduct standards', 'Legal compliance checklist', 'Territory logistics framework'],
  },
  {
    num: '06',
    title: 'Field Launch',
    desc: 'The final module is your deployment blueprint — everything you need to launch your first (or next) outbound sales operation with systems, team, and accountability already in place.',
    duration: '90 min',
    outcomes: ['Launch checklist & playbook', 'Team training framework', 'First 30-day accountability system'],
  },
]

function ModuleCard({ module, color, index }) {
  const [open, setOpen] = useState(false)

  return (
    <ScrollReveal delay={index * 60}>
      <div style={{
        background: open ? 'rgba(255,254,248,0.95)' : 'rgba(255,254,248,0.85)',
        border: `1px solid ${open ? `rgba(${color},0.4)` : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'all 0.3s',
        marginBottom: '12px',
      }}>
        <div
          onClick={() => setOpen(!open)}
          style={{
            padding: '24px 28px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '32px',
            color: `rgb(${color})`,
            letterSpacing: '0.05em',
            width: '52px',
            flexShrink: 0,
            opacity: 0.7,
          }}>
            {module.num}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
              fontWeight: 700,
              color: '#0A0A0A',
              marginBottom: '4px',
            }}>
              {module.title}
            </div>
            {!open && (
              <div style={{ color: '#888888', fontSize: '13px' }}>{module.duration} · Click to expand</div>
            )}
          </div>
          <div style={{
            color: `rgb(${color})`,
            transition: 'transform 0.3s',
            transform: open ? 'rotate(180deg)' : 'rotate(0)',
            flexShrink: 0,
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
        </div>

        {open && (
          <div style={{
            padding: '0 28px 28px',
            borderTop: `1px solid rgba(${color},0.15)`,
            paddingTop: '20px',
            display: 'grid',
            gridTemplateColumns: '1.6fr 1fr',
            gap: '28px',
          }}>
            <div>
              <p style={{ color: '#5C5C5C', fontSize: '14px', lineHeight: 1.8, marginBottom: '12px' }}>
                {module.desc}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#888888', fontSize: '13px', fontWeight: 600 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                Duration: {module.duration}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: `rgb(${color})`, marginBottom: '12px' }}>
                You'll Walk Away With
              </div>
              {module.outcomes.map((o, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  color: '#5C5C5C',
                  fontSize: '13px',
                  lineHeight: 1.5,
                  padding: '6px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                }}>
                  <span style={{ color: `rgb(${color})`, marginTop: '2px' }}>✓</span>
                  {o}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ScrollReveal>
  )
}

export default function TrainingAcademy() {
  const [activeTrack, setActiveTrack] = useState('mindset')

  return (
    <div>
      {/* Hero */}
      <section className="page-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <LogoWatermark position="top-right" size={420} opacity={0.055} delay={150} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <span className="label-text">BraveHeart Training Academy</span>
            <h1 className="display-xl" style={{ color: '#0A0A0A', marginTop: '16px', marginBottom: '24px' }}>
              Where Champions<br />
              <span style={{ color: '#D4A017' }}>Are Built</span>
            </h1>
            <p style={{ color: '#5C5C5C', fontSize: 'clamp(16px,2vw,20px)', maxWidth: '600px', lineHeight: 1.7 }}>
              18 modules across two tracks — Mindset Mastery and Direct Sales Excellence —
              designed to transform sales professionals from the inside out.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Track Overview */}
      <section style={{ background: '#F2EAD8', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
            {[
              {
                id: 'mindset',
                icon: '🧠',
                title: 'Track A: Mindset Mastery',
                modules: '12 Modules',
                duration: '~10 hours',
                desc: 'The complete mental and leadership transformation program for sales professionals who want to perform at the top 1% — permanently.',
                color: '212,160,23',
              },
              {
                id: 'canvassing',
                icon: '🚀',
                title: 'Track B: Direct Sales Excellence',
                modules: '6 Modules',
                duration: '~6 hours',
                desc: 'The field-proven system for dominating direct outbound sales — from first contact to booked appointment to scaled operation.',
                color: '100,160,255',
              },
            ].map((track) => (
              <ScrollReveal key={track.id}>
                <div
                  onClick={() => setActiveTrack(track.id)}
                  style={{
                    background: activeTrack === track.id
                      ? `rgba(${track.color},0.1)`
                      : 'rgba(255,254,248,0.85)',
                    border: `2px solid ${activeTrack === track.id ? `rgba(${track.color},0.4)` : 'rgba(255,255,255,0.07)'}`,
                    borderRadius: '12px',
                    padding: '32px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                >
                  <div style={{ fontSize: '40px', marginBottom: '16px' }}>{track.icon}</div>
                  <h3 style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#0A0A0A',
                    marginBottom: '12px',
                    lineHeight: 1.3,
                  }}>
                    {track.title}
                  </h3>
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '14px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: `rgb(${track.color})` }}>
                      {track.modules}
                    </span>
                    <span style={{ color: '#888888', fontSize: '12px' }}>·</span>
                    <span style={{ fontSize: '12px', color: '#5C5C5C', fontWeight: 500 }}>{track.duration}</span>
                  </div>
                  <p style={{ color: '#5C5C5C', fontSize: '14px', lineHeight: 1.7 }}>{track.desc}</p>
                  {activeTrack === track.id && (
                    <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '6px', color: `rgb(${track.color})`, fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      <span>Viewing Below</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section style={{ background: '#FAF7F2', padding: '80px 0' }}>
        <div className="container">
          {activeTrack === 'mindset' ? (
            <div>
              <ScrollReveal>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                  <span className="label-text">Track A</span>
                  <h2 className="display-md" style={{ marginTop: '12px', color: '#0A0A0A' }}>
                    12-Module Mindset<br />
                    <span style={{ color: '#D4A017' }}>Mastery Program</span>
                  </h2>
                  <p style={{ color: '#5C5C5C', fontSize: '17px', maxWidth: '560px', margin: '16px auto 0' }}>
                    Are you ready for what you want? This journey starts with radical honesty
                    and ends with a limitless growth system you'll use for life.
                  </p>
                </div>
              </ScrollReveal>
              {mindsetModules.map((mod, i) => (
                <ModuleCard key={i} module={mod} color="212,160,23" index={i} />
              ))}
            </div>
          ) : (
            <div>
              <ScrollReveal>
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgb(100,160,255)' }}>Track B</span>
                  <h2 className="display-md" style={{ marginTop: '12px', color: '#0A0A0A' }}>
                    6-Module Direct Sales<br />
                    <span style={{ color: 'rgb(100,160,255)' }}>Excellence System</span>
                  </h2>
                  <p style={{ color: '#5C5C5C', fontSize: '17px', maxWidth: '560px', margin: '16px auto 0' }}>
                    From mission and mindset to field launch — the complete blueprint for
                    building a professional outbound sales operation that generates consistent results.
                  </p>
                </div>
              </ScrollReveal>
              {canvassingModules.map((mod, i) => (
                <ModuleCard key={i} module={mod} color="100,160,255" index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Academy CTA */}
      <section style={{ background: '#F2EAD8', padding: '100px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '60px',
              alignItems: 'center',
              maxWidth: '960px',
              margin: '0 auto',
            }}>
              <div>
                <span className="label-text">Academy Enrollment</span>
                <h2 style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(36px, 5vw, 60px)',
                  letterSpacing: '0.05em',
                  color: '#0A0A0A',
                  marginTop: '16px',
                  marginBottom: '20px',
                  lineHeight: 1,
                }}>
                  Ready to Train<br />
                  <span style={{ color: '#D4A017' }}>Your Entire Team?</span>
                </h2>
                <p style={{ color: '#5C5C5C', fontSize: '16px', lineHeight: 1.7, marginBottom: '28px' }}>
                  The BraveHeart Training Academy is available as a standalone subscription for your team
                  or bundled with any consulting engagement. Access both tracks, all modules, and
                  ongoing updates as part of the Silver or Gold packages.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    'On-demand access for your full team',
                    'Progress tracking & completion certificates',
                    'Manager dashboard for accountability',
                    'New content added quarterly',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: '#D4A017', fontSize: '18px' }}>✓</span>
                      <span style={{ color: '#3A3A3A', fontSize: '15px' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(212,160,23,0.12), rgba(212,160,23,0.04))',
                  border: '1px solid rgba(212,160,23,0.25)',
                  borderRadius: '12px',
                  padding: '40px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', letterSpacing: '0.1em', color: '#D4A017', marginBottom: '4px' }}>
                    BraveHeart Training Academy
                  </div>
                  <div style={{ color: '#888888', fontSize: '14px', marginBottom: '28px' }}>Included with Silver & Gold packages</div>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '12px',
                    marginBottom: '28px',
                  }}>
                    {[
                      { num: '18', label: 'Modules' },
                      { num: '~16h', label: 'Of Content' },
                      { num: '2', label: 'Tracks' },
                      { num: '∞', label: 'Team Access' },
                    ].map((stat, i) => (
                      <div key={i} style={{
                        background: 'rgba(250,247,242,0.98)',
                        borderRadius: '8px',
                        padding: '16px',
                        border: '1px solid rgba(0,0,0,0.08)',
                      }}>
                        <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '28px', color: '#D4A017', letterSpacing: '0.05em' }}>{stat.num}</div>
                        <div style={{ fontSize: '12px', color: '#5C5C5C', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="btn btn-gold" style={{ display: 'block', textAlign: 'center', padding: '16px 32px' }}>
                    Enroll Your Team
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
