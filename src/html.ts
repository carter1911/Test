/**
 * Frontend HTML - exported as string for Cloudflare Worker
 */

export const FRONTEND_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Revenue & Operations Analyst</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
            color: #333;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .header {
            text-align: center;
            color: white;
            margin-bottom: 40px;
        }

        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }

        .header p {
            font-size: 1.2em;
            opacity: 0.95;
        }

        .card {
            background: white;
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
            margin-bottom: 30px;
        }

        .form-section {
            margin-bottom: 30px;
        }

        .form-section h2 {
            color: #667eea;
            margin-bottom: 20px;
            font-size: 1.5em;
            border-bottom: 2px solid #667eea;
            padding-bottom: 10px;
        }

        .form-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 20px;
        }

        .form-group {
            display: flex;
            flex-direction: column;
        }

        .form-group label {
            font-weight: 600;
            margin-bottom: 8px;
            color: #555;
        }

        .form-group input,
        .form-group select {
            padding: 12px;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.3s;
        }

        .form-group input:focus,
        .form-group select:focus {
            outline: none;
            border-color: #667eea;
        }

        .analyze-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 16px 40px;
            border: none;
            border-radius: 8px;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            width: 100%;
            transition: transform 0.2s, box-shadow 0.2s;
            margin-top: 20px;
        }

        .analyze-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        .analyze-btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
        }

        .loading {
            text-align: center;
            padding: 40px;
            display: none;
        }

        .loading.active {
            display: block;
        }

        .spinner {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #667eea;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .results {
            display: none;
        }

        .results.active {
            display: block;
        }

        .summary-box {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 12px;
            margin-bottom: 30px;
        }

        .summary-box h2 {
            margin-bottom: 15px;
            font-size: 1.8em;
        }

        .summary-box p {
            font-size: 1.1em;
            line-height: 1.6;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .stat-card {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            border-left: 4px solid #667eea;
        }

        .stat-card .label {
            font-size: 0.9em;
            color: #666;
            margin-bottom: 8px;
        }

        .stat-card .value {
            font-size: 2em;
            font-weight: bold;
            color: #667eea;
        }

        .stat-card .subtext {
            font-size: 0.8em;
            color: #999;
            margin-top: 5px;
        }

        .leak-list {
            margin-bottom: 30px;
        }

        .leak-item {
            background: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 8px;
        }

        .leak-item h3 {
            color: #856404;
            margin-bottom: 5px;
        }

        .leak-item .leak-amount {
            font-size: 1.5em;
            font-weight: bold;
            color: #d63031;
            margin: 10px 0;
        }

        .leak-item .leak-description {
            color: #666;
        }

        .pain-points {
            margin-bottom: 30px;
        }

        .pain-point {
            background: #f8d7da;
            border-left: 4px solid #dc3545;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 8px;
        }

        .pain-point h3 {
            color: #721c24;
            margin-bottom: 8px;
        }

        .pain-point .impact {
            font-weight: 600;
            color: #d63031;
            margin-top: 8px;
        }

        .recommendations {
            margin-bottom: 30px;
        }

        .recommendation {
            background: #d1ecf1;
            border-left: 4px solid #17a2b8;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 8px;
        }

        .recommendation h3 {
            color: #0c5460;
            margin-bottom: 10px;
        }

        .recommendation .problem {
            font-weight: 600;
            margin-bottom: 10px;
        }

        .recommendation .solution {
            background: white;
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
        }

        .recommendation .solution-name {
            font-size: 1.2em;
            font-weight: bold;
            color: #667eea;
            margin-bottom: 8px;
        }

        .recommendation .outcome {
            margin-top: 10px;
        }

        .recommendation .outcome strong {
            color: #28a745;
        }

        .cta-button {
            background: #28a745;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            margin-top: 10px;
            transition: background 0.3s;
        }

        .cta-button:hover {
            background: #218838;
        }

        .back-button {
            background: #6c757d;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            margin-bottom: 20px;
        }

        .back-button:hover {
            background: #5a6268;
        }

        .error {
            background: #f8d7da;
            color: #721c24;
            padding: 15px;
            border-radius: 8px;
            border: 1px solid #f5c6cb;
            margin-bottom: 20px;
            display: none;
        }

        .error.active {
            display: block;
        }

        @media (max-width: 768px) {
            .header h1 {
                font-size: 1.8em;
            }

            .form-grid {
                grid-template-columns: 1fr;
            }

            .stats-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎯 AI Revenue & Operations Analyst</h1>
            <p>Discover hidden revenue leaks and get ROI-backed recommendations</p>
        </div>

        <div id="error" class="error"></div>

        <!-- Input Form -->
        <div id="inputForm" class="card">
            <form id="analysisForm">
                <!-- Business Profile -->
                <div class="form-section">
                    <h2>📊 Business Profile</h2>
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="industry">Industry</label>
                            <select id="industry" required>
                                <option value="">Select your industry</option>
                                <option value="med-spa">Medical Spa / Aesthetics</option>
                                <option value="real-estate">Real Estate</option>
                                <option value="restaurant">Restaurant / Fine Dining</option>
                                <option value="home-services">Home Services (HVAC, Plumbing, Electrical)</option>
                                <option value="legal-services">Legal Services</option>
                                <option value="fitness-wellness">Fitness & Wellness</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="avgTicket">Average Ticket Value ($)</label>
                            <input type="number" id="avgTicket" min="1" required placeholder="e.g., 500">
                        </div>
                        <div class="form-group">
                            <label for="monthlyLeads">Monthly Lead Volume</label>
                            <input type="number" id="monthlyLeads" min="1" required placeholder="e.g., 200">
                        </div>
                        <div class="form-group">
                            <label for="bookingMethod">Booking Method</label>
                            <select id="bookingMethod" required>
                                <option value="phone">Phone</option>
                                <option value="calendar">Online Calendar</option>
                                <option value="text">Text/SMS</option>
                                <option value="front-desk">Front Desk</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Lead Handling -->
                <div class="form-section">
                    <h2>📞 Lead Handling</h2>
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="missedCalls">Missed Calls (%)</label>
                            <input type="number" id="missedCalls" min="0" max="100" required placeholder="e.g., 30">
                        </div>
                        <div class="form-group">
                            <label for="responseTime">Avg Response Time (minutes)</label>
                            <input type="number" id="responseTime" min="0" required placeholder="e.g., 15">
                        </div>
                        <div class="form-group">
                            <label for="followUps">Follow-up Attempts per Lead</label>
                            <input type="number" id="followUps" min="0" required placeholder="e.g., 3">
                        </div>
                        <div class="form-group">
                            <label for="showRate">Show Rate (%)</label>
                            <input type="number" id="showRate" min="0" max="100" required placeholder="e.g., 70">
                        </div>
                        <div class="form-group">
                            <label for="closeRate">Close Rate (%)</label>
                            <input type="number" id="closeRate" min="0" max="100" required placeholder="e.g., 35">
                        </div>
                    </div>
                </div>

                <!-- Capacity -->
                <div class="form-section">
                    <h2>⚙️ Capacity & Resources</h2>
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="staffSize">Staff Size</label>
                            <input type="number" id="staffSize" min="1" required placeholder="e.g., 5">
                        </div>
                        <div class="form-group">
                            <label for="bookingsPerDay">Booking Limit per Day</label>
                            <input type="number" id="bookingsPerDay" min="1" required placeholder="e.g., 12">
                        </div>
                        <div class="form-group">
                            <label for="bookingsPerWeek">Booking Limit per Week</label>
                            <input type="number" id="bookingsPerWeek" min="1" required placeholder="e.g., 60">
                        </div>
                    </div>
                </div>

                <button type="submit" class="analyze-btn" id="analyzeBtn">
                    🚀 Analyze My Revenue Leaks
                </button>
            </form>
        </div>

        <!-- Loading State -->
        <div id="loading" class="loading card">
            <div class="spinner"></div>
            <h2>Analyzing Your Business...</h2>
            <p>Calculating revenue leaks and generating recommendations...</p>
        </div>

        <!-- Results -->
        <div id="results" class="results">
            <button class="back-button" onclick="showForm()">← Back to Form</button>

            <!-- Summary -->
            <div class="summary-box">
                <h2>💡 Executive Summary</h2>
                <p id="summaryText"></p>
            </div>

            <!-- Key Stats -->
            <div class="card">
                <h2 style="margin-bottom: 20px; color: #667eea;">📈 Key Metrics</h2>
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="label">Monthly Revenue Potential</div>
                        <div class="value" id="revenuePotential">$0</div>
                    </div>
                    <div class="stat-card">
                        <div class="label">Monthly Loss</div>
                        <div class="value" style="color: #d63031;" id="monthlyLoss">$0</div>
                    </div>
                    <div class="stat-card">
                        <div class="label">Annual Loss</div>
                        <div class="value" style="color: #d63031;" id="annualLoss">$0</div>
                    </div>
                    <div class="stat-card">
                        <div class="label">Confidence Score</div>
                        <div class="value" style="color: #28a745;" id="confidence">0%</div>
                    </div>
                </div>
            </div>

            <!-- Revenue Leaks -->
            <div class="card">
                <h2 style="margin-bottom: 20px; color: #667eea;">🚨 Revenue Leaks Identified</h2>
                <div id="leaksList" class="leak-list"></div>
            </div>

            <!-- Pain Points -->
            <div class="card">
                <h2 style="margin-bottom: 20px; color: #667eea;">⚠️ Top Pain Points</h2>
                <div id="painPointsList" class="pain-points"></div>
            </div>

            <!-- Recommendations -->
            <div class="card">
                <h2 style="margin-bottom: 20px; color: #667eea;">✅ Recommended Solutions</h2>
                <div id="recommendationsList" class="recommendations"></div>
            </div>
        </div>
    </div>

    <script>
        const form = document.getElementById('analysisForm');
        const inputForm = document.getElementById('inputForm');
        const loading = document.getElementById('loading');
        const results = document.getElementById('results');
        const errorDiv = document.getElementById('error');
        const analyzeBtn = document.getElementById('analyzeBtn');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            await runAnalysis();
        });

        async function runAnalysis() {
            errorDiv.classList.remove('active');

            const data = {
                businessProfile: {
                    industry: document.getElementById('industry').value,
                    averageTicketValue: parseFloat(document.getElementById('avgTicket').value),
                    monthlyLeadVolume: parseInt(document.getElementById('monthlyLeads').value),
                    leadSources: ['Website', 'Phone', 'Referrals'],
                    bookingMethod: document.getElementById('bookingMethod').value
                },
                leadHandling: {
                    missedCallsPercentage: parseFloat(document.getElementById('missedCalls').value),
                    avgResponseTimeMinutes: parseFloat(document.getElementById('responseTime').value),
                    followUpAttemptsPerLead: parseInt(document.getElementById('followUps').value),
                    showRatePercentage: parseFloat(document.getElementById('showRate').value),
                    closeRatePercentage: parseFloat(document.getElementById('closeRate').value)
                },
                capacity: {
                    staffSize: parseInt(document.getElementById('staffSize').value),
                    bookingLimitsPerDay: parseInt(document.getElementById('bookingsPerDay').value),
                    bookingLimitsPerWeek: parseInt(document.getElementById('bookingsPerWeek').value),
                    peakHours: ['10am-2pm', '4pm-7pm'],
                    deadHours: ['7am-9am']
                }
            };

            inputForm.style.display = 'none';
            loading.classList.add('active');
            analyzeBtn.disabled = true;

            try {
                const response = await fetch('/analyze', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });

                if (!response.ok) {
                    throw new Error(\`API error: \${response.status}\`);
                }

                const report = await response.json();
                displayResults(report);

            } catch (error) {
                console.error('Analysis error:', error);
                errorDiv.textContent = \`Error: \${error.message}. Please check your input and try again.\`;
                errorDiv.classList.add('active');
                inputForm.style.display = 'block';
            } finally {
                loading.classList.remove('active');
                analyzeBtn.disabled = false;
            }
        }

        function displayResults(report) {
            document.getElementById('summaryText').textContent = report.summary;

            document.getElementById('revenuePotential').textContent =
                '$' + Math.round(report.businessSummary.monthlyRevenuePotential).toLocaleString();
            document.getElementById('monthlyLoss').textContent =
                '$' + Math.round(report.totalMonthlyLoss).toLocaleString();
            document.getElementById('annualLoss').textContent =
                '$' + Math.round(report.totalAnnualLoss).toLocaleString();
            document.getElementById('confidence').textContent =
                report.confidenceScore + '%';

            const leaksList = document.getElementById('leaksList');
            leaksList.innerHTML = '';
            report.revenueLeaks.forEach(leak => {
                const leakDiv = document.createElement('div');
                leakDiv.className = 'leak-item';
                leakDiv.innerHTML = \`
                    <h3>\${leak.type}</h3>
                    <div class="leak-amount">-$\${Math.round(leak.monthlyLoss).toLocaleString()}/month</div>
                    <div class="leak-description">\${leak.description}</div>
                    <div style="margin-top: 10px; color: #666;">
                        <strong>Annual Impact:</strong> $\${Math.round(leak.annualizedLoss).toLocaleString()}
                    </div>
                \`;
                leaksList.appendChild(leakDiv);
            });

            const painPointsList = document.getElementById('painPointsList');
            painPointsList.innerHTML = '';
            report.painPoints.slice(0, 5).forEach(pp => {
                const ppDiv = document.createElement('div');
                ppDiv.className = 'pain-point';
                ppDiv.innerHTML = \`
                    <h3>\${pp.name}</h3>
                    <p>\${pp.description}</p>
                    <div class="impact">Impact: \${pp.revenueImpact}</div>
                    <div style="margin-top: 8px; color: #666;">
                        Automation Score: \${pp.automationOpportunityScore}/10
                    </div>
                \`;
                painPointsList.appendChild(ppDiv);
            });

            const recommendationsList = document.getElementById('recommendationsList');
            recommendationsList.innerHTML = '';
            report.recommendations.forEach((rec, index) => {
                const recDiv = document.createElement('div');
                recDiv.className = 'recommendation';
                recDiv.innerHTML = \`
                    <h3>Priority \${rec.priority}: \${rec.recommendedSolution.name}</h3>
                    <div class="problem">
                        <strong>Problem:</strong> \${rec.problemIdentified}
                    </div>
                    <div style="margin: 10px 0; font-weight: 600; color: #d63031;">
                        \${rec.financialImpact}
                    </div>
                    <div class="solution">
                        <div class="solution-name">\${rec.recommendedSolution.name}</div>
                        <p>\${rec.recommendedSolution.description}</p>
                        <div class="outcome">
                            <strong>💰 Revenue Recovered:</strong> $\${Math.round(rec.recommendedSolution.projectedOutcome.revenueRecovered).toLocaleString()}/month<br>
                            <strong>⏱️ Time Saved:</strong> \${rec.recommendedSolution.projectedOutcome.timeSaved}<br>
                            <strong>🚀 Capacity Unlocked:</strong> \${rec.recommendedSolution.projectedOutcome.capacityUnlocked}
                        </div>
                        <div style="margin-top: 10px; color: #666;">
                            <strong>Monthly Cost:</strong> $\${rec.recommendedSolution.estimatedMonthlyCost}
                        </div>
                    </div>
                    <a href="\${rec.nextStepCTA.url}" class="cta-button" target="_blank">
                        \${rec.nextStepCTA.text}
                    </a>
                \`;
                recommendationsList.appendChild(recDiv);
            });

            results.classList.add('active');
        }

        function showForm() {
            results.classList.remove('active');
            inputForm.style.display = 'block';
        }
    </script>
</body>
</html>
`;
