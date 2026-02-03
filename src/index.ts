/**
 * AI Revenue & Operations Analyst - Cloudflare Worker
 * Fully native Cloudflare implementation with HuggingFace integration
 */

import { Env, AnalysisInput, AnalysisReport } from './types';
import { getIndustryProfile, getAllIndustries } from './industries';
import {
  runAllCalculations,
  identifyPainPoints
} from './calculations';
import {
  generateRecommendations,
  checkConversionTriggers,
  generateSummary
} from './recommendations';

/**
 * Main Cloudflare Worker Entry Point
 */
export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // CORS headers for API access
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      // Route: Health check
      if (url.pathname === '/health') {
        return jsonResponse({ status: 'healthy', timestamp: new Date().toISOString() }, corsHeaders);
      }

      // Route: Get available industries
      if (url.pathname === '/industries') {
        return jsonResponse({ industries: getAllIndustries() }, corsHeaders);
      }

      // Route: Main analysis endpoint
      if (url.pathname === '/analyze' && request.method === 'POST') {
        return await handleAnalysis(request, env, corsHeaders);
      }

      // Route: AI-enhanced insights (uses HuggingFace)
      if (url.pathname === '/ai-insights' && request.method === 'POST') {
        return await handleAIInsights(request, env, corsHeaders);
      }

      // Route: Interactive chat mode
      if (url.pathname === '/chat' && request.method === 'POST') {
        return await handleChat(request, env, corsHeaders);
      }

      // Default: API documentation
      return jsonResponse({
        name: env.APP_NAME || 'AI Revenue & Operations Analyst',
        version: env.APP_VERSION || '1.0.0',
        endpoints: {
          '/health': 'Health check',
          '/industries': 'List available industries',
          '/analyze': 'POST - Run revenue analysis',
          '/ai-insights': 'POST - Get AI-enhanced insights (requires HuggingFace API)',
          '/chat': 'POST - Interactive chat with AI analyst'
        },
        documentation: 'https://github.com/your-repo/ai-revenue-analyst'
      }, corsHeaders);

    } catch (error) {
      console.error('Worker error:', error);
      return jsonResponse({
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      }, corsHeaders, 500);
    }
  }
};

/**
 * Handle revenue analysis request
 */
async function handleAnalysis(request: Request, env: Env, corsHeaders: HeadersInit): Promise<Response> {
  try {
    const input: AnalysisInput = await request.json();

    // Validate input
    if (!input.businessProfile || !input.leadHandling || !input.capacity) {
      return jsonResponse({
        error: 'Missing required fields',
        required: ['businessProfile', 'leadHandling', 'capacity']
      }, corsHeaders, 400);
    }

    // Get industry profile
    const industryProfile = getIndustryProfile(input.businessProfile.industry);

    // Run calculations
    const revenueLeaks = runAllCalculations(input, industryProfile);
    const totalMonthlyLoss = revenueLeaks.reduce((sum, leak) => sum + leak.monthlyLoss, 0);
    const totalAnnualLoss = totalMonthlyLoss * 12;

    // Identify pain points
    const painPoints = identifyPainPoints(input, industryProfile, revenueLeaks);

    // Generate recommendations
    const recommendations = generateRecommendations(input, painPoints, revenueLeaks);

    // Check conversion triggers
    const conversionTriggers = checkConversionTriggers(input, totalMonthlyLoss, recommendations);

    // Generate summary
    const summary = generateSummary(input, totalMonthlyLoss, recommendations);

    // Calculate confidence score (based on data completeness)
    const confidenceScore = calculateConfidenceScore(input);

    // Build report
    const report: AnalysisReport = {
      businessSummary: {
        industry: input.businessProfile.industry,
        monthlyRevenuePotential: input.businessProfile.monthlyLeadVolume *
          input.businessProfile.averageTicketValue *
          (input.leadHandling.closeRatePercentage / 100),
        currentMonthlyLeads: input.businessProfile.monthlyLeadVolume
      },
      revenueLeaks,
      totalMonthlyLoss,
      totalAnnualLoss,
      painPoints,
      top3Priorities: recommendations.slice(0, 3).map(r => r.problemIdentified),
      recommendations,
      conversionTriggers,
      summary,
      confidenceScore
    };

    return jsonResponse(report, corsHeaders);

  } catch (error) {
    return jsonResponse({
      error: 'Analysis failed',
      message: error instanceof Error ? error.message : 'Invalid input'
    }, corsHeaders, 400);
  }
}

/**
 * Handle AI-enhanced insights using HuggingFace
 */
async function handleAIInsights(request: Request, env: Env, corsHeaders: HeadersInit): Promise<Response> {
  try {
    // Check if HuggingFace API key is configured
    if (!env.HUGGINGFACE_API_KEY) {
      return jsonResponse({
        error: 'HuggingFace API key not configured',
        message: 'Set HUGGINGFACE_API_KEY secret via: wrangler secret put HUGGINGFACE_API_KEY'
      }, corsHeaders, 500);
    }

    const { report, question } = await request.json();

    if (!report) {
      return jsonResponse({
        error: 'Missing report data',
        message: 'Please provide the analysis report'
      }, corsHeaders, 400);
    }

    // Prepare context for AI
    const context = `
You are an AI Revenue & Operations Analyst. Based on this business analysis:

Industry: ${report.businessSummary?.industry}
Monthly Revenue Potential: $${report.businessSummary?.monthlyRevenuePotential?.toLocaleString()}
Total Monthly Loss: $${report.totalMonthlyLoss?.toLocaleString()}
Total Annual Loss: $${report.totalAnnualLoss?.toLocaleString()}

Revenue Leaks:
${report.revenueLeaks?.map((leak: any) => `- ${leak.type}: $${leak.monthlyLoss.toLocaleString()}/month`).join('\n')}

Top Pain Points:
${report.painPoints?.slice(0, 3).map((pp: any) => `- ${pp.name}: ${pp.description}`).join('\n')}

${question ? `Question: ${question}` : 'Provide actionable insights and recommendations.'}
`;

    // Call HuggingFace Inference API
    const aiResponse = await callHuggingFace(env.HUGGINGFACE_API_KEY, context);

    return jsonResponse({
      insights: aiResponse,
      context: 'AI-generated insights based on your revenue analysis'
    }, corsHeaders);

  } catch (error) {
    return jsonResponse({
      error: 'AI insights failed',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, corsHeaders, 500);
  }
}

/**
 * Handle interactive chat with AI analyst
 */
async function handleChat(request: Request, env: Env, corsHeaders: HeadersInit): Promise<Response> {
  try {
    if (!env.HUGGINGFACE_API_KEY) {
      return jsonResponse({
        error: 'HuggingFace API key not configured'
      }, corsHeaders, 500);
    }

    const { message, conversationHistory } = await request.json();

    if (!message) {
      return jsonResponse({
        error: 'Message required'
      }, corsHeaders, 400);
    }

    // Build conversation context
    const systemPrompt = `You are an AI Revenue & Operations Analyst for service-based businesses.

Your core responsibilities:
1. Track incoming leads and follow-up behavior
2. Identify revenue leaks and operational pain points
3. Quantify financial impact in plain dollars
4. Recommend the highest-ROI solution
5. Guide users to clear next steps

Key principles:
- Speak in plain business language
- Show numbers before features
- Only recommend solutions backed by measurable impact
- Make solutions feel inevitable, not optional
- Focus on "why" not "what"
`;

    const conversation = conversationHistory || [];
    conversation.push({ role: 'user', content: message });

    const fullPrompt = `${systemPrompt}\n\nConversation:\n${conversation.map((m: any) => `${m.role}: ${m.content}`).join('\n')}\n\nassistant:`;

    const aiResponse = await callHuggingFace(env.HUGGINGFACE_API_KEY, fullPrompt);

    conversation.push({ role: 'assistant', content: aiResponse });

    return jsonResponse({
      response: aiResponse,
      conversationHistory: conversation
    }, corsHeaders);

  } catch (error) {
    return jsonResponse({
      error: 'Chat failed',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, corsHeaders, 500);
  }
}

/**
 * Call HuggingFace Inference API
 */
async function callHuggingFace(apiKey: string, prompt: string, model?: string): Promise<string> {
  const defaultModel = 'mistralai/Mistral-7B-Instruct-v0.2';
  const selectedModel = model || defaultModel;

  try {
    const response = await fetch(
      `https://api-inference.huggingface.co/models/${selectedModel}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            max_new_tokens: 500,
            temperature: 0.7,
            top_p: 0.95,
            return_full_text: false
          }
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HuggingFace API error: ${response.status} - ${errorText}`);
    }

    const result = await response.json();

    // Handle different response formats
    if (Array.isArray(result) && result[0]?.generated_text) {
      return result[0].generated_text.trim();
    } else if (result.generated_text) {
      return result.generated_text.trim();
    } else if (typeof result === 'string') {
      return result.trim();
    } else {
      throw new Error('Unexpected response format from HuggingFace');
    }

  } catch (error) {
    console.error('HuggingFace API error:', error);
    throw new Error(`Failed to get AI response: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Calculate confidence score based on data completeness
 */
function calculateConfidenceScore(input: AnalysisInput): number {
  let score = 100;

  // Deduct points for missing or low-quality data
  if (input.businessProfile.monthlyLeadVolume < 10) score -= 15;
  if (input.businessProfile.averageTicketValue < 100) score -= 10;
  if (input.leadHandling.followUpAttemptsPerLead === 0) score -= 10;
  if (input.capacity.staffSize === 0) score -= 10;

  return Math.max(score, 50); // Minimum 50% confidence
}

/**
 * Helper: JSON response with CORS headers
 */
function jsonResponse(data: any, corsHeaders: HeadersInit, status = 200): Response {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json',
    }
  });
}
