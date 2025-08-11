import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Search, TrendingUp, Users, MessageSquare, Target, Zap, Brain, Globe, Calendar, Settings, ChevronRight, Star, ArrowUpRight, Download, Play, Eye, Sparkles, Rocket, BarChart3 } from 'lucide-react';

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

const COLORS = ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B'];

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [appUrl, setAppUrl] = useState('');
  const [contentPrompt, setContentPrompt] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState(['instagram', 'tiktok']);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [auditResults, setAuditResults] = useState(null);
  const [generatedContent, setGeneratedContent] = useState([]);
  const [campaigns, setCampaigns] = useState([]);

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
        ? `🚀 ${contentPrompt} - Transform your app journey! What's your biggest growth challenge? #AppGrowth #Innovation #TechLife`
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="20" cy="20" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Header */}
      <header className="relative bg-black/20 backdrop-blur-xl border-b border-white/10 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/25">
                <Zap className="text-white" size={24} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                OrganiGrow
              </h1>
              <p className="text-purple-300 text-sm font-medium">AI-Powered Marketing Platform</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-4 text-right">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-white/20">
                <p className="text-white font-semibold">{mockData.appName}</p>
                <p className="text-purple-300 text-sm">{mockData.category}</p>
              </div>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold">PM</span>
            </div>
          </div>
        </div>
      </header>

      <div className="relative flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="w-72 bg-black/20 backdrop-blur-xl border-r border-white/10 h-screen sticky top-20 overflow-y-auto">
          <nav className="p-6 space-y-3">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3, badge: null },
              { id: 'audit', label: 'Growth Audit', icon: Search, badge: 'FREE' },
              { id: 'content', label: 'AI Content', icon: Brain, badge: 'AI' },
              { id: 'campaigns', label: 'Viral Campaigns', icon: TrendingUp, badge: 'HOT' },
              { id: 'analytics', label: 'Analytics', icon: Target, badge: null }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all group ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/25'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <tab.icon size={20} />
                  <span className="font-medium">{tab.label}</span>
                </div>
                {tab.badge && (
                  <span className="px-2 py-1 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-bold rounded-full">
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              {/* Hero Section */}
              <div className="text-center py-12">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 backdrop-blur-lg rounded-full px-6 py-3 border border-violet-500/30 mb-6">
                  <Sparkles className="text-violet-400" size={20} />
                  <span className="text-white font-medium">World's Most Affordable B2C Marketing</span>
                </div>
                <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6">
                  Grow Your App
                  <br />
                  <span className="text-4xl">Without Breaking the Bank</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Get the same results as $50,000/month agencies for under $500/month. 
                  AI-powered organic growth that actually works.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Total Installs", value: mockData.currentInstalls, change: "+23%", icon: Download, color: "from-violet-500 to-purple-600" },
                  { title: "Social Followers", value: mockData.socialFollowers, change: "+18%", icon: Users, color: "from-cyan-500 to-blue-600" },
                  { title: "Engagement Rate", value: mockData.engagementRate, change: "+0.8%", icon: MessageSquare, color: "from-green-500 to-emerald-600" },
                  { title: "Viral Coefficient", value: "1.34", change: "+0.12", icon: TrendingUp, color: "from-yellow-500 to-orange-600" }
                ].map((metric, index) => (
                  <div key={index} className="relative group">
                    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all hover:scale-105">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${metric.color} shadow-lg`}>
                          <metric.icon className="text-white" size={24} />
                        </div>
                        <div className="text-green-400 text-sm font-medium flex items-center">
                          <ArrowUpRight size={16} className="mr-1" />
                          {metric.change}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm font-medium mb-1">{metric.title}</p>
                      <p className="text-3xl font-bold text-white">{metric.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Main Chart */}
              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">📈 Growth Performance</h3>
                  <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                    <div className="w-3 h-3 bg-violet-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm">Live Data</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={contentPerformance}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="day" stroke="#9CA3AF" fontSize={12} />
                    <YAxis stroke="#9CA3AF" fontSize={12} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'rgba(17, 24, 39, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '12px',
                        color: 'white'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="installs" 
                      stroke="#8B5CF6" 
                      strokeWidth={4} 
                      dot={{fill: '#8B5CF6', strokeWidth: 2, r: 6}}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="engagement" 
                      stroke="#06B6D4" 
                      strokeWidth={4} 
                      dot={{fill: '#06B6D4', strokeWidth: 2, r: 6}}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'audit' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-4">🎯 Free Growth Audit</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Get a comprehensive AI-powered analysis of your app's organic growth potential
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 max-w-2xl mx-auto">
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-3 text-lg">
                      🔗 App Store URL or App Name
                    </label>
                    <input
                      type="text"
                      value={appUrl}
                      onChange={(e) => setAppUrl(e.target.value)}
                      placeholder="https://apps.apple.com/app/your-app or 'MyAwesomeApp'"
                      className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 text-lg"
                    />
                  </div>
                  <button
                    onClick={runAppAudit}
                    disabled={isAnalyzing || !appUrl}
                    className="w-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-violet-700 hover:to-cyan-600 transition-all disabled:opacity-50 shadow-xl flex items-center justify-center space-x-3"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        <span>🤖 AI Analyzing Your App...</span>
                      </>
                    ) : (
                      <>
                        <Rocket size={24} />
                        <span>🚀 Run Free AI Audit</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {auditResults && (
                <div className="space-y-6 max-w-4xl mx-auto">
                  <div className="bg-gradient-to-r from-violet-600/20 to-cyan-600/20 backdrop-blur-xl p-8 rounded-2xl border border-violet-500/30">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-4">🎯 Overall Growth Score</h3>
                      <div className="text-7xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                        {auditResults.overallScore}/100
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-4 mb-4">
                        <div 
                          className="bg-gradient-to-r from-green-400 to-cyan-400 h-4 rounded-full transition-all duration-2000"
                          style={{width: `${auditResults.overallScore}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20">
                    <h3 className="text-2xl font-bold text-white mb-6">🎯 AI Recommendations</h3>
                    <div className="space-y-4">
                      {auditResults.recommendations.map((rec, index) => (
                        <div key={index} className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-6 rounded-xl border border-green-500/30">
                          <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-sm">{index + 1}</span>
                            </div>
                            <p className="text-white text-lg">{rec}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'content' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-4">🤖 AI Content Generator</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Generate viral-ready content using Hugging Face AI
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 max-w-3xl mx-auto">
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-3 text-lg">
                      ✨ Content Topic
                    </label>
                    <textarea
                      value={contentPrompt}
                      onChange={(e) => setContentPrompt(e.target.value)}
                      placeholder="e.g., 'New AI feature launch' or 'User success story'"
                      className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 h-32 resize-none text-lg"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-3 text-lg">🎯 Platforms</label>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { id: 'instagram', name: 'Instagram', icon: '📸' },
                        { id: 'tiktok', name: 'TikTok', icon: '🎵' },
                        { id: 'twitter', name: 'X (Twitter)', icon: '🐦' },
                        { id: 'reddit', name: 'Reddit', icon: '👥' }
                      ].map(platform => (
                        <label key={platform.id} className="cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedPlatforms.includes(platform.id)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedPlatforms([...selectedPlatforms, platform.id]);
                              } else {
                                setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform.id));
                              }
                            }}
                            className="sr-only"
                          />
                          <div className={`p-4 rounded-xl border-2 transition-all ${
                            selectedPlatforms.includes(platform.id)
                              ? 'bg-gradient-to-r from-violet-600 to-purple-600 border-white/40 shadow-lg'
                              : 'bg-white/5 border-white/20 hover:border-white/40'
                          }`}>
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{platform.icon}</span>
                              <span className="text-white font-medium">{platform.name}</span>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={generateContentSuite}
                    disabled={isGenerating || !contentPrompt}
                    className="w-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-violet-700 hover:to-cyan-600 transition-all disabled:opacity-50 shadow-xl flex items-center justify-center space-x-3"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        <span>🤖 AI Generating...</span>
                      </>
                    ) : (
                      <>
                        <Brain size={24} />
                        <span>✨ Generate Content</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {generatedContent.length > 0 && (
                <div className="space-y-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white text-center">🎨 AI-Generated Content</h3>
                  {generatedContent.slice(0, 4).map((content, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold rounded-full capitalize">
                          {content.platform}
                        </span>
                        <span className="text-green-400 font-medium">
                          🎯 {content.engagement_prediction}% predicted
                        </span>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl mb-4">
                        <p className="text-white text-lg">{content.content}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {content.hashtags.slice(0, 3).map((tag, tagIndex) => (
                            <span key={tagIndex} className="text-cyan-300 bg-cyan-500/20 px-3 py-1 rounded-full text-sm">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <span className="text-gray-400 text-sm">⏰ {content.optimal_time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'campaigns' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-white mb-4">🚀 Viral Campaigns</h2>
                  <p className="text-xl text-gray-300">Create campaigns that break the internet</p>
                </div>
                <button
                  onClick={createViralCampaign}
                  className="bg-gradient-to-r from-pink-600 to-red-500 text-white px-6 py-3 rounded-xl font-bold hover:from-pink-700 hover:to-red-600 transition-all flex items-center space-x-2 shadow-xl"
                >
                  <TrendingUp size={20} />
                  <span>🔥 Generate Campaign</span>
                </button>
              </div>

              {campaigns.length > 0 && (
                <div className="space-y-6 max-w-4xl mx-auto">
                  {campaigns.map((campaign, index) => (
                    <div key={index} className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/30">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-2xl font-bold text-white">{campaign.name}</h4>
                        <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-full">
                          🔥 {campaign.viral_potential}% Viral Score
                        </span>
                      </div>
                      <p className="text-gray-200 text-lg mb-6">{campaign.concept}</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white/5 p-4 rounded-xl">
                          <p className="text-purple-300 font-medium text-sm">Platform</p>
                          <p className="text-white font-bold">{campaign.platform}</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-xl">
                          <p className="text-purple-300 font-medium text-sm">Timeline</p>
                          <p className="text-white font-bold">{campaign.timeline}</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-xl">
                          <p className="text-purple-300 font-medium text-sm">Est. Reach</p>
                          <p className="text-white font-bold">{campaign.estimated_reach}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-4">📊 Growth Analytics</h2>
                <p className="text-xl text-gray-300">Deep insights into your organic growth</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-6">🎯 Platform Distribution</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={platformData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        dataKey="followers"
                        label={({ name, value }) => `${name}: ${value}`}
                      >
                        {platformData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-6">⚡ Engagement Rates</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={platformData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="name" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip />
                      <Bar dataKey="engagement" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Success Badge */}
      <div className="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl shadow-2xl max-w-sm border border-green-400/30 animate-pulse">
        <div className="flex items-center space-x-3">
          <Star className="text-yellow-300" size={24} />
          <div>
            <p className="font-bold text-lg">🎉 MVP LIVE!</p>
            <p className="text-green-100 text-sm">Built by @dsharma2295</p>
          </div>
        </div>
      </div>
    </div>
  );
}