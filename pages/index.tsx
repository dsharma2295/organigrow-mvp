import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Search, TrendingUp, Users, MessageSquare, Target, Zap, Brain, Globe, Calendar, Settings, ChevronRight, Star, ArrowUpRight, Download, Play, Eye, Sparkles, Rocket, BarChart3, Menu, X, CreditCard, DollarSign, Activity, TrendingDown } from 'lucide-react';

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

const notifications = [
  {
    id: 1,
    type: 'success',
    title: 'Growth Audit Complete!',
    message: 'Your app scored 87/100 - Excellent potential',
    time: '2 min ago',
    icon: '✅'
  },
  {
    id: 2,
    type: 'info',
    title: 'AI Content Generated',
    message: '5 viral posts created for Instagram & TikTok',
    time: '5 min ago',
    icon: '🤖'
  },
  {
    id: 3,
    type: 'success',
    title: 'Campaign Launched',
    message: '#30DayChallenge is trending with 12K views',
    time: '1 hour ago',
    icon: '🚀'
  }
];

export default function Home() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [appUrl, setAppUrl] = useState('');
  const [contentPrompt, setContentPrompt] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState(['instagram', 'tiktok']);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [auditResults, setAuditResults] = useState<any>(null);
  const [generatedContent, setGeneratedContent] = useState<any[]>([]);
  const [campaigns, setCampaigns] = useState<any[]>([]);

  const cards = [
    {
      id: 'overview',
      title: 'Overview',
      subtitle: 'Dashboard & Metrics',
      icon: BarChart3,
      value: '15.2K',
      change: '+23%',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 'audit',
      title: 'Growth Audit',
      subtitle: 'AI-Powered Analysis',
      icon: Search,
      value: '87/100',
      change: '+12 points',
      color: 'green',
      gradient: 'from-green-500 to-green-600'
    },
    {
      id: 'content',
      title: 'AI Content',
      subtitle: 'Viral Post Generator',
      icon: Brain,
      value: '24',
      change: '+8 posts',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      id: 'campaigns',
      title: 'Viral Campaigns',
      subtitle: 'Marketing Campaigns',
      icon: TrendingUp,
      value: '3',
      change: '+2 active',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      id: 'analytics',
      title: 'Analytics',
      subtitle: 'Performance Data',
      icon: Target,
      value: '4.2%',
      change: '+0.8% rate',
      color: 'red',
      gradient: 'from-red-500 to-red-600'
    }
  ];

  const runAppAudit = async () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      const auditScore = Math.floor(Math.random() * 30) + 70;
      const results = {
        overallScore: auditScore,
        recommendations: [
          "🎯 Optimize app store screenshots for better conversion (+15% installs)",
          "🚀 Increase TikTok posting frequency to 1 video/day (+40% reach)",
          "💬 Implement user-generated content strategy (+25% engagement)",
          "🔥 Create Reddit community presence (+20% organic traffic)"
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
        ? `🌟 ${contentPrompt} - Transform your app journey! #AppGrowth #Innovation`
        : platform === 'tiktok'
        ? `POV: ${contentPrompt} and it's game-changing 🔥 #AppTok #TechReview`
        : `${contentPrompt} - here's what we learned. Thread 🧵`,
      engagement_prediction: Math.floor(Math.random() * 20) + 80,
      hashtags: ['AppGrowth', 'Innovation', 'TechLife'],
      optimal_time: '2:00 PM - 4:00 PM',
      timestamp: new Date().toISOString()
    }));

    setTimeout(() => {
      setGeneratedContent(prev => [...mockContent, ...prev]);
      setIsGenerating(false);
    }, 2000);
  };

  const createViralCampaign = () => {
    const campaign = {
      name: "🔥 #30DayAppChallenge",
      platform: "TikTok + Instagram",
      concept: "Users share daily app usage and results",
      viral_potential: 85,
      estimated_reach: "500K - 2M users",
      timeline: "4 weeks"
    };
    setCampaigns(prev => [campaign, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg">
                <Zap className="text-white" size={22} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">OrganiGrow</h1>
                <p className="text-xs text-gray-600">AI-Powered Marketing</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 hover:bg-gray-100 rounded-xl transition-colors relative"
                >
                  <MessageSquare size={20} className="text-gray-600" />
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">3</span>
                  </div>
                </button>

                {showNotifications && (
                  <div className="absolute right-0 top-12 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 z-50">
                    <div className="p-4 border-b border-gray-100">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">Notifications</h3>
                        <button className="text-sm text-blue-600 font-medium">Mark all as read</button>
                      </div>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {notifications.map((notif) => (
                        <div key={notif.id} className="p-4 hover:bg-gray-50 border-b border-gray-50 last:border-0">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <span>{notif.icon}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-gray-900 text-sm">{notif.title}</p>
                              <p className="text-gray-600 text-sm">{notif.message}</p>
                              <p className="text-gray-400 text-xs mt-1">{notif.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* User Avatar */}
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-semibold text-sm">PM</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">$7,500</p>
                <p className="text-green-600 text-sm font-medium">+12% from last month</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                <DollarSign className="text-green-600" size={20} />
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Users</p>
                <p className="text-2xl font-bold text-gray-900">81,129</p>
                <p className="text-blue-600 text-sm font-medium">+8.2% growth</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Users className="text-blue-600" size={20} />
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm">
            <div>
              <p className="text-gray-600 text-sm font-medium">Success Rate</p>
              <p className="text-2xl font-bold text-gray-900">94.2%</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div className="bg-green-500 h-2 rounded-full w-[94%]"></div>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm">
            <div>
              <p className="text-gray-600 text-sm font-medium">Engagement</p>
              <p className="text-2xl font-bold text-gray-900">4.8%</p>
              <div className="flex items-center mt-2">
                <Activity className="text-orange-500" size={16} />
                <span className="text-orange-500 text-sm font-medium ml-1">+2.1%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
              className={`relative bg-white/70 backdrop-blur-sm rounded-3xl border border-white/50 shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                activeCard === card.id 
                  ? 'scale-110 z-30 shadow-2xl ring-4 ring-blue-200' 
                  : 'hover:shadow-xl'
              }`}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <card.icon className="text-white" size={28} />
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 font-medium">{card.change}</p>
                    <div className="flex items-center">
                      <ArrowUpRight className="text-green-600" size={16} />
                      <span className="text-green-600 font-semibold text-sm">+Growth</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.subtitle}</p>
                </div>

                <div className="mb-6">
                  <p className="text-3xl font-bold text-gray-900">{card.value}</p>
                </div>

                {/* Expandable Content */}
                {activeCard === card.id && (
                  <div className="space-y-4 animate-fadeIn">
                    {card.id === 'overview' && (
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-xl p-4">
                          <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={contentPerformance.slice(0, 4)}>
                              <Line 
                                type="monotone" 
                                dataKey="installs" 
                                stroke="#0A73B8" 
                                strokeWidth={3}
                                dot={false}
                              />
                              <XAxis dataKey="day" hide />
                              <YAxis hide />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-gray-900">15.2K</p>
                            <p className="text-sm text-gray-600">Total Installs</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-gray-900">8.9K</p>
                            <p className="text-sm text-gray-600">Followers</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {card.id === 'audit' && (
                      <div className="space-y-4">
                        {!auditResults && (
                          <div>
                            <input
                              type="text"
                              value={appUrl}
                              onChange={(e) => setAppUrl(e.target.value)}
                              placeholder="Enter app name..."
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                            <button
                              onClick={runAppAudit}
                              disabled={isAnalyzing || !appUrl}
                              className="w-full mt-3 bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
                            >
                              {isAnalyzing ? (
                                <>
                                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                  <span>Analyzing...</span>
                                </>
                              ) : (
                                <>
                                  <Rocket size={16} />
                                  <span>Run Audit</span>
                                </>
                              )}
                            </button>
                          </div>
                        )}
                        
                        {auditResults && (
                          <div className="space-y-3">
                            <div className="text-center">
                              <p className="text-2xl font-bold text-green-600">{auditResults.overallScore}/100</p>
                              <p className="text-sm text-gray-600">Growth Score</p>
                            </div>
                            <div className="space-y-2">
                              {auditResults.recommendations.slice(0, 2).map((rec: string, idx: number) => (
                                <div key={idx} className="bg-green-50 p-3 rounded-lg">
                                  <p className="text-sm text-gray-700">{rec}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {card.id === 'content' && (
                      <div className="space-y-4">
                        <textarea
                          value={contentPrompt}
                          onChange={(e) => setContentPrompt(e.target.value)}
                          placeholder="Describe your content idea..."
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 text-sm h-20 resize-none"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          {['instagram', 'tiktok'].map(platform => (
                            <label key={platform} className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={selectedPlatforms.includes(platform)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setSelectedPlatforms([...selectedPlatforms, platform]);
                                  } else {
                                    setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform));
                                  }
                                }}
                                className="text-purple-600 rounded"
                              />
                              <span className="text-sm capitalize">{platform}</span>
                            </label>
                          ))}
                        </div>
                        <button
                          onClick={generateContentSuite}
                          disabled={isGenerating || !contentPrompt}
                          className="w-full bg-purple-600 text-white px-4 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
                        >
                          {isGenerating ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                              <span>Generating...</span>
                            </>
                          ) : (
                            <>
                              <Brain size={16} />
                              <span>Generate</span>
                            </>
                          )}
                        </button>
                        
                        {generatedContent.length > 0 && (
                          <div className="space-y-2 max-h-40 overflow-y-auto">
                            {generatedContent.slice(0, 2).map((content: any, idx: number) => (
                              <div key={idx} className="bg-purple-50 p-3 rounded-lg">
                                <p className="text-xs font-medium text-purple-700 capitalize">{content.platform}</p>
                                <p className="text-sm text-gray-700 truncate">{content.content}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {card.id === 'campaigns' && (
                      <div className="space-y-4">
                        <button
                          onClick={createViralCampaign}
                          className="w-full bg-orange-600 text-white px-4 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2"
                        >
                          <TrendingUp size={16} />
                          <span>Create Campaign</span>
                        </button>
                        
                        {campaigns.length > 0 && (
                          <div className="space-y-2">
                            {campaigns.slice(0, 2).map((campaign: any, idx: number) => (
                              <div key={idx} className="bg-orange-50 p-3 rounded-lg">
                                <p className="text-sm font-medium text-orange-700">{campaign.name}</p>
                                <p className="text-xs text-gray-600">{campaign.platform}</p>
                                <p className="text-xs text-orange-600 font-medium">{campaign.viral_potential}% viral potential</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {card.id === 'analytics' && (
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-xl p-4">
                          <ResponsiveContainer width="100%" height={150}>
                            <BarChart data={platformData.slice(0, 3)}>
                              <Bar dataKey="engagement" fill="#ef4444" radius={[4, 4, 0, 0]} />
                              <XAxis dataKey="name" hide />
                              <YAxis hide />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <p className="text-lg font-bold text-gray-900">6.2%</p>
                            <p className="text-xs text-gray-600">Avg Engagement</p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold text-gray-900">12.4K</p>
                            <p className="text-xs text-gray-600">Total Reach</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-white/50 shadow-lg">
            <button className="p-4 bg-blue-100 hover:bg-blue-200 rounded-2xl transition-colors">
              <CreditCard className="text-blue-600" size={24} />
            </button>
            <button className="p-4 bg-green-100 hover:bg-green-200 rounded-2xl transition-colors">
              <Download className="text-green-600" size={24} />
            </button>
            <button className="p-4 bg-purple-100 hover:bg-purple-200 rounded-2xl transition-colors">
              <Settings className="text-purple-600" size={24} />
            </button>
            <button className="p-4 bg-orange-100 hover:bg-orange-200 rounded-2xl transition-colors">
              <Target className="text-orange-600" size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Success Badge */}
      <div className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-2xl shadow-xl animate-pulse">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Star className="text-yellow-300" size={16} />
          </div>
          <div>
            <p className="font-bold text-sm">🎉 Card UI Live!</p>
            <p className="text-green-100 text-xs">@dsharma2295</p>
          </div>
        </div>
      </div>
    </div>
  );
}
