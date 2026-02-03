# AI Revenue & Operations Analyst

**Fully Cloudflare-native AI analyst for service-based businesses** - Track leads, identify revenue leaks, and get ROI-backed recommendations.

## 🎯 What It Does

This AI-powered system helps service businesses:
- **Track incoming leads** and follow-up behavior
- **Identify revenue leaks** and operational pain points
- **Quantify financial impact** in plain dollars
- **Recommend highest-ROI solutions** backed by measurable data
- **Guide to clear next steps** (book, buy, or deploy)

## 🏗️ Architecture

Built 100% on **Cloudflare Workers** with:
- ✅ TypeScript for type safety
- ✅ HuggingFace API for AI-powered insights
- ✅ Cloudflare Workers AI binding (optional)
- ✅ Edge computing for ultra-fast responses
- ✅ Serverless - no infrastructure to manage

## 🚀 Quick Start

### Prerequisites

1. **Node.js** (v18+)
2. **Cloudflare account** (free tier works)
3. **HuggingFace account** (free) - Get API key from https://huggingface.co/settings/tokens

### Installation

```bash
# Install dependencies
npm install

# Copy environment template
cp .dev.vars.example .dev.vars

# Edit .dev.vars and add your HuggingFace API key
# HUGGINGFACE_API_KEY=hf_xxxxxxxxxxxxxxxxxxxxx
```

### Local Development

```bash
# Start local development server
npm run dev

# Test the API
curl http://localhost:8787/health
```

### Deploy to Cloudflare

```bash
# 1. Login to Cloudflare (first time only)
npx wrangler login

# 2. Set HuggingFace API secret (CRITICAL - do this before deploy)
npm run secret:huggingface
# Then paste your HuggingFace API key when prompted

# 3. Deploy to Cloudflare
npm run deploy

# Your worker is now live! 🎉
```

## 🔐 Setting Up HuggingFace Secret

**IMPORTANT**: The HuggingFace API key must be set as a **secret** (not a regular variable) for security.

### Method 1: Using npm script (recommended)
```bash
npm run secret:huggingface
# Paste your key: hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Method 2: Using wrangler CLI directly
```bash
wrangler secret put HUGGINGFACE_API_KEY
# Paste your key when prompted
```

### Method 3: Via Cloudflare Dashboard
1. Go to **Workers & Pages** in Cloudflare dashboard
2. Select your worker: `ai-revenue-analyst`
3. Go to **Settings** → **Variables**
4. Under **Environment Variables**, click **Add variable**
5. Name: `HUGGINGFACE_API_KEY`
6. Value: Your HuggingFace API key
7. Check **Encrypt** (makes it a secret)
8. Click **Save**

## 📡 API Endpoints

### 1. Health Check
```bash
GET /health
```

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### 2. List Industries
```bash
GET /industries
```

**Response:**
```json
{
  "industries": [
    "Medical Spa / Aesthetics",
    "Real Estate",
    "Restaurant / Fine Dining",
    "Home Services (HVAC, Plumbing, Electrical)",
    "Legal Services",
    "Fitness & Wellness"
  ]
}
```

### 3. Run Revenue Analysis
```bash
POST /analyze
Content-Type: application/json

{
  "businessProfile": {
    "industry": "med-spa",
    "averageTicketValue": 500,
    "monthlyLeadVolume": 200,
    "leadSources": ["Google Ads", "Instagram", "Referrals"],
    "bookingMethod": "phone"
  },
  "leadHandling": {
    "missedCallsPercentage": 30,
    "avgResponseTimeMinutes": 15,
    "followUpAttemptsPerLead": 2,
    "showRatePercentage": 65,
    "closeRatePercentage": 35
  },
  "capacity": {
    "staffSize": 5,
    "bookingLimitsPerDay": 12,
    "bookingLimitsPerWeek": 60,
    "peakHours": ["10am-2pm", "4pm-7pm"],
    "deadHours": ["7am-9am"]
  }
}
```

**Response:**
```json
{
  "businessSummary": {
    "industry": "med-spa",
    "monthlyRevenuePotential": 35000,
    "currentMonthlyLeads": 200
  },
  "revenueLeaks": [
    {
      "type": "Missed Calls",
      "monthlyLoss": 10500,
      "annualizedLoss": 126000,
      "percentageOfRevenue": 30,
      "description": "60 missed calls per month at 35% close rate"
    }
  ],
  "totalMonthlyLoss": 25000,
  "totalAnnualLoss": 300000,
  "painPoints": [...],
  "recommendations": [...],
  "summary": "Your med-spa business is currently losing ~$25,000 per month..."
}
```

### 4. AI-Enhanced Insights (Requires HuggingFace)
```bash
POST /ai-insights
Content-Type: application/json

{
  "report": { ...analysis report from /analyze... },
  "question": "What's the fastest way to reduce no-shows?"
}
```

**Response:**
```json
{
  "insights": "Based on your 35% no-show rate, implementing automated SMS reminders 24 hours and 2 hours before appointments could reduce no-shows by 60-70%...",
  "context": "AI-generated insights based on your revenue analysis"
}
```

### 5. Interactive Chat
```bash
POST /chat
Content-Type: application/json

{
  "message": "How can I improve my lead response time?",
  "conversationHistory": []
}
```

**Response:**
```json
{
  "response": "To improve lead response time, consider implementing...",
  "conversationHistory": [
    { "role": "user", "content": "How can I improve my lead response time?" },
    { "role": "assistant", "content": "To improve lead response time..." }
  ]
}
```

## 🧪 Testing the API

### Example: Analyze a Med Spa
```bash
curl -X POST https://your-worker.workers.dev/analyze \
  -H "Content-Type: application/json" \
  -d '{
    "businessProfile": {
      "industry": "med-spa",
      "averageTicketValue": 500,
      "monthlyLeadVolume": 200,
      "leadSources": ["Google Ads", "Instagram"],
      "bookingMethod": "phone"
    },
    "leadHandling": {
      "missedCallsPercentage": 30,
      "avgResponseTimeMinutes": 15,
      "followUpAttemptsPerLead": 2,
      "showRatePercentage": 65,
      "closeRatePercentage": 35
    },
    "capacity": {
      "staffSize": 5,
      "bookingLimitsPerDay": 12,
      "bookingLimitsPerWeek": 60,
      "peakHours": ["10am-2pm"],
      "deadHours": ["7am-9am"]
    }
  }'
```

## 🎨 Industry-Specific Intelligence

The system includes pre-configured pain points for:

| Industry | Common Pain Points | Automation Score |
|----------|-------------------|------------------|
| **Medical Spa** | Missed calls during treatments, manual booking errors, no consultation reminders | 9/10 |
| **Real Estate** | Slow response to listings, lead drop-off, poor qualification | 9/10 |
| **Restaurants** | Missed reservation calls, peak-hour chaos, no confirmations | 10/10 |
| **Home Services** | After-hours missed calls, dispatch inefficiency, no quote follow-up | 9/10 |
| **Legal Services** | Intake bottleneck, slow scheduling, poor qualification | 8/10 |
| **Fitness** | Trial no-shows, cancellation leaks, manual registration | 9/10 |

## 📊 Calculation Engine

The system automatically calculates:

1. **Missed Calls Loss**
   ```
   Missed Calls × Close Rate × Avg Ticket = Lost Revenue
   ```

2. **Slow Follow-Up Loss**
   ```
   Leads Responded After Critical Time → Reduce Close Rate by 50-80%
   ```

3. **No-Show Cost**
   ```
   No-Shows × Avg Ticket = Preventable Loss
   ```

4. **Follow-Up Gap**
   ```
   Missing Follow-Ups × 15% Conversion Loss Each
   ```

5. **Capacity Bottleneck**
   ```
   (Demand - Capacity) × Avg Ticket = Opportunity Cost
   ```

## 🔧 Troubleshooting

### Issue: "HuggingFace API key not configured"

**Solution**: Set the secret using one of these methods:
```bash
# Method 1: npm script
npm run secret:huggingface

# Method 2: wrangler CLI
wrangler secret put HUGGINGFACE_API_KEY

# Method 3: Cloudflare Dashboard
# Workers & Pages > Your Worker > Settings > Variables > Add Variable
```

### Issue: "Model loading" response from HuggingFace

**Cause**: HuggingFace models can take 20-60 seconds to "wake up" if not recently used.

**Solution**: Wait 30 seconds and retry, or use a different model:
```typescript
// In src/index.ts, change default model to:
const defaultModel = 'meta-llama/Meta-Llama-3-8B-Instruct';
```

### Issue: Deployment fails with binding errors

**Solution**: Make sure wrangler.toml is properly configured:
```toml
[ai]
binding = "AI"

[secrets]
# HUGGINGFACE_API_KEY
```

Then set the secret:
```bash
wrangler secret put HUGGINGFACE_API_KEY
```

## 🌐 Environment Variables

| Variable | Type | Required | Description |
|----------|------|----------|-------------|
| `HUGGINGFACE_API_KEY` | Secret | Yes | HuggingFace API key for AI features |
| `APP_NAME` | Variable | No | Application name (default: "AI Revenue & Operations Analyst") |
| `APP_VERSION` | Variable | No | Version number (default: "1.0.0") |

## 📈 Roadmap

- [ ] KV storage for user sessions
- [ ] Durable Objects for real-time analytics
- [ ] Integration with CRM platforms (Salesforce, HubSpot)
- [ ] Custom industry profiles
- [ ] Multi-language support
- [ ] PDF report generation
- [ ] Email integration for automated reports

## 🤝 Contributing

Contributions welcome! Please open an issue or PR.

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

- **Documentation**: This README
- **Issues**: GitHub Issues
- **Cloudflare Docs**: https://developers.cloudflare.com/workers/
- **HuggingFace Docs**: https://huggingface.co/docs/api-inference/

---

**Built with Cloudflare Workers** ⚡ | **Powered by HuggingFace AI** 🤗
