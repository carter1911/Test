import React from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import LogoWatermark from '../components/LogoWatermark'

const timeline = [
  {
    year: '2013',
    company: 'Power Home Remodeling',
    role: 'Sales Representative → Sales Manager',
    desc: 'Joined one of the largest exterior remodeling companies in the US as a rep and climbed to management, developing a deep mastery of the in-home sales process, door-to-door lead generation, and high-volume team management.',
    achievement: 'Top-performing regional team. Ran 100+ training bootcamps.',
    color: '#D4A017',
  },
  {
    year: '2019',
    company: 'Amazon',
    role: 'Sales & Operations Leader',
    desc: 'Applied enterprise-level sales operations, customer success strategy, and data-driven management systems — bringing Fortune 500 discipline to the exterior remodeling world.',
    achievement: 'Scaled team performance metrics. Developed accountability frameworks.',
    color: '#D4A017',
  },
  {
    year: '2021',
    company: 'Home Genius Exteriors',
    role: 'Regional Sales Director',
    desc: 'Led multi-state sales expansion, recruiting top talent, building canvassing teams from scratch, and managing home show operations that generated consistent multi-million dollar pipelines.',
    achievement: 'Influenced $150M+ in revenue. Built and coached 18+ leaders.',
    color: '#D4A017',
  },
  {
    year: '2024',
    company: 'BraveHeart Consulting LLC',
    role: 'Founder & CEO',
    desc: 'Founded BraveHeart Way to bring proven, enterprise-grade sales and marketing systems to small and mid-size exterior remodeling companies — giving them the same playbooks used by the industry\'s top producers.',
    achievement: 'Consulting, coaching, and building revenue engines nationwide.',
    color: '#D4A017',
  },
]

const values = [
  { icon: '🔥', title: 'BraveHeart Execution', desc: 'We don\'t sell ideas. We deliver results through relentless implementation and accountability.' },
  { icon: '🧠', title: 'Systems Over Hustle', desc: 'Scalable, repeatable systems outlast any individual. We build frameworks that compound.' },
  { icon: '🎯', title: 'Precision Over Volume', desc: 'The right lead, the right script, the right close — executed with precision beats volume every time.' },
  { icon: '🌱', title: 'Growth as Identity', desc: 'We develop people, not just pipelines. Leaders who grow transform the companies they touch.' },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="page-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <LogoWatermark position="top-right" size={420} opacity={0.055} delay={150} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <span className="label-text">About Sekayi Brown</span>
            <h1 className="display-xl" style={{ color: '#0A0A0A', marginTop: '16px', marginBottom: '24px' }}>
              The Man Behind<br />
              <span style={{ color: '#D4A017' }}>The System</span>
            </h1>
            <p style={{ color: '#5C5C5C', fontSize: 'clamp(16px,2vw,20px)', maxWidth: '600px', lineHeight: 1.7 }}>
              Sales, Marketing & Leadership Executive with 10+ years transforming exterior remodeling
              companies into revenue engines through proven systems, elite team development, and
              unwavering accountability.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Bio Section */}
      <section style={{ background: '#FAF7F2', padding: '100px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '80px',
            alignItems: 'center',
          }}>
            <ScrollReveal direction="left">
              {/* Sekayi — real headshot slot */}
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                border: '2px solid rgba(212,160,23,0.25)',
                boxShadow: '0 24px 80px rgba(0,0,0,0.55), 0 0 40px rgba(212,160,23,0.08)',
              }}>
                <img
                  src="/images/sekayi-headshot.jpg"
                  alt="Sekayi Brown — Founder, BraveHeart Consulting LLC"
                  style={{
                    width: '100%',
                    display: 'block',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    aspectRatio: '4/5',
                  }}
                  onError={e => {
                    // Fallback if image not yet placed
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                {/* Fallback placeholder — hidden when image loads */}
                <div style={{
                  display: 'none',
                  background: 'linear-gradient(135deg, #1C2333, #252D40)',
                  aspectRatio: '3/4',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '12px',
                  color: '#888888',
                  fontSize: '14px',
                }}>
                  <span style={{ fontSize: '40px' }}>📷</span>
                  <span>Add sekayi-headshot.jpg to<br/>public/images/</span>
                </div>

              </div>

              {/* Name block — below photo so it's always readable */}
              <div style={{
                background: '#FFFEF8',
                border: '1px solid rgba(184,134,11,0.2)',
                borderRadius: '0 0 12px 12px',
                padding: '20px 24px',
                marginTop: '-4px',
              }}>
                <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '24px', letterSpacing: '0.08em', color: '#0A0A0A' }}>
                  SEKAYI BROWN
                </div>
                <div style={{ fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8860B', fontWeight: 600, marginTop: '2px' }}>
                  Founder · BraveHeart Consulting LLC
                </div>
                <div style={{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
                  {['$150M+', '18+ Leaders', '100+ Bootcamps'].map((stat, i) => (
                    <div key={i} style={{
                      background: 'rgba(184,134,11,0.08)',
                      border: '1px solid rgba(184,134,11,0.25)',
                      borderRadius: '6px',
                      padding: '6px 12px',
                    }}>
                      <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '14px', color: '#B8860B', letterSpacing: '0.03em' }}>{stat}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <span className="label-text">The Story</span>
                <h2 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  fontWeight: 700,
                  color: '#0A0A0A',
                  marginTop: '16px',
                  marginBottom: '28px',
                  lineHeight: 1.2,
                }}>
                  I've Done It at Scale.<br />
                  <em style={{ color: '#D4A017' }}>Not Just Coached It.</em>
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    'Sekayi Brown is a Sales, Marketing & Leadership Executive with over a decade of frontline experience in the exterior remodeling industry — one of the most competitive, high-stakes sales environments in the country.',
                    'He\'s built canvassing teams from zero to hundreds of reps. He\'s run multi-state home show operations. He\'s trained sales professionals at every level from new hire to senior director. And he\'s done it at organizations like Power Home Remodeling — one of America\'s most recognized remodeling brands — as well as Amazon and Home Genius Exteriors.',
                    'What separates Sekayi from other consultants? He\'s not teaching theory he read in a book. He\'s transferring the exact systems, scripts, hiring frameworks, and accountability structures that generated over $150M in revenue influence across his career.',
                    'Today, through BraveHeart Consulting LLC, he\'s on a mission to give small and medium-sized remodeling companies access to the same elite-level infrastructure that powers the industry\'s top players — so they can compete, grow, and win.',
                  ].map((para, i) => (
                    <p key={i} style={{
                      color: '#3A3A3A',
                      fontSize: '16px',
                      lineHeight: 1.8,
                      fontWeight: i === 0 ? 500 : 400,
                    }}>
                      {para}
                    </p>
                  ))}
                </div>

                <div style={{
                  marginTop: '40px',
                  padding: '24px 28px',
                  background: 'rgba(212,160,23,0.08)',
                  border: '1px solid rgba(212,160,23,0.2)',
                  borderLeft: '4px solid #D4A017',
                  borderRadius: '0 8px 8px 0',
                }}>
                  <p style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '18px',
                    fontStyle: 'italic',
                    color: '#0A0A0A',
                    lineHeight: 1.6,
                    marginBottom: '12px',
                  }}>
                    "Developing and consulting small to medium size businesses in sales and customer service
                    to help increase revenue and retention using the latest resources and strategies."
                  </p>
                  <span style={{ color: '#D4A017', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Mission Statement
                  </span>
                </div>

                <div style={{ marginTop: '36px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <Link to="/contact" className="btn btn-gold">Book a Strategy Call</Link>
                  <Link to="/services" className="btn btn-outline">View Services</Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: '#F2EAD8', padding: '100px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="label-text">Career Authority</span>
              <h2 className="display-lg" style={{ marginTop: '12px', color: '#0A0A0A' }}>
                The Track Record<br />
                <span style={{ color: '#D4A017' }}>That Built BraveHeart</span>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              left: '30px',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, transparent, #D4A017 10%, #D4A017 90%, transparent)',
            }} />

            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div style={{
                  display: 'flex',
                  gap: '40px',
                  marginBottom: i < timeline.length - 1 ? '60px' : 0,
                  position: 'relative',
                }}>
                  {/* Dot */}
                  <div style={{
                    width: '60px',
                    flexShrink: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '4px',
                  }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      background: '#D4A017',
                      borderRadius: '50%',
                      border: '3px solid #F2EAD8',
                      boxShadow: '0 0 16px rgba(212,160,23,0.5)',
                      position: 'relative',
                      zIndex: 1,
                    }} />
                  </div>

                  {/* Content */}
                  <div style={{
                    flex: 1,
                    background: 'rgba(255,254,248,0.85)',
                    border: '1px solid rgba(0,0,0,0.08)',
                    borderRadius: '10px',
                    padding: '28px 32px',
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      marginBottom: '8px',
                      flexWrap: 'wrap',
                    }}>
                      <span style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: '24px',
                        color: '#D4A017',
                        letterSpacing: '0.05em',
                      }}>
                        {item.year}
                      </span>
                      <span style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        fontSize: '20px',
                        letterSpacing: '0.05em',
                        color: '#0A0A0A',
                      }}>
                        {item.company}
                      </span>
                    </div>
                    <div style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#5C5C5C',
                      marginBottom: '12px',
                    }}>
                      {item.role}
                    </div>
                    <p style={{ color: '#5C5C5C', fontSize: '15px', lineHeight: 1.7, marginBottom: '14px' }}>
                      {item.desc}
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 14px',
                      background: 'rgba(212,160,23,0.08)',
                      borderRadius: '6px',
                      border: '1px solid rgba(212,160,23,0.15)',
                    }}>
                      <span style={{ color: '#D4A017', fontSize: '16px' }}>⚡</span>
                      <span style={{ color: '#D4A017', fontSize: '13px', fontWeight: 600 }}>{item.achievement}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Family Section */}
      <section style={{ background: '#FAF7F2', padding: '100px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: '72px',
            alignItems: 'center',
            maxWidth: '1100px',
            margin: '0 auto',
          }}>
            <ScrollReveal direction="left">
              {/* Family photo */}
              <div style={{ position: 'relative' }}>
                {/* Gold accent line */}
                <div style={{
                  position: 'absolute',
                  top: '-16px',
                  left: '-16px',
                  width: '80px',
                  height: '80px',
                  border: '3px solid rgba(212,160,23,0.35)',
                  borderRight: 'none',
                  borderBottom: 'none',
                  borderRadius: '4px 0 0 0',
                  zIndex: 1,
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '-16px',
                  right: '-16px',
                  width: '80px',
                  height: '80px',
                  border: '3px solid rgba(212,160,23,0.35)',
                  borderLeft: 'none',
                  borderTop: 'none',
                  borderRadius: '0 0 4px 0',
                  zIndex: 1,
                }} />
                <div style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 48px rgba(212,160,23,0.06)',
                  border: '1px solid rgba(212,160,23,0.15)',
                  position: 'relative',
                }}>
                  <img
                    src="/images/sekayi-family.jpg"
                    alt="Sekayi Brown with his family"
                    style={{
                      width: '100%',
                      display: 'block',
                      objectFit: 'cover',
                      aspectRatio: '4/5',
                      /* Subtle warm grade that bridges the Christmas-portrait
                         lighting with the navy/gold site palette */
                      filter: 'contrast(1.05) saturate(1.1) brightness(0.98)',
                    }}
                    onError={e => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  {/* Fallback */}
                  <div style={{
                    display: 'none',
                    background: 'linear-gradient(135deg, #1C2333, #252D40)',
                    aspectRatio: '4/5',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '12px',
                    color: '#888888',
                    fontSize: '14px',
                    textAlign: 'center',
                    padding: '24px',
                  }}>
                    <span style={{ fontSize: '40px' }}>🏡</span>
                    <span>Add sekayi-family.jpg to<br/>public/images/</span>
                  </div>

                  {/* Subtle bottom vignette */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '30%',
                    background: 'linear-gradient(to top, rgba(10,15,30,0.4), transparent)',
                    pointerEvents: 'none',
                  }} />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <span className="label-text">The Man Behind the Mission</span>
                <h2 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(28px, 3.5vw, 42px)',
                  fontWeight: 700,
                  color: '#0A0A0A',
                  marginTop: '16px',
                  marginBottom: '24px',
                  lineHeight: 1.2,
                }}>
                  Family Is the<br />
                  <em style={{ color: '#D4A017' }}>"Why" Behind It All</em>
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <p style={{ color: '#1A1A1A', fontSize: '16px', lineHeight: 1.8, fontWeight: 500 }}>
                    Behind every system Sekayi builds and every leader he develops is a deeper
                    purpose — the family waiting at home who remind him every day what it all means.
                  </p>
                  <p style={{ color: '#5C5C5C', fontSize: '15px', lineHeight: 1.8 }}>
                    Sekayi is a proud husband and father. The discipline, resilience, and
                    relentless pursuit of excellence that define his professional approach
                    flow directly from his commitment to building a legacy his family can be proud of.
                  </p>
                  <p style={{ color: '#5C5C5C', fontSize: '15px', lineHeight: 1.8 }}>
                    When clients work with BraveHeart, they're not just getting a consultant —
                    they're getting someone who understands that a thriving business creates
                    thriving families. That's not a tagline. It's personal.
                  </p>
                </div>

                {/* Gold pull quote */}
                <div style={{
                  marginTop: '32px',
                  padding: '20px 24px',
                  background: 'rgba(212,160,23,0.07)',
                  borderLeft: '3px solid #D4A017',
                  borderRadius: '0 8px 8px 0',
                }}>
                  <p style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '17px',
                    fontStyle: 'italic',
                    color: '#0A0A0A',
                    lineHeight: 1.6,
                  }}>
                    "I build revenue engines so that families — mine and the ones my clients come home to — can live without limits."
                  </p>
                  <span style={{ color: '#D4A017', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginTop: '10px' }}>
                    — Sekayi Brown
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#E8DCC8', padding: '100px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="label-text">Core Values</span>
              <h2 className="display-lg" style={{ marginTop: '12px', color: '#0A0A0A' }}>
                The BraveHeart<br />
                <span style={{ color: '#D4A017' }}>Way of Thinking</span>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div style={{
                  background: 'rgba(255,254,248,0.85)',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: '10px',
                  padding: '36px 28px',
                  textAlign: 'center',
                  transition: 'all 0.3s',
                  height: '100%',
                }}>
                  <div style={{ fontSize: '40px', marginBottom: '18px' }}>{v.icon}</div>
                  <h3 style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '17px',
                    fontWeight: 700,
                    color: '#0A0A0A',
                    marginBottom: '12px',
                  }}>
                    {v.title}
                  </h3>
                  <p style={{ color: '#5C5C5C', fontSize: '14px', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F2EAD8', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 className="display-md" style={{ color: '#0A0A0A', marginBottom: '16px' }}>
              Ready to Work With Sekayi?
            </h2>
            <p style={{ color: '#5C5C5C', fontSize: '18px', marginBottom: '36px', maxWidth: '520px', margin: '0 auto 36px' }}>
              Book a free 30-minute strategy call and walk away with clarity on exactly how to build your revenue engine.
            </p>
            <Link to="/contact" className="btn btn-gold btn-lg">Book Your Free Strategy Call</Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
