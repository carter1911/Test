/**
 * Solution Recommendation Engine
 */

import {
  AnalysisInput,
  RevenueLeakCalculation,
  PainPoint,
  Recommendation,
  Solution
} from './types';

/**
 * AI-Powered Call Answering Solution
 */
const AI_RECEPTIONIST_SOLUTION: Solution = {
  name: 'AI Receptionist & Call Handler',
  description: 'AI-powered phone system that answers calls 24/7, qualifies leads, and books appointments directly into your calendar',
  targetPainPoints: ['High Missed Call Rate', 'Missed Calls During Treatments', 'After-Hours Missed Calls', 'Missed Reservation Calls'],
  estimatedMonthlyCost: 497,
  projectedOutcome: {
    revenueRecovered: 0, // Will be calculated
    timeSaved: '20-30 hours/week of phone time',
    capacityUnlocked: '100% call answer rate, 24/7 availability'
  }
};

/**
 * Automated Follow-Up System
 */
const AUTO_FOLLOWUP_SOLUTION: Solution = {
  name: 'Automated Lead Follow-Up System',
  description: 'Multi-channel follow-up sequences via SMS, email, and voicemail drops that nurture leads systematically',
  targetPainPoints: ['Insufficient Follow-Up', 'Lead Drop-off After First Contact', 'Slow Response Time'],
  estimatedMonthlyCost: 297,
  projectedOutcome: {
    revenueRecovered: 0,
    timeSaved: '15-25 hours/week of manual follow-up',
    capacityUnlocked: 'Systematic 6-8 touch follow-up for every lead'
  }
};

/**
 * Smart Reminder & Confirmation System
 */
const REMINDER_SOLUTION: Solution = {
  name: 'Smart Reminder & Confirmation System',
  description: 'Automated appointment confirmations, reminders, and 2-way SMS to reduce no-shows by 60-80%',
  targetPainPoints: ['High No-Show Rate', 'No Consultation Reminders', 'No Automated Confirmations', 'Trial Class No-Shows'],
  estimatedMonthlyCost: 197,
  projectedOutcome: {
    revenueRecovered: 0,
    timeSaved: '10-15 hours/week of manual confirmations',
    capacityUnlocked: '60-80% reduction in no-shows'
  }
};

/**
 * AI Lead Qualification System
 */
const LEAD_QUALIFICATION_SOLUTION: Solution = {
  name: 'AI Lead Qualification & Routing',
  description: 'Intelligent lead scoring and routing that prioritizes high-value prospects and filters out time-wasters',
  targetPainPoints: ['Poor Lead Qualification', 'Intake Bottleneck', 'Slow Response Time'],
  estimatedMonthlyCost: 397,
  projectedOutcome: {
    revenueRecovered: 0,
    timeSaved: '15-20 hours/week of unqualified lead handling',
    capacityUnlocked: 'Focus only on leads with 70%+ close probability'
  }
};

/**
 * Capacity Optimization Platform
 */
const CAPACITY_SOLUTION: Solution = {
  name: 'Dynamic Capacity Management',
  description: 'AI-optimized scheduling that maximizes utilization, reduces gaps, and handles overflow demand',
  targetPainPoints: ['Capacity Bottleneck', 'Peak-Hour Chaos', 'Dispatch Inefficiency', 'Manual Booking Errors'],
  estimatedMonthlyCost: 597,
  projectedOutcome: {
    revenueRecovered: 0,
    timeSaved: '10-20 hours/week of scheduling overhead',
    capacityUnlocked: '25-40% increase in bookings without hiring'
  }
};

/**
 * Generate recommendations based on pain points and revenue leaks
 */
export function generateRecommendations(
  input: AnalysisInput,
  painPoints: PainPoint[],
  revenueLeaks: RevenueLeakCalculation[]
): Recommendation[] {
  const recommendations: Recommendation[] = [];

  // Sort pain points by triggered + automation score
  const prioritizedPainPoints = painPoints
    .filter(pp => pp.triggered)
    .sort((a, b) => b.automationOpportunityScore - a.automationOpportunityScore);

  // Missed calls → AI Receptionist
  const missedCallsLeak = revenueLeaks.find(r => r.type === 'Missed Calls');
  if (missedCallsLeak && missedCallsLeak.monthlyLoss > 0) {
    const solution = { ...AI_RECEPTIONIST_SOLUTION };
    solution.projectedOutcome.revenueRecovered = missedCallsLeak.monthlyLoss * 0.8; // 80% recovery rate

    recommendations.push({
      problemIdentified: `You're losing ${Math.round(input.leadHandling.missedCallsPercentage)}% of calls because staff can't answer the phone`,
      financialImpact: `This is costing you ~$${Math.round(missedCallsLeak.monthlyLoss).toLocaleString()} per month, or $${Math.round(missedCallsLeak.annualizedLoss).toLocaleString()} annually`,
      recommendedSolution: solution,
      nextStepCTA: {
        type: 'demo',
        text: 'See AI Receptionist Demo',
        url: 'https://your-demo-link.com/ai-receptionist'
      },
      priority: 1
    });
  }

  // No-shows → Reminder System
  const noShowLeak = revenueLeaks.find(r => r.type === 'No-Shows');
  if (noShowLeak && noShowLeak.monthlyLoss > 0) {
    const solution = { ...REMINDER_SOLUTION };
    solution.projectedOutcome.revenueRecovered = noShowLeak.monthlyLoss * 0.7; // 70% recovery rate

    recommendations.push({
      problemIdentified: `${100 - input.leadHandling.showRatePercentage}% no-show rate is wasting your team's time and blocking revenue`,
      financialImpact: `This is costing you ~$${Math.round(noShowLeak.monthlyLoss).toLocaleString()} per month, or $${Math.round(noShowLeak.annualizedLoss).toLocaleString()} annually`,
      recommendedSolution: solution,
      nextStepCTA: {
        type: 'trial',
        text: 'Start Free Trial',
        url: 'https://your-demo-link.com/reminder-system'
      },
      priority: 2
    });
  }

  // Slow follow-up → Auto Follow-Up
  const slowFollowUpLeak = revenueLeaks.find(r => r.type === 'Slow Follow-Up');
  if (slowFollowUpLeak && slowFollowUpLeak.monthlyLoss > 0) {
    const solution = { ...AUTO_FOLLOWUP_SOLUTION };
    solution.projectedOutcome.revenueRecovered = slowFollowUpLeak.monthlyLoss * 0.6; // 60% recovery

    recommendations.push({
      problemIdentified: `Average response time of ${input.leadHandling.avgResponseTimeMinutes} minutes is killing your close rate`,
      financialImpact: `This is costing you ~$${Math.round(slowFollowUpLeak.monthlyLoss).toLocaleString()} per month, or $${Math.round(slowFollowUpLeak.annualizedLoss).toLocaleString()} annually`,
      recommendedSolution: solution,
      nextStepCTA: {
        type: 'demo',
        text: 'See Automated Follow-Up in Action',
        url: 'https://your-demo-link.com/followup'
      },
      priority: 1
    });
  }

  // Insufficient follow-up → Auto Follow-Up
  const followUpGapLeak = revenueLeaks.find(r => r.type === 'Insufficient Follow-Up');
  if (followUpGapLeak && followUpGapLeak.monthlyLoss > 0) {
    const solution = { ...AUTO_FOLLOWUP_SOLUTION };
    solution.projectedOutcome.revenueRecovered = followUpGapLeak.monthlyLoss * 0.65; // 65% recovery

    recommendations.push({
      problemIdentified: `Only ${input.leadHandling.followUpAttemptsPerLead} follow-up attempts per lead—most leads need 6-8 touches to convert`,
      financialImpact: `This is costing you ~$${Math.round(followUpGapLeak.monthlyLoss).toLocaleString()} per month, or $${Math.round(followUpGapLeak.annualizedLoss).toLocaleString()} annually`,
      recommendedSolution: solution,
      nextStepCTA: {
        type: 'calculator',
        text: 'Calculate Your Follow-Up ROI',
        url: 'https://your-demo-link.com/roi-calculator'
      },
      priority: 2
    });
  }

  // Capacity bottleneck → Capacity Solution
  const capacityLeak = revenueLeaks.find(r => r.type === 'Capacity Bottleneck');
  if (capacityLeak && capacityLeak.monthlyLoss > 0) {
    const solution = { ...CAPACITY_SOLUTION };
    solution.projectedOutcome.revenueRecovered = capacityLeak.monthlyLoss * 0.75; // 75% recovery

    recommendations.push({
      problemIdentified: 'You have more demand than capacity—current booking limits are turning away revenue',
      financialImpact: `This is costing you ~$${Math.round(capacityLeak.monthlyLoss).toLocaleString()} per month, or $${Math.round(capacityLeak.annualizedLoss).toLocaleString()} annually`,
      recommendedSolution: solution,
      nextStepCTA: {
        type: 'demo',
        text: 'See Capacity Optimization Demo',
        url: 'https://your-demo-link.com/capacity'
      },
      priority: 3
    });
  }

  // Sort by priority
  return recommendations.sort((a, b) => a.priority - b.priority);
}

/**
 * Check conversion triggers
 */
export function checkConversionTriggers(
  input: AnalysisInput,
  totalMonthlyLoss: number,
  recommendations: Recommendation[]
): {
  lossExceedsSolutionCost: boolean;
  demandExceedsCapacity: boolean;
  slowResponseTime: boolean;
  highMissedCallRate: boolean;
} {
  const lowestSolutionCost = recommendations.length > 0
    ? Math.min(...recommendations.map(r => r.recommendedSolution.estimatedMonthlyCost))
    : 999999;

  const monthlyCapacity = input.capacity.bookingLimitsPerWeek * 4;
  const monthlyDemand = input.businessProfile.monthlyLeadVolume * (input.leadHandling.closeRatePercentage / 100);

  return {
    lossExceedsSolutionCost: totalMonthlyLoss > lowestSolutionCost,
    demandExceedsCapacity: monthlyDemand > monthlyCapacity,
    slowResponseTime: input.leadHandling.avgResponseTimeMinutes > 5,
    highMissedCallRate: input.leadHandling.missedCallsPercentage > 20
  };
}

/**
 * Generate natural language summary
 */
export function generateSummary(
  input: AnalysisInput,
  totalMonthlyLoss: number,
  recommendations: Recommendation[]
): string {
  const topRecommendation = recommendations[0];

  if (!topRecommendation) {
    return `Based on your current numbers, your ${input.businessProfile.industry} business is operating efficiently. Continue monitoring your metrics to maintain performance.`;
  }

  const costBenefit = topRecommendation.recommendedSolution.projectedOutcome.revenueRecovered /
    topRecommendation.recommendedSolution.estimatedMonthlyCost;

  return `Your ${input.businessProfile.industry} business is currently losing ~$${Math.round(totalMonthlyLoss).toLocaleString()} per month (${Math.round(totalMonthlyLoss * 12).toLocaleString()} annually) due to operational inefficiencies. The highest-impact fix is ${topRecommendation.recommendedSolution.name}, which costs $${topRecommendation.recommendedSolution.estimatedMonthlyCost}/month but could recover $${Math.round(topRecommendation.recommendedSolution.projectedOutcome.revenueRecovered).toLocaleString()}/month—a ${Math.round(costBenefit)}x return. Based on your numbers, doing nothing costs you more than implementing this solution.`;
}
