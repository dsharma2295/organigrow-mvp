import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Search, TrendingUp, Users, MessageSquare, Target, Zap, Brain, Globe, Calendar, Settings, ChevronRight, Star, ArrowUpRight, Download, Play, Eye, Sparkles, Rocket, BarChart3, Menu, X } from 'lucide-react';

const mockData = {
  appName: "FitTracker Pro",
  category: "Health & Fitness",
  currentInstalls: "15,240",
  organicGrowthRate: "+23%",
  socialFollowers: "8,940",
  engagementRate: "4.2%"
};

const platformData = [
  { name: 'Instagram', followers: 3200, engagement: 5.8, posts: 45, growth: 12 },
  { name: 'TikTok', followers: 2800, engagement: 8.2, posts: 32, growth: 28 },
  { name: 'X (Twitter)', followers: 1940, engagement: 3.1, posts: 67, growth: 8 },
  { name: 'Reddit', followers: 1000, engagement: 12.4, posts: 23, growth: 15 }
];

const contentPerformance = [
  { day: 'Mon', installs: 120, engagement: 340, reach: 1200 },
  { day: 'Tue', installs: 150, engagement: 420, reach: 1450 },
  { day: 'Wed', installs: 180, engagement: 580, reach: 1680 },
  { day: 'Thu', installs: 200, engagement: 620, reach: 1890 },
  { day: 'Fri', installs: 240, engagement: 750, reach: 2100 },
  { day: 'Sat', installs: 320, engagement: 890, reach: 2400 },
  { day: 'Sun', installs: 280, engagement: 720, reach: 2200 }
];

const COLORS = ['#0A73B8', '#A8C090', '#FF6B6B', '#2C3E50'];

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');
  const [appUrl, setAppUrl] = useState('');
  const [contentPrompt, setContentPrompt] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState(['instagram', 'tiktok']);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [auditResults, setAuditResults] = useState<any>(null);
  const [generatedContent, setGeneratedContent] = useState<any[]>([]);
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'audit', label: 'Growth Audit', icon: Search },
    { id: 'content', label: 'AI Content', icon: Brain },
    { id: 'campaigns', label: 'Viral Campaigns', icon: TrendingUp },
    { id: 'analytics', label: 'Analytics', icon: Target }
  ];

  const runAppAudit = async () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      const auditScore = Math.floor(Math.random() * 30) + 70;
      const results = {
        overallScore: auditScore,
        breakdown: {
          appStoreOptimization: Math.floor(Math.random() * 20) + 75,
          socialPresence: Math.floor(Math.random() * 25) + 65,
          contentQuality: Math.floor(Math.random() * 20) + 70,
          communityEngagement: Math.floor(Math.random() * 15) + 80,
          viralPotential: Math.floor(Math.random() * 30) + 60
        },
        recommendations: [
          "🎯 Optimize app store screenshots for better conversion (+15% installs expected)",
          "🚀 Increase TikTok posting frequency to 1 video/day (+40% reach expected)",
          "💬 Implement user-generated content strategy (+25% engagement expected)",
          "🔥 Create Reddit community presence (+20% organic traffic expected)",
          "✨ Develop viral hashtag challenge campaign (+300% brand awareness expected)"
        ]
      };
      setAuditResults(results);
      setIsAnalyzing(false);
    }, 3000);
  };

  const generateContentSuite = async () => {
    setIsGenerating(true);
    const mockContent = selectedPlatforms.map(platform => ({
      platform,
      content: platform === 'instagram' 
        ? `🌟 ${contentPrompt} - Transform your app journey! What's your biggest growth challenge? #AppGrowth #Innovation #TechLife`
        : platform === 'tiktok'
        ? `POV: ${contentPrompt} and it's actually game-changing 🔥 #AppTok #Innovation #TechReview`
        : platform === 'twitter'
        ? `${contentPrompt} - here's what we learned from 1000+ users. Thread 🧵`
        : `Discussion: ${contentPrompt} - sharing real insights from our journey`,
      engagement_prediction: Math.floor(Math.random() * 20) + 80,
      hashtags: platform === 'instagram' ? ['AppGrowth', 'Innovation', 'TechLife'] : ['TechTok', 'Innovation'],
      optimal_time: platform === 'instagram' ? '2:00 PM - 4:00 PM' : '6:00 PM - 10:00 PM',
      timestamp: new Date().toISOString()
    }));

    setTimeout(() => {
      setGeneratedContent(prev => [...mockContent, ...prev]);
      setIsGenerating(false);
    }, 2000);
  };

  const createViralCampaign = () => {
    const campaignIdeas = [
      {
        name: "🔥 #30DayAppChallenge",
        platform: "TikTok + Instagram",
        concept: "Users share daily app usage and results with progress videos",
        viral_potential: 85,
        estimated_reach: "500K - 2M users",
        timeline: "4 weeks"
      },
      {
        name: "⚡ App Tier List Battle",
        platform: "X + Reddit",
        concept: "Create controversial app tier list, encourage community debate",
        viral_potential: 78,
        estimated_reach: "100K - 800K users",
        timeline: "1 week"
      }
    ];

    const randomCampaign = campaignIdeas[Math.floor(Math.random() * campaignIdeas.length)];
    setCampaigns(prev => [randomCampaign, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Apple-inspired Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Zap className="text-white" size={18} />
              </div>
              <span className="text-xl font-semibold text-gray-900">OrganiGrow</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-6 py-4 space-y-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 w-full px-3 py-2 text-left text-sm font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'text-blue-600'
                      : 'text-gray-700'
                  }`}
                >
                  <tab.icon size={18} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <section className="text-center py-16">
              <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
                <Sparkles className="text-blue-600" size={16} />
                <span className="text-sm font-medium text-blue-700">World's Most Affordable B2C Marketing</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Grow Your App<br />
                <span className="text-blue-600">Without Breaking the Bank</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Get the same results as $50,000/month agencies for under $500/month. 
                AI-powered organic growth that actually works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setActiveTab('audit')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Start Free Audit
                </button>
                <button className="bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-200">
                  Watch Demo
                </button>
              </div>
            </section>

            {/* Key Metrics */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Total Installs", value: mockData.currentInstalls, change: "+23%", icon: Download, color: "blue" },
                { title: "Social Followers", value: mockData.socialFollowers, change: "+18%", icon: Users, color: "green" },
                { title: "Engagement Rate", value: mockData.engagementRate, change: "+0.8%", icon: MessageSquare, color: "coral" },
                { title: "Viral Coefficient", value: "1.34", change: "+0.12", icon: TrendingUp, color: "charcoal" }
              ].map((metric, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${
                      metric.color === 'blue' ? 'bg-blue-100' :
                      metric.color === 'green' ? 'bg-green-100' :
                      metric.color === 'coral' ? 'bg-red-100' : 'bg-gray-100'
                    }`}>
                      <metric.icon className={`${
                        metric.color === 'blue' ? 'text-blue-600' :
                        metric.color === 'green' ? 'text-green-600' :
                        metric.color === 'coral' ? 'text-red-500' : 'text-gray-600'
                      }`} size={20} />
                    </div>
                    <div className="text-green-600 text-sm font-medium flex items-center">
                      <ArrowUpRight size={14} className="mr-1" />
                      {metric.change}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm font-medium mb-1">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                </div>
              ))}
            </section>

            {/* Growth Chart */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Growth Performance</h2>
                <div className="flex items-center space-x-2 bg-green-50 rounded-lg px-3 py-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-700">Live Data</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={contentPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="day" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="installs" 
                    stroke="#0A73B8" 
                    strokeWidth={3} 
                    dot={{fill: '#0A73B8', strokeWidth: 2, r: 4}}
                    activeDot={{r: 6, fill: '#0A73B8'}}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="engagement" 
                    stroke="#A8C090" 
                    strokeWidth={3} 
                    dot={{fill: '#A8C090', strokeWidth: 2, r: 4}}
                    activeDot={{r: 6, fill: '#A8C090'}}
                  />
                </LineChart>
              </ResponsiveContainer>
            </section>
          </div>
        )}

        {activeTab === 'audit' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">🎯 Free Growth Audit</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get a comprehensive AI-powered analysis of your app's organic growth potential
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-900 font-medium mb-3 text-lg">
                    App Store URL or App Name
                  </label>
                  <input
                    type="text"
                    value={appUrl}
                    onChange={(e) => setAppUrl(e.target.value)}
                    placeholder="https://apps.apple.com/app/your-app or 'MyAwesomeApp'"
                    className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                  />
                </div>
                <button
                  onClick={runAppAudit}
                  disabled={isAnalyzing || !appUrl}
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 flex items-center justify-center space-x-3"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      <span>🤖 AI Analyzing Your App...</span>
                    </>
                  ) : (
                    <>
                      <Rocket size={20} />
                      <span>🚀 Run Free AI Audit</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {auditResults && (
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl border border-blue-200">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Overall Growth Score</h2>
                    <div className="text-6xl font-bold text-blue-600 mb-6">
                      {auditResults.overallScore}/100
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-2000"
                        style={{width: `${auditResults.overallScore}%`}}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 AI Recommendations</h2>
                  <div className="space-y-4">
                    {auditResults.recommendations.map((rec: string, index: number) => (
                      <div key={index} className="bg-green-50 p-6 rounded-xl border border-green-200">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">{index + 1}</span>
                          </div>
                          <p className="text-gray-800 text-lg leading-relaxed">{rec}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Add other tab content similarly... */}
      </main>

      {/* Floating Success Badge */}
      <div className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-2xl shadow-lg max-w-sm border border-green-400">
        <div className="flex items-center space-x-3">
          <Star className="text-yellow-300" size={20} />
          <div>
            <p className="font-bold">🎉 MVP LIVE!</p>
            <p className="text-green-100 text-sm">Built by @dsharma2295</p>
          </div>
        </div>
      </div>
    </div>
  );
}
