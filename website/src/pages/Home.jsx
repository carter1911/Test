import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import StatCounter from '../components/StatCounter'
import ServiceMatcherQuiz from '../components/ServiceMatcherQuiz'
import ROICalculator from '../components/ROICalculator'
import ScrollReveal from '../components/ScrollReveal'
import LogoWatermark from '../components/LogoWatermark'
import VideoCarousel from '../components/VideoCarousel'

const stats = [
  { end: 150, prefix: '$', suffix: 'M+', label: 'Revenue Influenced', sublabel: 'Across all client partnerships' },
  { end: 18, suffix: '+', label: 'Leaders Developed', sublabel: 'Sales directors & team leads' },
  { end: 100, suffix: '+', label: 'Bootcamps Delivered', sublabel: 'Nationwide sales training' },
  { end: 10, suffix: '+', label: 'Years in Industry', sublabel: 'Exterior remodeling expertise' },
]

const painPoints = [
  { icon: '📉', title: 'Leads dry up after door knock season', desc: 'No consistent pipeline strategy beyond canvassing, leaving revenue unpredictable month to month.' },
  { icon: '🔄', title: 'High turnover kills momentum', desc: 'Constant recruiting cycles drain resources and reset team culture, making scale feel impossible.' },
  { icon: '📊', title: 'No sales tracking or accountability', desc: 'Without real-time KPI visibility, managers can\'t coach effectively and reps drift off target.' },
  { icon: '🎯', title: 'Presentations don\'t convert', desc: 'Low in-home close rates signal a systemic script and objection-handling problem, not just talent.' },
  { icon: '🏠', title: 'Home shows underperform', desc: 'Booth traffic doesn\'t convert because the follow-up system and qualification process are missing.' },
  { icon: '📱', title: 'Marketing and sales don\'t align', desc: 'Leads from digital ads don\'t match what the sales team can close, creating friction and waste.' },
]

const services = [
  { icon: '🎯', title: 'Lead Generation', desc: 'Outbound pipeline systems that fill your calendar with qualified homeowners.' },
  { icon: '👥', title: 'Recruiting & Staffing', desc: 'We source, screen, and onboard elite sales talent faster than traditional hiring.' },
  { icon: '📈', title: 'Sales & Marketing Consulting', desc: 'End-to-end audit and rebuild of your entire revenue operation.' },
  { icon: '🏠', title: 'Home Show Management', desc: 'Turn trade show floors into your most profitable lead source.' },
  { icon: '🚀', title: 'Done-For-You Canvassing', desc: 'Deployed canvassing teams driving qualified leads to your pipeline.' },
  { icon: '🏆', title: 'Performance Coaching', desc: '1-on-1 and group coaching to maximize individual and team output.' },
  { icon: '🎓', title: 'Online Training Academy', desc: '18 modules of proven sales, mindset, and canvassing mastery.' },
  { icon: '💼', title: 'Fractional Sales Director', desc: 'Executive-level sales leadership without the full-time cost.' },
  { icon: '🏢', title: 'Sales Agency', desc: 'We run your entire outbound operation as your outsourced revenue team.' },
]

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const words = hero.querySelectorAll('.hero-word')
    words.forEach((word, i) => {
      word.style.animationDelay = `${i * 0.12}s`
    })
  }, [])

  return (
    <div>
      {/* ============ HERO ============ */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #FAF7F2 0%, #F2EAD8 40%, #EDE3CF 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 24px 80px',
      }}>
        <style>{`
          .hero-bg-glow {
            position: absolute;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(184,134,11,0.06) 0%, transparent 70%);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
          }
          .hero-bg-glow-2 {
            position: absolute;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(184,134,11,0.04) 0%, transparent 70%);
            top: 20%;
            right: 10%;
            pointer-events: none;
          }
          .hero-word {
            display: inline-block;
            opacity: 0;
            animation: heroTextIn 0.8s ease forwards;
          }
          @keyframes heroTextIn {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(184,134,11,0.1);
            border: 1px solid rgba(184,134,11,0.3);
            border-radius: 100px;
            padding: 8px 20px;
            margin-bottom: 32px;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #B8860B;
            opacity: 0;
            animation: fadeIn 0.8s ease 0.2s forwards;
          }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          .hero-sub {
            opacity: 0;
            animation: fadeInUp 0.8s ease 1.1s forwards;
          }
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
          .hero-ctas {
            opacity: 0;
            animation: fadeInUp 0.8s ease 1.3s forwards;
          }
          .hero-scroll {
            position: absolute;
            bottom: 32px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            opacity: 0;
            animation: fadeIn 1s ease 1.8s forwards;
          }
          .hero-scroll-line {
            width: 1px;
            height: 48px;
            background: linear-gradient(to bottom, rgba(184,134,11,0.6), transparent);
            animation: scrollLine 1.5s ease-in-out infinite;
          }
          @keyframes scrollLine {
            0%, 100% { transform: scaleY(1); opacity: 0.6; }
            50% { transform: scaleY(1.2); opacity: 1; }
          }
          .service-tile {
            background: #FFFEF8;
            border: 1px solid rgba(0,0,0,0.07);
            border-radius: 8px;
            padding: 28px 24px;
            transition: all 0.3s ease;
            cursor: pointer;
            text-decoration: none;
            display: block;
          }
          .service-tile:hover {
            background: #fff;
            border-color: rgba(184,134,11,0.3);
            transform: translateY(-4px);
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          }
          .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          .pain-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
          @media (max-width: 1024px) {
            .services-grid { grid-template-columns: repeat(2, 1fr); }
            .pain-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 640px) {
            .services-grid { grid-template-columns: 1fr; }
            .pain-grid { grid-template-columns: 1fr; }
          }
        `}</style>

        <div className="hero-bg-glow" />
        <div className="hero-bg-glow-2" />
        <LogoWatermark position="center" size={640} opacity={0.038} delay={900} />

        <div style={{ maxWidth: '1000px', width: '100%', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="hero-badge">
            <span>⚡</span> BraveHeart Way · BraveHeart Consulting LLC
          </div>

          <h1 ref={heroRef} style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(52px, 9vw, 120px)',
            lineHeight: 0.95,
            letterSpacing: '0.02em',
            color: '#0A0A0A',
            marginBottom: '32px',
          }}>
            <span className="hero-word">WE&nbsp;</span>
            <span className="hero-word">DON'T&nbsp;</span>
            <span className="hero-word">JUST&nbsp;</span>
            <span style={{ color: '#B8860B' }}>
              <span className="hero-word">TRAIN&nbsp;</span>
              <span className="hero-word">TEAMS.</span>
            </span>
            <br />
            <span className="hero-word">WE&nbsp;</span>
            <span className="hero-word">BUILD&nbsp;</span>
            <span style={{ color: '#B8860B' }}>
              <span className="hero-word">REVENUE</span>
            </span>
            <br />
            <span className="hero-word">ENGINES.</span>
          </h1>

          <p className="hero-sub" style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(17px, 2.2vw, 22px)',
            color: '#5C5C5C',
            maxWidth: '700px',
            margin: '0 auto 40px',
            lineHeight: 1.7,
          }}>
            I help exterior remodeling companies build scalable outbound sales and marketing systems
            — leveraging 10+ years of proven experience at Power Home Remodeling, Amazon, and Home Genius Exteriors.
          </p>

          <div className="hero-ctas" style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <Link to="/contact" className="btn btn-gold btn-lg">
              Book Your Free Strategy Call
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/services" className="btn btn-outline btn-lg">
              Explore Services
            </Link>
          </div>
        </div>

        <div className="hero-scroll">
          <span style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888888', fontWeight: 600 }}>Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section style={{ background: '#F2EAD8', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <LogoWatermark position="right" size={500} opacity={0.042} delay={300} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span className="label-text">Proven Track Record</span>
              <h2 className="display-lg" style={{ marginTop: '12px', color: '#0A0A0A' }}>
                Numbers That Drive<br />
                <span style={{ color: '#B8860B' }}>Decisions</span>
              </h2>
            </div>
            <StatCounter stats={stats} />
          </ScrollReveal>
        </div>
      </section>

      {/* ============ PAIN POINTS ============ */}
      <section style={{ background: '#FAF7F2', padding: '100px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="label-text">Sound Familiar?</span>
              <h2 className="display-lg" style={{ marginTop: '12px', color: '#0A0A0A' }}>
                Most Exterior Remodelers<br />
                <span style={{ color: '#B8860B' }}>Struggle With This</span>
              </h2>
              <p style={{ color: '#5C5C5C', fontSize: '18px', maxWidth: '620px', margin: '20px auto 0', lineHeight: 1.7 }}>
                After training thousands of reps across the country, these are the six core breakdowns that
                hold most remodeling companies below their revenue potential.
              </p>
            </div>
          </ScrollReveal>

          <div className="pain-grid">
            {painPoints.map((pt, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div style={{
                  background: '#FFFEF8',
                  border: '1px solid rgba(0,0,0,0.07)',
                  borderRadius: '8px',
                  padding: '32px 28px',
                  transition: 'all 0.3s',
                  height: '100%',
                }}>
                  <div style={{ fontSize: '36px', marginBottom: '16px' }}>{pt.icon}</div>
                  <h3 style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#0A0A0A',
                    marginBottom: '10px',
                    lineHeight: 1.3,
                  }}>
                    {pt.title}
                  </h3>
                  <p style={{ color: '#5C5C5C', fontSize: '14px', lineHeight: 1.7 }}>{pt.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div style={{
              textAlign: 'center',
              marginTop: '60px',
              padding: '48px',
              background: 'linear-gradient(135deg, rgba(184,134,11,0.07), rgba(184,134,11,0.03))',
              border: '1px solid rgba(184,134,11,0.2)',
              borderRadius: '12px',
            }}>
              <p style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontStyle: 'italic',
                color: '#0A0A0A',
                maxWidth: '700px',
                margin: '0 auto 28px',
                lineHeight: 1.5,
              }}>
                "I've sat in the seat. I've done it at scale. Not just coached it."
              </p>
              <p style={{ color: '#B8860B', fontWeight: 600, fontSize: '15px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                — Sekayi Brown, Founder · BraveHeart Consulting LLC
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section style={{ background: '#F2EAD8', padding: '100px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="label-text">What We Do</span>
              <h2 className="display-lg" style={{ marginTop: '12px', color: '#0A0A0A' }}>
                9 Ways We Can<br />
                <span style={{ color: '#B8860B' }}>Build Your Revenue Engine</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="services-grid">
            {services.map((s, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <Link to="/services" className="service-tile">
                  <div style={{ fontSize: '32px', marginBottom: '14px' }}>{s.icon}</div>
                  <h3 style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '17px',
                    fontWeight: 700,
                    color: '#0A0A0A',
                    marginBottom: '8px',
                  }}>
                    {s.title}
                  </h3>
                  <p style={{ color: '#5C5C5C', fontSize: '14px', lineHeight: 1.6 }}>{s.desc}</p>
                  <div style={{ marginTop: '16px', color: '#B8860B', fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div style={{ textAlign: 'center', marginTop: '56px' }}>
              <Link to="/services" className="btn btn-gold btn-lg">
                View All Services & Pricing
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ SERVICE MATCHER ============ */}
      <section style={{ background: '#FAF7F2', padding: '100px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="label-text">Not Sure Where to Start?</span>
              <h2 className="display-lg" style={{ marginTop: '12px', color: '#0A0A0A' }}>
                Find Your Perfect<br />
                <span style={{ color: '#B8860B' }}>BraveHeart Package</span>
              </h2>
              <p style={{ color: '#5C5C5C', fontSize: '18px', maxWidth: '560px', margin: '20px auto 0' }}>
                Answer 3 questions and we'll recommend the exact engagement that fits your team, budget, and goals.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <ServiceMatcherQuiz />
          </ScrollReveal>
        </div>
      </section>

      {/* ============ VIDEO CAROUSEL ============ */}
      <section style={{ background: '#EDE3CF', padding: '100px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="label-text">See It In Action</span>
              <h2 className="display-lg" style={{ marginTop: '12px', color: '#0A0A0A' }}>
                The BraveHeart Way<br />
                <span style={{ color: '#B8860B' }}>In Action</span>
              </h2>
              <p style={{ color: '#5C5C5C', fontSize: '18px', maxWidth: '580px', margin: '20px auto 0', lineHeight: 1.7 }}>
                Watch how we've helped exterior remodeling companies build scalable revenue engines from the ground up.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 24px' }}>
              <VideoCarousel videos={[
                {
                  id: 'JHuDXhZNcTY',
                  title: 'The BraveHeart Way — Building Revenue Engines for Exterior Remodelers',
                  label: 'BraveHeart Way',
                },
                // Add more videos from https://www.youtube.com/@thebraveheartway3934
                // Example: { id: 'YOUR_VIDEO_ID', title: 'Video Title', label: 'Short Label' },
              ]} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <a
                href="https://www.youtube.com/@thebraveheartway3934"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
                style={{ marginRight: '16px' }}
              >
                View All Videos
              </a>
              <Link to="/results" className="btn btn-gold btn-lg">
                See Client Results
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ ROI CALCULATOR ============ */}
      <section style={{ background: '#F2EAD8', padding: '100px 0' }}>
        <div className="container">
          <ScrollReveal>
            <ROICalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* ============ BOTTOM CTA ============ */}
      <section style={{
        background: 'linear-gradient(135deg, #EDE3CF, #E8DCC8)',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(184,134,11,0.07) 0%, transparent 70%)',
        }} />
        <LogoWatermark position="center" size={720} opacity={0.05} delay={200} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <span className="label-text">Ready to Scale?</span>
            <h2 style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(40px, 6vw, 80px)',
              letterSpacing: '0.03em',
              color: '#0A0A0A',
              marginTop: '16px',
              marginBottom: '24px',
              lineHeight: 1,
            }}>
              Let's Build Your<br />
              <span style={{ color: '#B8860B' }}>Revenue Engine Together</span>
            </h2>
            <p style={{
              color: '#5C5C5C',
              fontSize: 'clamp(16px, 2vw, 20px)',
              maxWidth: '580px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}>
              30 minutes with Sekayi. Zero fluff. Walk away with a clear picture of exactly
              what's holding your revenue back and how to fix it.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link to="/contact" className="btn btn-gold btn-lg">
                Book Your Free Strategy Call
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <a href="tel:8435353251" style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '22px',
                letterSpacing: '0.05em',
                color: '#B8860B',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'color 0.2s',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.14 12 19.79 19.79 0 011.1 3.4 2 2 0 013.08 1.22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                843-535-3251
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
