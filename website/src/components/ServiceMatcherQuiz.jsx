import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const questions = [
  {
    id: 'challenge',
    question: "What's your #1 challenge right now?",
    options: [
      { value: 'leads', label: 'Not enough leads coming in', icon: '🎯' },
      { value: 'team', label: 'Team performance & closing rates', icon: '📈' },
      { value: 'scale', label: 'Scaling & building systems', icon: '🏗️' },
    ],
  },
  {
    id: 'size',
    question: 'How large is your sales team?',
    options: [
      { value: 'small', label: '1–10 reps', icon: '👤' },
      { value: 'mid', label: '11–30 reps', icon: '👥' },
      { value: 'large', label: '31+ reps', icon: '🏢' },
    ],
  },
  {
    id: 'timeline',
    question: 'When do you want to see results?',
    options: [
      { value: 'now', label: 'ASAP — we need help now', icon: '🚀' },
      { value: 'mid', label: 'In the next 3–6 months', icon: '📅' },
      { value: 'long', label: 'Building for long-term growth', icon: '🌱' },
    ],
  },
]

function getRecommendation(answers) {
  const { challenge, size, timeline } = answers

  if (challenge === 'leads') {
    if (timeline === 'now') return {
      tier: 'BRONZE',
      package: 'Outbound Sales Deployment',
      price: '$7,500',
      description: 'We deploy proven outbound sales teams and systems immediately so you have qualified leads in your pipeline within 30 days.',
      bullets: ['Rapid deployment', 'Pre-qualified prospect leads', 'Full outreach scripts & tracking'],
    }
    return {
      tier: 'SILVER',
      package: 'Lead Generation System Build',
      price: '$15,000–$25,000',
      description: 'We build you a comprehensive outbound lead generation infrastructure — direct outreach, events, and digital — tailored to your market.',
      bullets: ['Custom lead gen playbook', 'Event & conference strategy', 'Digital + direct outreach integration'],
    }
  }

  if (challenge === 'team') {
    if (size === 'small') return {
      tier: 'BRONZE',
      package: 'Performance Coaching Program',
      price: '$7,500',
      description: 'Intensive 90-day coaching program for your sales reps to maximize close rates and build consistent high-performance habits.',
      bullets: ['Weekly group coaching calls', 'Script refinement', 'KPI tracking & accountability'],
    }
    return {
      tier: 'SILVER',
      package: 'Sales & Marketing Consulting',
      price: '$15,000–$25,000',
      description: 'A comprehensive consulting engagement to audit, rebuild, and elevate your entire sales and marketing operation.',
      bullets: ['Full sales process audit', 'Training program design', 'Manager development'],
    }
  }

  if (challenge === 'scale') {
    if (size === 'large' || timeline === 'long') return {
      tier: 'GOLD',
      package: 'Fractional Sales Director / Sales Agency',
      price: '$50,000–$100,000',
      description: 'Sekayi embeds as your fractional Sales Director or we run your entire outbound sales operation as your outsourced agency — at enterprise scale.',
      bullets: ['Executive-level leadership', 'Full team oversight', 'Recruitment + systems + culture'],
    }
    return {
      tier: 'SILVER',
      package: 'Recruiting & Staffing + Training Academy',
      price: '$15,000–$25,000',
      description: 'We recruit top-tier sales talent and plug them directly into our proven training academy so you scale without sacrificing quality.',
      bullets: ['Talent sourcing & vetting', 'Onboarding system', 'Academy access for full team'],
    }
  }

  return {
    tier: 'SILVER',
    package: 'Sales & Marketing Consulting',
    price: '$15,000–$25,000',
    description: 'A comprehensive consulting engagement to audit, rebuild, and elevate your sales and marketing operation.',
    bullets: ['Full audit', 'Custom growth roadmap', '90-day execution support'],
  }
}

const tierColors = {
  BRONZE: { bg: 'rgba(205,127,50,0.1)', border: 'rgba(205,127,50,0.3)', text: '#9A5E10' },
  SILVER: { bg: 'rgba(100,100,100,0.08)', border: 'rgba(100,100,100,0.2)', text: '#5C5C5C' },
  GOLD: { bg: 'rgba(184,134,11,0.1)', border: 'rgba(184,134,11,0.35)', text: '#B8860B' },
}

export default function ServiceMatcherQuiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)

  const handleAnswer = (questionId, value) => {
    const newAnswers = { ...answers, [questionId]: value }
    setAnswers(newAnswers)

    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      setResult(getRecommendation(newAnswers))
    }
  }

  const reset = () => {
    setStep(0)
    setAnswers({})
    setResult(null)
  }

  const q = questions[step]

  return (
    <div className="quiz-inner" style={{
      background: '#FFFEF8',
      border: '1px solid rgba(184,134,11,0.2)',
      borderRadius: '12px',
      padding: '48px',
      maxWidth: '680px',
      margin: '0 auto',
    }}>
      <style>{`
        .quiz-option {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(0,0,0,0.03);
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 8px;
          padding: 18px 24px;
          width: 100%;
          color: #0A0A0A;
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.25s ease;
          text-align: left;
        }
        .quiz-option:hover {
          background: rgba(184,134,11,0.08);
          border-color: rgba(184,134,11,0.35);
          transform: translateX(4px);
        }
        .quiz-option-icon {
          font-size: 22px;
          flex-shrink: 0;
        }
        .quiz-result-bullet {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #5C5C5C;
          font-size: 15px;
          padding: 8px 0;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .quiz-result-bullet::before {
          content: '';
          width: 6px;
          height: 6px;
          background: #B8860B;
          border-radius: 50%;
          flex-shrink: 0;
        }
        @media (max-width: 600px) {
          .quiz-inner { padding: 28px 20px !important; }
          .quiz-option { padding: 16px 18px; font-size: 15px; }
        }
      `}</style>

      {/* Progress */}
      {!result && (
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: '#5C5C5C', fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Question {step + 1} of {questions.length}
            </span>
            <span style={{ color: '#B8860B', fontSize: '13px', fontWeight: 600 }}>
              {Math.round(((step) / questions.length) * 100)}% complete
            </span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.08)', borderRadius: '100px', height: '4px' }}>
            <div style={{
              background: '#B8860B',
              borderRadius: '100px',
              height: '100%',
              width: `${((step) / questions.length) * 100}%`,
              transition: 'width 0.4s ease',
            }} />
          </div>
        </div>
      )}

      {!result ? (
        <>
          <h3 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(22px, 3vw, 28px)',
            fontWeight: 700,
            color: '#0A0A0A',
            marginBottom: '28px',
            lineHeight: 1.3,
          }}>
            {q.question}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {q.options.map((opt) => (
              <button
                key={opt.value}
                className="quiz-option"
                onClick={() => handleAnswer(q.id, opt.value)}
              >
                <span className="quiz-option-icon">{opt.icon}</span>
                <span>{opt.label}</span>
              </button>
            ))}
          </div>
        </>
      ) : (
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: tierColors[result.tier].bg,
            border: `1px solid ${tierColors[result.tier].border}`,
            borderRadius: '100px',
            padding: '6px 16px',
            marginBottom: '20px',
          }}>
            <span style={{ color: tierColors[result.tier].text, fontWeight: 700, fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              {result.tier} Package Recommended
            </span>
          </div>

          <h3 style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(28px, 4vw, 40px)',
            letterSpacing: '0.05em',
            color: '#0A0A0A',
            marginBottom: '8px',
          }}>
            {result.package}
          </h3>

          <div style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '24px',
            color: '#B8860B',
            marginBottom: '20px',
            letterSpacing: '0.05em',
          }}>
            Starting at {result.price}
          </div>

          <p style={{ color: '#5C5C5C', fontSize: '15px', lineHeight: 1.7, marginBottom: '24px' }}>
            {result.description}
          </p>

          <div style={{ marginBottom: '32px' }}>
            {result.bullets.map((b, i) => (
              <div key={i} className="quiz-result-bullet">{b}</div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="https://calendly.com/braveheartway/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#B8860B',
                color: '#fff',
                fontWeight: 700,
                fontSize: '15px',
                padding: '14px 28px',
                borderRadius: '4px',
                textDecoration: 'none',
                transition: 'all 0.3s',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={e => { e.target.style.background = '#9A7009'; e.target.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.target.style.background = '#B8860B'; e.target.style.transform = 'translateY(0)' }}
            >
              Book a Free Strategy Call
            </a>
            <button
              onClick={reset}
              style={{
                background: 'transparent',
                color: '#5C5C5C',
                border: '1px solid rgba(0,0,0,0.15)',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                padding: '14px 24px',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.target.style.borderColor = 'rgba(0,0,0,0.3)'; e.target.style.color = '#0A0A0A' }}
              onMouseLeave={e => { e.target.style.borderColor = 'rgba(0,0,0,0.15)'; e.target.style.color = '#5C5C5C' }}
            >
              Retake Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
