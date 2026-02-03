# Deployment Guide

## Step-by-Step Cloudflare Workers Deployment

### 1. Prerequisites

- Node.js v18+ installed
- Cloudflare account (sign up at https://dash.cloudflare.com/sign-up)
- HuggingFace account (sign up at https://huggingface.co/join)

### 2. Get Your HuggingFace API Key

1. Go to https://huggingface.co/settings/tokens
2. Click **"New token"**
3. Name: `ai-revenue-analyst`
4. Type: **Read**
5. Click **"Generate a token"**
6. Copy the token (starts with `hf_`)

**IMPORTANT**: Save this token - you'll need it in the next steps!

### 3. Clone and Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd Test

# Install dependencies
npm install

# Create local environment file
cp .dev.vars.example .dev.vars
```

### 4. Configure Local Environment

Edit `.dev.vars` and add your HuggingFace API key:

```bash
HUGGINGFACE_API_KEY=hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 5. Test Locally

```bash
# Start local development server
npm run dev

# In another terminal, test the API
curl http://localhost:8787/health

# Test analysis endpoint
curl -X POST http://localhost:8787/analyze \
  -H "Content-Type: application/json" \
  -d @example-request.json
```

If you see a successful response, you're ready to deploy!

### 6. Deploy to Cloudflare

```bash
# Login to Cloudflare (first time only)
npx wrangler login
# This will open a browser - click "Allow" to authorize

# Set the HuggingFace API secret
npm run secret:huggingface
# Paste your HuggingFace API key when prompted

# Deploy!
npm run deploy
```

### 7. Verify Deployment

After deployment, you'll see output like:

```
Published ai-revenue-analyst (X.XX sec)
  https://ai-revenue-analyst.<your-subdomain>.workers.dev
```

Test your live worker:

```bash
# Replace with your actual worker URL
curl https://ai-revenue-analyst.<your-subdomain>.workers.dev/health
```

### 8. Test Live API

```bash
# Get industries list
curl https://ai-revenue-analyst.<your-subdomain>.workers.dev/industries

# Run analysis
curl -X POST https://ai-revenue-analyst.<your-subdomain>.workers.dev/analyze \
  -H "Content-Type: application/json" \
  -d @example-request.json

# Get AI insights (requires HuggingFace secret to be set)
curl -X POST https://ai-revenue-analyst.<your-subdomain>.workers.dev/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "What are the top 3 ways to reduce revenue leaks?",
    "conversationHistory": []
  }'
```

## Common Deployment Issues

### Issue: "Authentication error"

**Solution**: Run `npx wrangler login` again and make sure you authorize the Wrangler CLI.

### Issue: "Secret not found: HUGGINGFACE_API_KEY"

**Solution**:
```bash
# Set the secret again
npm run secret:huggingface
# Or use wrangler directly
wrangler secret put HUGGINGFACE_API_KEY
```

### Issue: "Build failed"

**Solution**: Make sure all dependencies are installed:
```bash
rm -rf node_modules package-lock.json
npm install
npm run deploy
```

### Issue: "Module not found"

**Solution**: Verify `wrangler.toml` has correct settings:
```toml
main = "src/index.ts"

[build]
command = "npm run build"
```

## Managing Secrets

### View current secrets
```bash
wrangler secret list
```

### Update a secret
```bash
wrangler secret put HUGGINGFACE_API_KEY
```

### Delete a secret
```bash
wrangler secret delete HUGGINGFACE_API_KEY
```

## Custom Domain (Optional)

To use a custom domain:

1. Go to Cloudflare Dashboard
2. Select **Workers & Pages**
3. Click your worker: `ai-revenue-analyst`
4. Go to **Settings** → **Domains & Routes**
5. Click **Add Custom Domain**
6. Enter your domain (e.g., `api.yourdomain.com`)
7. Click **Add Domain**

Cloudflare will automatically handle SSL certificates!

## Monitoring

View logs in real-time:

```bash
npm run tail
```

Or view in Cloudflare Dashboard:
- Workers & Pages > ai-revenue-analyst > Logs

## Updating the Worker

```bash
# Make your changes
# Then deploy
npm run deploy
```

Changes are live immediately!

## Rolling Back

```bash
# View deployment history
wrangler deployments list

# Rollback to previous version
wrangler rollback
```

## Environment-Specific Deploys

For staging vs production:

```bash
# Deploy to staging
wrangler deploy --env staging

# Deploy to production
wrangler deploy --env production
```

Update `wrangler.toml`:
```toml
[env.staging]
name = "ai-revenue-analyst-staging"

[env.production]
name = "ai-revenue-analyst"
```

## Cost Estimation

Cloudflare Workers Free Tier:
- ✅ 100,000 requests/day
- ✅ 10ms CPU time per request
- ✅ More than enough for testing and small deployments

Paid Plan ($5/month):
- ✅ 10 million requests/month included
- ✅ $0.50 per additional million requests

HuggingFace API (Inference API):
- ✅ Free tier: Rate limited, models may sleep
- ✅ PRO ($9/month): Faster, no rate limits, no cold starts

**Total estimated cost**: $0-14/month depending on usage

## Next Steps

1. ✅ Worker is deployed
2. ✅ Secrets are configured
3. ✅ API is tested

Now you can:
- Build a frontend (React, Vue, etc.)
- Integrate with your CRM
- Set up monitoring and alerts
- Add custom domains
- Scale to production

🎉 **Your AI Revenue Analyst is live!**
