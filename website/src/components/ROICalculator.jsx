import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

export default function ROICalculator() {
  const [teamSize, setTeamSize] = useState(10)
  const [avgDeal, setAvgDeal] = useState(15000)
  const [currentClose, setCurrentClose] = useState(25)
  const [leadsPerMonth, setLeadsPerMonth] = useState(50)

  const results = useMemo(() => {
    // BraveHeart typically improves close rate by 8-15% and lead volume by 25-40%
    const improvedClose = Math.min(currentClose + 12, 65)
    const improvedLeads = Math.round(leadsPerMonth * 1.32)
    const currentMonthlyDeals = Math.round((leadsPerMonth * currentClose) / 100)
    const improvedMonthlyDeals = Math.round((improvedLeads * improvedClose) / 100)
    const currentMonthlyRevenue = currentMonthlyDeals * avgDeal
    const improvedMonthlyRevenue = improvedMonthlyDeals * avgDeal
    const monthlyLift = improvedMonthlyRevenue - currentMonthlyRevenue
    const annualLift = monthlyLift * 12
    return {
      currentMonthlyRevenue,
      improvedMonthlyRevenue,
      monthlyLift,
      annualLift,
      improvedClose,
      improvedLeads,
      currentMonthlyDeals,
      improvedMonthlyDeals,
    }
  }, [teamSize, avgDeal, currentClose, leadsPerMonth])

  const fmt = (n) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

  return (
    <div className="roi-outer" style={{
      background: 'linear-gradient(135deg, #1C2333, #252D40)',
      border: '1px solid rgba(212,160,23,0.2)',
      borderRadius: '12px',
      padding: '48px',
      maxWidth: '860px',
      margin: '0 auto',
    }}>
      <style>{`
        .roi-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
        .roi-slider-group { margin-bottom: 28px; }
        .roi-label {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          font-family: 'DM Sans', sans-serif;
        }
        .roi-label-text { font-size: 14px; font-weight: 600; color: #A0A8B8; text-transform: uppercase; letter-spacing: 0.08em; }
        .roi-label-val { font-size: 16px; font-weight: 700; color: #D4A017; }
        .roi-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 4px;
          background: linear-gradient(to right, #D4A017 0%, #D4A017 var(--val), rgba(255,255,255,0.1) var(--val), rgba(255,255,255,0.1) 100%);
          border-radius: 100px;
          outline: none;
        }
        .roi-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          background: #D4A017;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(212,160,23,0.4);
        }
        .roi-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #D4A017;
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
        .roi-result-card {
          background: rgba(212,160,23,0.08);
          border: 1px solid rgba(212,160,23,0.2);
          border-radius: 8px;
          padding: 20px 24px;
          margin-bottom: 16px;
        }
        .roi-result-label { font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #A0A8B8; margin-bottom: 6px; }
        .roi-result-value { font-family: 'Bebas Neue', sans-serif; font-size: 36px; letter-spacing: 0.03em; color: #D4A017; line-height: 1; }
        .roi-result-sub { font-size: 13px; color: #6B7280; margin-top: 4px; }
        .roi-highlight {
          background: linear-gradient(135deg, rgba(212,160,23,0.2), rgba(212,160,23,0.08));
          border: 1px solid rgba(212,160,23,0.35);
          border-radius: 10px;
          padding: 28px 24px;
          text-align: center;
          margin-top: 8px;
        }
        .roi-highlight-label { font-size: 13px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #A0A8B8; margin-bottom: 8px; }
        .roi-highlight-value { font-family: 'Bebas Neue', sans-serif; font-size: clamp(40px, 5vw, 56px); color: #D4A017; letter-spacing: 0.03em; line-height: 1; }
        .roi-highlight-sub { font-size: 14px; color: #fff; margin-top: 8px; font-weight: 500; }
        .roi-compare { display: flex; gap: 12px; margin-bottom: 12px; }
        .roi-compare-item { flex: 1; background: rgba(255,255,255,0.04); border-radius: 6px; padding: 14px 16px; }
        .roi-compare-label { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #6B7280; margin-bottom: 4px; }
        .roi-compare-val { font-family: 'Bebas Neue', sans-serif; font-size: 24px; color: #fff; letter-spacing: 0.02em; }
        @media (max-width: 768px) { .roi-grid { grid-template-columns: 1fr; gap: 32px; } }
        @media (max-width: 600px) { .roi-outer { padding: 28px 20px !important; } }
      `}</style>

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <span className="label-text">ROI Calculator</span>
        <h3 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: 'clamp(32px, 4vw, 48px)',
          letterSpacing: '0.05em',
          color: '#fff',
          marginTop: '12px',
        }}>
          See Your Revenue Potential
        </h3>
        <p style={{ color: '#A0A8B8', fontSize: '15px', marginTop: '8px' }}>
          Adjust the sliders to model your projected revenue lift with BraveHeart systems.
        </p>
      </div>

      <div className="roi-grid">
        {/* Inputs */}
        <div>
          <div className="roi-slider-group">
            <div className="roi-label">
              <span className="roi-label-text">Sales Team Size</span>
              <span className="roi-label-val">{teamSize} reps</span>
            </div>
            <input
              type="range" min={1} max={100} value={teamSize}
              style={{ '--val': `${((teamSize - 1) / 99) * 100}%` }}
              className="roi-slider"
              onChange={e => setTeamSize(Number(e.target.value))}
            />
          </div>

          <div className="roi-slider-group">
            <div className="roi-label">
              <span className="roi-label-text">Average Deal Size</span>
              <span className="roi-label-val">{fmt(avgDeal)}</span>
            </div>
            <input
              type="range" min={5000} max={80000} step={1000} value={avgDeal}
              style={{ '--val': `${((avgDeal - 5000) / 75000) * 100}%` }}
              className="roi-slider"
              onChange={e => setAvgDeal(Number(e.target.value))}
            />
          </div>

          <div className="roi-slider-group">
            <div className="roi-label">
              <span className="roi-label-text">Current Close Rate</span>
              <span className="roi-label-val">{currentClose}%</span>
            </div>
            <input
              type="range" min={5} max={55} value={currentClose}
              style={{ '--val': `${((currentClose - 5) / 50) * 100}%` }}
              className="roi-slider"
              onChange={e => setCurrentClose(Number(e.target.value))}
            />
          </div>

          <div className="roi-slider-group">
            <div className="roi-label">
              <span className="roi-label-text">Leads Per Month</span>
              <span className="roi-label-val">{leadsPerMonth} leads</span>
            </div>
            <input
              type="range" min={10} max={500} step={5} value={leadsPerMonth}
              style={{ '--val': `${((leadsPerMonth - 10) / 490) * 100}%` }}
              className="roi-slider"
              onChange={e => setLeadsPerMonth(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Results */}
        <div>
          <div className="roi-compare" style={{ marginBottom: '16px' }}>
            <div className="roi-compare-item">
              <div className="roi-compare-label">Current Monthly</div>
              <div className="roi-compare-val" style={{ color: '#A0A8B8', fontSize: '20px' }}>{fmt(results.currentMonthlyRevenue)}</div>
            </div>
            <div className="roi-compare-item" style={{ background: 'rgba(212,160,23,0.08)', border: '1px solid rgba(212,160,23,0.15)' }}>
              <div className="roi-compare-label" style={{ color: '#D4A017' }}>Projected Monthly</div>
              <div className="roi-compare-val" style={{ color: '#D4A017', fontSize: '20px' }}>{fmt(results.improvedMonthlyRevenue)}</div>
            </div>
          </div>

          <div className="roi-result-card">
            <div className="roi-result-label">Monthly Revenue Lift</div>
            <div className="roi-result-value">+{fmt(results.monthlyLift)}</div>
            <div className="roi-result-sub">{results.currentMonthlyDeals} → {results.improvedMonthlyDeals} deals/month</div>
          </div>

          <div className="roi-highlight">
            <div className="roi-highlight-label">Projected Annual Uplift</div>
            <div className="roi-highlight-value">+{fmt(results.annualLift)}</div>
            <div className="roi-highlight-sub">Estimated additional annual revenue with BraveHeart systems</div>
          </div>

          <div style={{ marginTop: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', padding: '16px', fontSize: '12px', color: '#6B7280', lineHeight: 1.6 }}>
            * Projections based on typical client outcomes: +12% close rate improvement, +32% lead volume increase. Results vary by market, team, and execution.
          </div>

          <Link
            to="/contact"
            style={{
              display: 'block',
              background: '#D4A017',
              color: '#0A0F1E',
              fontWeight: 700,
              fontSize: '16px',
              padding: '16px 32px',
              borderRadius: '4px',
              textDecoration: 'none',
              textAlign: 'center',
              marginTop: '20px',
              transition: 'all 0.3s',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={e => { e.target.style.background = '#E8B930'; e.target.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.target.style.background = '#D4A017'; e.target.style.transform = 'translateY(0)' }}
          >
            Get My Custom Growth Plan
          </Link>
        </div>
      </div>
    </div>
  )
}
