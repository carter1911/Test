import React from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

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
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <span className="label-text">About Sekayi Brown</span>
            <h1 className="display-xl" style={{ color: '#fff', marginTop: '16px', marginBottom: '24px' }}>
              The Man Behind<br />
              <span style={{ color: '#D4A017' }}>The System</span>
            </h1>
            <p style={{ color: '#A0A8B8', fontSize: 'clamp(16px,2vw,20px)', maxWidth: '600px', lineHeight: 1.7 }}>
              Sales, Marketing & Leadership Executive with 10+ years transforming exterior remodeling
              companies into revenue engines through proven systems, elite team development, and
              unwavering accountability.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Bio Section */}
      <section style={{ background: '#0A0F1E', padding: '100px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '80px',
            alignItems: 'center',
          }}>
            <ScrollReveal direction="left">
              {/* Headshot Placeholder */}
              <div style={{
                background: 'linear-gradient(135deg, #1C2333, #252D40)',
                border: '2px solid rgba(212,160,23,0.25)',
                borderRadius: '16px',
                aspectRatio: '3/4',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '60%',
                  background: 'linear-gradient(to top, rgba(212,160,23,0.08), transparent)',
                }} />
                <div style={{
                  width: '120px',
                  height: '120px',
                  background: 'rgba(212,160,23,0.15)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '48px',
                  border: '2px solid rgba(212,160,23,0.3)',
                }}>
                  👤
                </div>
                <div style={{ textAlign: 'center', zIndex: 1 }}>
                  <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '28px', letterSpacing: '0.08em', color: '#fff' }}>
                    SEKAYI BROWN
                  </div>
                  <div style={{ fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#D4A017', fontWeight: 600, marginTop: '4px' }}>
                    Founder · BraveHeart Consulting LLC
                  </div>
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  right: '24px',
                  display: 'flex',
                  gap: '8px',
                }}>
                  {['$150M+', '18+ Leaders', '100+ Bootcamps'].map((stat, i) => (
                    <div key={i} style={{
                      flex: 1,
                      background: 'rgba(10,15,30,0.8)',
                      border: '1px solid rgba(212,160,23,0.2)',
                      borderRadius: '6px',
                      padding: '10px 8px',
                      textAlign: 'center',
                    }}>
                      <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '16px', color: '#D4A017', letterSpacing: '0.03em' }}>{stat}</div>
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
                  color: '#fff',
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
                      color: i === 0 ? '#D0D5E0' : '#A0A8B8',
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
                    color: '#fff',
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
      <section style={{ background: '#0D1526', padding: '100px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="label-text">Career Authority</span>
              <h2 className="display-lg" style={{ marginTop: '12px', color: '#fff' }}>
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
                      border: '3px solid #0D1526',
                      boxShadow: '0 0 16px rgba(212,160,23,0.5)',
                      position: 'relative',
                      zIndex: 1,
                    }} />
                  </div>

                  {/* Content */}
                  <div style={{
                    flex: 1,
                    background: 'rgba(28,35,51,0.6)',
                    border: '1px solid rgba(255,255,255,0.06)',
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
                        color: '#fff',
                      }}>
                        {item.company}
                      </span>
                    </div>
                    <div style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#A0A8B8',
                      marginBottom: '12px',
                    }}>
                      {item.role}
                    </div>
                    <p style={{ color: '#A0A8B8', fontSize: '15px', lineHeight: 1.7, marginBottom: '14px' }}>
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

      {/* Values */}
      <section style={{ background: '#0A0F1E', padding: '100px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="label-text">Core Values</span>
              <h2 className="display-lg" style={{ marginTop: '12px', color: '#fff' }}>
                The BraveHeart<br />
                <span style={{ color: '#D4A017' }}>Way of Thinking</span>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div style={{
                  background: 'rgba(28,35,51,0.5)',
                  border: '1px solid rgba(255,255,255,0.06)',
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
                    color: '#fff',
                    marginBottom: '12px',
                  }}>
                    {v.title}
                  </h3>
                  <p style={{ color: '#A0A8B8', fontSize: '14px', lineHeight: 1.7 }}>{v.desc}</p>
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
              Ready to Work With Sekayi?
            </h2>
            <p style={{ color: '#A0A8B8', fontSize: '18px', marginBottom: '36px', maxWidth: '520px', margin: '0 auto 36px' }}>
              Book a free 30-minute strategy call and walk away with clarity on exactly how to build your revenue engine.
            </p>
            <Link to="/contact" className="btn btn-gold btn-lg">Book Your Free Strategy Call</Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
