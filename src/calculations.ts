/**
 * Lead & Follow-Up Calculation Engine
 */

import {
  AnalysisInput,
  RevenueLeakCalculation,
  PainPoint,
  IndustryProfile
} from './types';

/**
 * Calculate revenue lost from missed calls
 */
export function calculateMissedCallsLoss(input: AnalysisInput): RevenueLeakCalculation {
  const { businessProfile, leadHandling } = input;
  const missedCallsPerMonth = businessProfile.monthlyLeadVolume * (leadHandling.missedCallsPercentage / 100);
  const monthlyLoss = missedCallsPerMonth * (leadHandling.closeRatePercentage / 100) * businessProfile.averageTicketValue;

  return {
    type: 'Missed Calls',
    monthlyLoss,
    annualizedLoss: monthlyLoss * 12,
    percentageOfRevenue: calculateRevenuePercentage(monthlyLoss, businessProfile),
    description: `${Math.round(missedCallsPerMonth)} missed calls per month at ${leadHandling.closeRatePercentage}% close rate`
  };
}

/**
 * Calculate revenue lost from slow follow-up
 * Leads responded to after 5 minutes have 50-80% reduced close rate
 */
export function calculateSlowFollowUpLoss(
  input: AnalysisInput,
  industryProfile: IndustryProfile | null
): RevenueLeakCalculation {
  const { businessProfile, leadHandling } = input;
  const criticalTime = industryProfile?.criticalResponseTime || 5;

  // If response time exceeds critical threshold
  if (leadHandling.avgResponseTimeMinutes <= criticalTime) {
    return {
      type: 'Slow Follow-Up',
      monthlyLoss: 0,
      annualizedLoss: 0,
      percentageOfRevenue: 0,
      description: 'Response time is within optimal range'
    };
  }

  // Calculate degradation: 10% per minute over threshold, capped at 80%
  const minutesOver = leadHandling.avgResponseTimeMinutes - criticalTime;
  const closeRateDegradation = Math.min(minutesOver * 10, 80);

  const leadsAffected = businessProfile.monthlyLeadVolume * 0.7; // Assume 70% of leads face this delay
  const lostConversions = leadsAffected * (leadHandling.closeRatePercentage / 100) * (closeRateDegradation / 100);
  const monthlyLoss = lostConversions * businessProfile.averageTicketValue;

  return {
    type: 'Slow Follow-Up',
    monthlyLoss,
    annualizedLoss: monthlyLoss * 12,
    percentageOfRevenue: calculateRevenuePercentage(monthlyLoss, businessProfile),
    description: `Avg response time of ${leadHandling.avgResponseTimeMinutes} minutes reduces close rate by ~${closeRateDegradation}%`
  };
}

/**
 * Calculate cost of no-shows
 */
export function calculateNoShowCost(input: AnalysisInput): RevenueLeakCalculation {
  const { businessProfile, leadHandling } = input;
  const scheduledAppointments = businessProfile.monthlyLeadVolume * (leadHandling.closeRatePercentage / 100);
  const noShows = scheduledAppointments * (1 - leadHandling.showRatePercentage / 100);
  const monthlyLoss = noShows * businessProfile.averageTicketValue;

  return {
    type: 'No-Shows',
    monthlyLoss,
    annualizedLoss: monthlyLoss * 12,
    percentageOfRevenue: calculateRevenuePercentage(monthlyLoss, businessProfile),
    description: `${Math.round(noShows)} no-shows per month at $${businessProfile.averageTicketValue} avg ticket`
  };
}

/**
 * Calculate cost of insufficient follow-up attempts
 */
export function calculateFollowUpGapLoss(input: AnalysisInput): RevenueLeakCalculation {
  const { businessProfile, leadHandling } = input;

  // Industry standard: 5-8 follow-ups needed to convert a lead
  const optimalFollowUps = 6;

  if (leadHandling.followUpAttemptsPerLead >= optimalFollowUps) {
    return {
      type: 'Insufficient Follow-Up',
      monthlyLoss: 0,
      annualizedLoss: 0,
      percentageOfRevenue: 0,
      description: 'Follow-up cadence is optimal'
    };
  }

  // Each missing follow-up reduces conversion by ~15%
  const followUpGap = optimalFollowUps - leadHandling.followUpAttemptsPerLead;
  const conversionLoss = followUpGap * 15;

  const potentialConversions = businessProfile.monthlyLeadVolume * (leadHandling.closeRatePercentage / 100);
  const lostConversions = potentialConversions * (conversionLoss / 100);
  const monthlyLoss = lostConversions * businessProfile.averageTicketValue;

  return {
    type: 'Insufficient Follow-Up',
    monthlyLoss,
    annualizedLoss: monthlyLoss * 12,
    percentageOfRevenue: calculateRevenuePercentage(monthlyLoss, businessProfile),
    description: `Only ${leadHandling.followUpAttemptsPerLead} follow-ups per lead vs optimal ${optimalFollowUps}, losing ~${Math.round(conversionLoss)}% conversions`
  };
}

/**
 * Calculate staff bottleneck cost (demand exceeds capacity)
 */
export function calculateCapacityBottleneckLoss(input: AnalysisInput): RevenueLeakCalculation {
  const { businessProfile, leadHandling, capacity } = input;

  // Calculate actual demand
  const monthlyBookingDemand = businessProfile.monthlyLeadVolume * (leadHandling.closeRatePercentage / 100);

  // Calculate current capacity (assume 4 weeks per month)
  const monthlyCapacity = capacity.bookingLimitsPerWeek * 4;

  if (monthlyBookingDemand <= monthlyCapacity) {
    return {
      type: 'Capacity Bottleneck',
      monthlyLoss: 0,
      annualizedLoss: 0,
      percentageOfRevenue: 0,
      description: 'Current capacity can handle demand'
    };
  }

  const unbookedDemand = monthlyBookingDemand - monthlyCapacity;
  const monthlyLoss = unbookedDemand * businessProfile.averageTicketValue;

  return {
    type: 'Capacity Bottleneck',
    monthlyLoss,
    annualizedLoss: monthlyLoss * 12,
    percentageOfRevenue: calculateRevenuePercentage(monthlyLoss, businessProfile),
    description: `Demand (${Math.round(monthlyBookingDemand)}/mo) exceeds capacity (${monthlyCapacity}/mo) by ${Math.round(unbookedDemand)} bookings`
  };
}

/**
 * Helper: Calculate what percentage of potential revenue is leaking
 */
function calculateRevenuePercentage(
  monthlyLoss: number,
  businessProfile: { monthlyLeadVolume: number; averageTicketValue: number; closeRatePercentage?: number }
): number {
  const potentialMonthlyRevenue = businessProfile.monthlyLeadVolume *
    businessProfile.averageTicketValue *
    ((businessProfile.closeRatePercentage || 30) / 100);

  return potentialMonthlyRevenue > 0
    ? (monthlyLoss / potentialMonthlyRevenue) * 100
    : 0;
}

/**
 * Identify active pain points based on calculations and industry profile
 */
export function identifyPainPoints(
  input: AnalysisInput,
  industryProfile: IndustryProfile | null,
  calculations: RevenueLeakCalculation[]
): PainPoint[] {
  const painPoints: PainPoint[] = [];
  const { leadHandling, capacity, businessProfile } = input;

  // Generic pain points
  if (leadHandling.missedCallsPercentage > 20) {
    painPoints.push({
      name: 'High Missed Call Rate',
      description: 'Over 20% of calls are going unanswered',
      revenueImpact: `$${Math.round(calculations.find(c => c.type === 'Missed Calls')?.monthlyLoss || 0).toLocaleString()}/month`,
      automationOpportunityScore: 10,
      triggered: true
    });
  }

  if (leadHandling.avgResponseTimeMinutes > (industryProfile?.criticalResponseTime || 5)) {
    painPoints.push({
      name: 'Slow Response Time',
      description: `Average ${leadHandling.avgResponseTimeMinutes} min response time is hurting conversions`,
      revenueImpact: `$${Math.round(calculations.find(c => c.type === 'Slow Follow-Up')?.monthlyLoss || 0).toLocaleString()}/month`,
      automationOpportunityScore: 9,
      triggered: true
    });
  }

  if (leadHandling.showRatePercentage < 70) {
    painPoints.push({
      name: 'High No-Show Rate',
      description: `${100 - leadHandling.showRatePercentage}% no-show rate is wasting capacity`,
      revenueImpact: `$${Math.round(calculations.find(c => c.type === 'No-Shows')?.monthlyLoss || 0).toLocaleString()}/month`,
      automationOpportunityScore: 10,
      triggered: true
    });
  }

  if (leadHandling.followUpAttemptsPerLead < 6) {
    painPoints.push({
      name: 'Insufficient Follow-Up',
      description: 'Not enough follow-up attempts to convert leads',
      revenueImpact: `$${Math.round(calculations.find(c => c.type === 'Insufficient Follow-Up')?.monthlyLoss || 0).toLocaleString()}/month`,
      automationOpportunityScore: 9,
      triggered: true
    });
  }

  // Check capacity bottleneck
  const monthlyBookingDemand = businessProfile.monthlyLeadVolume * (leadHandling.closeRatePercentage / 100);
  const monthlyCapacity = capacity.bookingLimitsPerWeek * 4;

  if (monthlyBookingDemand > monthlyCapacity) {
    painPoints.push({
      name: 'Capacity Bottleneck',
      description: 'Demand exceeds your ability to serve customers',
      revenueImpact: `$${Math.round(calculations.find(c => c.type === 'Capacity Bottleneck')?.monthlyLoss || 0).toLocaleString()}/month`,
      automationOpportunityScore: 8,
      triggered: true
    });
  }

  // Add industry-specific pain points if available
  if (industryProfile) {
    industryProfile.commonPainPoints.forEach(pp => {
      // Check if this pain point is already covered
      const alreadyCovered = painPoints.some(existing =>
        existing.name.toLowerCase().includes(pp.name.toLowerCase().split(' ')[0])
      );

      if (!alreadyCovered) {
        painPoints.push({
          name: pp.name,
          description: pp.description,
          revenueImpact: pp.typicalRevenueImpact,
          automationOpportunityScore: pp.automationOpportunityScore,
          triggered: false // Industry-specific, not directly calculated
        });
      }
    });
  }

  return painPoints;
}

/**
 * Run all calculations
 */
export function runAllCalculations(
  input: AnalysisInput,
  industryProfile: IndustryProfile | null
): RevenueLeakCalculation[] {
  return [
    calculateMissedCallsLoss(input),
    calculateSlowFollowUpLoss(input, industryProfile),
    calculateNoShowCost(input),
    calculateFollowUpGapLoss(input),
    calculateCapacityBottleneckLoss(input)
  ].filter(calc => calc.monthlyLoss > 0); // Only return leaks with actual losses
}
