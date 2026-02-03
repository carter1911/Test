/**
 * TypeScript interfaces for AI Revenue & Operations Analyst
 */

export interface Env {
  HUGGINGFACE_API_KEY: string;
  AI?: any; // Cloudflare Workers AI binding
  APP_NAME?: string;
  APP_VERSION?: string;
}

export interface BusinessProfile {
  industry: string;
  averageTicketValue: number;
  monthlyLeadVolume: number;
  leadSources: string[];
  bookingMethod: string;
}

export interface LeadHandlingData {
  missedCallsPercentage: number;
  avgResponseTimeMinutes: number;
  followUpAttemptsPerLead: number;
  showRatePercentage: number;
  closeRatePercentage: number;
}

export interface CapacityConstraints {
  staffSize: number;
  bookingLimitsPerDay: number;
  bookingLimitsPerWeek: number;
  peakHours: string[];
  deadHours: string[];
}

export interface AnalysisInput {
  businessProfile: BusinessProfile;
  leadHandling: LeadHandlingData;
  capacity: CapacityConstraints;
}

export interface RevenueLeakCalculation {
  type: string;
  monthlyLoss: number;
  annualizedLoss: number;
  percentageOfRevenue: number;
  description: string;
}

export interface PainPoint {
  name: string;
  description: string;
  revenueImpact: string;
  automationOpportunityScore: number; // 1-10
  triggered: boolean;
}

export interface Solution {
  name: string;
  description: string;
  targetPainPoints: string[];
  estimatedMonthlyCost: number;
  projectedOutcome: {
    revenueRecovered: number;
    timeSaved: string;
    capacityUnlocked: string;
  };
}

export interface Recommendation {
  problemIdentified: string;
  financialImpact: string;
  recommendedSolution: Solution;
  nextStepCTA: {
    type: 'demo' | 'trial' | 'calculator';
    text: string;
    url?: string;
  };
  priority: number; // 1-3
}

export interface AnalysisReport {
  businessSummary: {
    industry: string;
    monthlyRevenuePotential: number;
    currentMonthlyLeads: number;
  };
  revenueLeaks: RevenueLeakCalculation[];
  totalMonthlyLoss: number;
  totalAnnualLoss: number;
  painPoints: PainPoint[];
  top3Priorities: string[];
  recommendations: Recommendation[];
  conversionTriggers: {
    lossExceedsSolutionCost: boolean;
    demandExceedsCapacity: boolean;
    slowResponseTime: boolean;
    highMissedCallRate: boolean;
  };
  summary: string;
  confidenceScore: number; // 0-100
}

export interface IndustryProfile {
  name: string;
  commonPainPoints: {
    name: string;
    description: string;
    typicalRevenueImpact: string;
    automationOpportunityScore: number;
  }[];
  averageCloseRate: number;
  averageShowRate: number;
  criticalResponseTime: number; // minutes
}
