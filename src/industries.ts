/**
 * Industry-Specific Pain Point Intelligence
 */

import { IndustryProfile } from './types';

export const INDUSTRIES: Record<string, IndustryProfile> = {
  'med-spa': {
    name: 'Medical Spa / Aesthetics',
    commonPainPoints: [
      {
        name: 'Missed Calls During Treatments',
        description: 'Staff performing treatments cannot answer phones, leading to lost bookings',
        typicalRevenueImpact: '$15,000-$40,000/month',
        automationOpportunityScore: 9
      },
      {
        name: 'Manual Booking Errors',
        description: 'Double bookings, wrong services, scheduling conflicts reduce efficiency',
        typicalRevenueImpact: '$8,000-$20,000/month',
        automationOpportunityScore: 8
      },
      {
        name: 'No Consultation Reminders',
        description: 'High no-show rates for consultations waste staff time and block revenue',
        typicalRevenueImpact: '$10,000-$25,000/month',
        automationOpportunityScore: 10
      }
    ],
    averageCloseRate: 35,
    averageShowRate: 70,
    criticalResponseTime: 5
  },
  'real-estate': {
    name: 'Real Estate',
    commonPainPoints: [
      {
        name: 'Slow Response to Listing Inquiries',
        description: 'Buyers contact multiple agents; first responder wins',
        typicalRevenueImpact: '$50,000-$150,000/month in lost commissions',
        automationOpportunityScore: 10
      },
      {
        name: 'Lead Drop-off After First Contact',
        description: 'No systematic follow-up means interested buyers go cold',
        typicalRevenueImpact: '$30,000-$100,000/month',
        automationOpportunityScore: 9
      },
      {
        name: 'Poor Lead Qualification',
        description: 'Time wasted on unqualified leads instead of serious buyers',
        typicalRevenueImpact: '$20,000-$60,000/month in opportunity cost',
        automationOpportunityScore: 8
      }
    ],
    averageCloseRate: 25,
    averageShowRate: 60,
    criticalResponseTime: 3
  },
  'restaurant': {
    name: 'Restaurant / Fine Dining',
    commonPainPoints: [
      {
        name: 'Missed Reservation Calls',
        description: 'During rush hours, staff cannot answer phones for reservations',
        typicalRevenueImpact: '$8,000-$20,000/month',
        automationOpportunityScore: 10
      },
      {
        name: 'Peak-Hour Chaos',
        description: 'Manual reservation management leads to overbooking or empty tables',
        typicalRevenueImpact: '$5,000-$15,000/month',
        automationOpportunityScore: 8
      },
      {
        name: 'No Automated Confirmations',
        description: 'High no-show rates for reservations reduce table turnover',
        typicalRevenueImpact: '$10,000-$25,000/month',
        automationOpportunityScore: 10
      }
    ],
    averageCloseRate: 70,
    averageShowRate: 75,
    criticalResponseTime: 10
  },
  'home-services': {
    name: 'Home Services (HVAC, Plumbing, Electrical)',
    commonPainPoints: [
      {
        name: 'After-Hours Missed Calls',
        description: 'Emergency calls go to voicemail, customers call competitors',
        typicalRevenueImpact: '$12,000-$30,000/month',
        automationOpportunityScore: 9
      },
      {
        name: 'Dispatch Inefficiency',
        description: 'Manual scheduling causes route inefficiency and missed appointments',
        typicalRevenueImpact: '$8,000-$20,000/month',
        automationOpportunityScore: 7
      },
      {
        name: 'No Follow-Up for Quotes',
        description: 'Quoted jobs never convert because no one follows up',
        typicalRevenueImpact: '$15,000-$40,000/month',
        automationOpportunityScore: 9
      }
    ],
    averageCloseRate: 40,
    averageShowRate: 80,
    criticalResponseTime: 5
  },
  'legal-services': {
    name: 'Legal Services',
    commonPainPoints: [
      {
        name: 'Intake Bottleneck',
        description: 'Receptionists overwhelmed, qualified leads wait or leave',
        typicalRevenueImpact: '$25,000-$75,000/month',
        automationOpportunityScore: 8
      },
      {
        name: 'Slow Consultation Scheduling',
        description: 'Manual back-and-forth for appointment setting loses urgent cases',
        typicalRevenueImpact: '$15,000-$50,000/month',
        automationOpportunityScore: 9
      },
      {
        name: 'Poor Lead Qualification',
        description: 'Attorneys waste time on cases outside their specialty',
        typicalRevenueImpact: '$20,000-$60,000/month in opportunity cost',
        automationOpportunityScore: 7
      }
    ],
    averageCloseRate: 30,
    averageShowRate: 65,
    criticalResponseTime: 2
  },
  'fitness-wellness': {
    name: 'Fitness & Wellness',
    commonPainPoints: [
      {
        name: 'Trial Class No-Shows',
        description: 'Free trial sign-ups ghost, wasting instructor time',
        typicalRevenueImpact: '$5,000-$15,000/month',
        automationOpportunityScore: 10
      },
      {
        name: 'Membership Cancellation Leaks',
        description: 'No retention process means easy cancellations',
        typicalRevenueImpact: '$8,000-$25,000/month',
        automationOpportunityScore: 8
      },
      {
        name: 'Manual Class Registration',
        description: 'Front desk overwhelmed during peak sign-up times',
        typicalRevenueImpact: '$6,000-$18,000/month',
        automationOpportunityScore: 9
      }
    ],
    averageCloseRate: 45,
    averageShowRate: 60,
    criticalResponseTime: 8
  }
};

export function getIndustryProfile(industry: string): IndustryProfile | null {
  const normalizedIndustry = industry.toLowerCase().replace(/\s+/g, '-');
  return INDUSTRIES[normalizedIndustry] || null;
}

export function getAllIndustries(): string[] {
  return Object.keys(INDUSTRIES).map(key => INDUSTRIES[key].name);
}
