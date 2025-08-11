import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Search, TrendingUp, Users, MessageSquare, Target, Zap, Brain, ArrowUpRight, Download, Star, Rocket, BarChart3, Bell, X } from 'lucide-react';

const mockData = {
  platformData: [
    { name: 'Instagram', followers: 3200, engagement: 5.8, growth: 12 },
    { name: 'TikTok', followers: 2800, engagement: 8.2, growth: 28 },
    { name: 'X (Twitter)', followers: 1940, engagement: 3.1, growth: 8 },
    { name: 'Reddit', followers: 1000, engagement: 12.4, growth: 15 }
  ],
  contentPerformance: [
    { day: 'Mon', installs: 120, engagement: 340 },
    { day: 'Tue', installs: 150, engagement: 420 },
    { day: 'Wed', installs: 180, engagement: 580 },
    { day: 'Thu', installs: 200, engagement: 620 },
    { day: 'Fri', installs: 240, engagement: 750 },
    { day: 'Sat', installs: 320, engagement: 890 },
    { day: 'Sun', installs: 280, engagement: 720 }
  ]
};

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

export default function Home() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [appUrl, setAppUrl] = useState('');
  const [contentPrompt, setContentPrompt] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [auditResults, setAuditResults] = useState<any>(null);
  const [generatedContent, setGeneratedContent] = useState<any[]>([]);
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);

  const runAudit = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setAuditResults({
        score: 87,
        recommendations: [
          "Optimize app store screenshots (+15% installs)",
          "Increase TikTok frequency (+40% reach)",
          "Add user-generated content (+25% engagement)"
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const generateContent = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedContent([
        { platform: 'Instagram', content: `🚀 ${contentPrompt} - Amazing results! #AppGrowth #Innovation`, prediction: 85 },
        { platform: 'TikTok', content: `POV: ${contentPrompt} 🔥 #AppTok #Viral`, prediction: 92 }
      ]);
      setIsGenerating(false);
    }, 1500);
  };

  const createCampaign = () => {
    setCampaigns([{
      name: "#30DayChallenge",
      platform: "TikTok + Instagram", 
      potential: 85,
      reach: "500K-2M users"
    }]);
  };

  const cards = [
    {
      id: 'overview',
      title: 'Overview',
      subtitle: 'Dashboard & Metrics',
      icon: BarChart3,
      value: '15.2K',
      change: '+23%',
      bgColor: 'bg-blue-500',
      textColor: 'text-blue-600'
    },
    {
      id: 'audit', 
      title: 'Growth Audit',
      subtitle: 'AI Analysis',
      icon: Search,
      value: auditResults ? `${auditResults.score}/100` : 'Run Audit',
      change: auditResults ? '+12 pts' : 'Free',
      bgColor: 'bg-green-500',
      textColor: 'text-green-600'
    },
    {
      id: 'content',
      title: 'AI Content', 
      subtitle: 'Viral Generator',
      icon: Brain,
      value: generatedContent.length.toString(),
      change: '+Generated',
      bgColor: 'bg-purple-500',
      textColor: 'text-purple-600'
    },
    {
      id: 'campaigns',
      title: 'Viral Campaigns',
      subtitle: 'Marketing',
      icon: TrendingUp, 
      value: campaigns.length.toString(),
      change: '+Active',
      bgColor: 'bg-orange-500',
      textColor: 'text-orange-600'
    },
    {
      id: 'analytics',
      title: 'Analytics',
      subtitle: 'Performance',
      icon: Target,
      value: '4.8%',
      change: '+0.8%',
      bgColor: 'bg-red-500', 
      textColor: 'text-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg">
                <Zap className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">OrganiGrow</h1>
                <p className="text-sm text-gray-600">AI Marketing Platform</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <Bell size={20} className="text-gray-600" />
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">3</span>
                </div>
              </button>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">PM</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Hero Stats Row */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Marketing Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Download className="text-blue-600" size={20} />
                </div>
                <p className="text-2xl font-bold text-gray-900">15,240</p>
                <p className="text-sm text-gray-600">Total Installs</p>
                <p className="text-xs text-green-600 font-semibold">+23% growth</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="text-green-600" size={20} />
                </div>
                <p className="text-2xl font-bold text-gray-900">8,940</p>
                <p className="text-sm text-gray-600">Social Followers</p>
                <p className="text-xs text-green-600 font-semibold">+18% growth</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="text-orange-600" size={20} />
                </div>
                <p className="text-2xl font-bold text-gray-900">4.2%</p>
                <p className="text-sm text-gray-600">Engagement Rate</p>
                <p className="text-xs text-green-600 font-semibold">+0.8% growth</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="text-red-600" size={20} />
                </div>
                <p className="text-2xl font-bold text-gray-900">1.34</p>
                <p className="text-sm text-gray-600">Viral Coefficient</p>
                <p className="text-xs text-green-600 font-semibold">+0.12 growth</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
              className={`relative bg-white rounded-3xl shadow-xl border border-gray-100 cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                activeCard === card.id 
                  ? 'scale-110 z-30 ring-4 ring-blue-200 shadow-2xl' 
                  : 'hover:shadow-2xl'
              }`}
              style={{ minHeight: activeCard === card.id ? '500px' : '280px' }}
            >
              {/* Card Header */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 ${card.bgColor} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <card.icon className="text-white" size={28} />
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-green-600 font-semibold">{card.change}</p>
                    <ArrowUpRight className="text-green-600 ml-auto" size={16} />
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-600">{card.subtitle}</p>
                  <p className="text-3xl font-bold mt-4 text-gray-900">{card.value}</p>
                </div>

                {/* Expandable Content */}
                {activeCard === card.id && (
                  <div className="space-y-6 animate-fadeIn">
                    
                    {card.id === 'overview' && (
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-xl p-4">
                          <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={mockData.contentPerformance}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                              <XAxis dataKey="day" fontSize={12} />
                              <YAxis fontSize={12} />
                              <Tooltip />
                              <Line type="monotone" dataKey="installs" stroke="#3B82F6" strokeWidth={3} />
                              <Line type="monotone" dataKey="engagement" stroke="#10B981" strokeWidth={3} />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center bg-blue-50 p-4 rounded-xl">
                            <p className="text-2xl font-bold text-blue-600">15.2K</p>
                            <p className="text-sm text-gray-600">Total Installs</p>
                          </div>
                          <div className="text-center bg-green-50 p-4 rounded-xl">
                            <p className="text-2xl font-bold text-green-600">8.9K</p>
                            <p className="text-sm text-gray-600">Followers</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {card.id === 'audit' && (
                      <div className="space-y-4">
                        {!auditResults ? (
                          <div className="space-y-4">
                            <input
                              type="text"
                              value={appUrl}
                              onChange={(e) => setAppUrl(e.target.value)}
                              placeholder="Enter your app name or URL..."
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            />
                            <button
                              onClick={runAudit}
                              disabled={isAnalyzing || !appUrl}
                              className="w-full bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
                            >
                              {isAnalyzing ? (
                                <>
                                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                  <span>Analyzing...</span>
                                </>
                              ) : (
                                <>
                                  <Rocket size={18} />
                                  <span>Run Free Audit</span>
                                </>
                              )}
                            </button>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <div className="text-center bg-green-50 p-6 rounded-xl">
                              <p className="text-4xl font-bold text-green-600">{auditResults.score}/100</p>
                              <p className="text-sm text-gray-600">Growth Score</p>
                            </div>
                            <div className="space-y-2">
                              {auditResults.recommendations.map((rec: string, idx: number) => (
                                <div key={idx} className="bg-green-50 p-3 rounded-lg border border-green-200">
                                  <p className="text-sm text-gray-700">✅ {rec}</p>
                                </div>
                              ))}
                            </div>
                            <button 
                              onClick={() => setAuditResults(null)}
                              className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                              Run New Audit
                            </button>
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
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 h-24 resize-none"
                        />
                        <button
                          onClick={generateContent}
                          disabled={isGenerating || !contentPrompt}
                          className="w-full bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
                        >
                          {isGenerating ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                              <span>Generating...</span>
                            </>
                          ) : (
                            <>
                              <Brain size={18} />
                              <span>Generate Content</span>
                            </>
                          )}
                        </button>
                        
                        {generatedContent.length > 0 && (
                          <div className="space-y-3">
                            {generatedContent.map((content: any, idx: number) => (
                              <div key={idx} className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                                <div className="flex justify-between items-start mb-2">
                                  <span className="text-xs font-semibold text-purple-700 uppercase">{content.platform}</span>
                                  <span className="text-xs text-green-600 font-bold">{content.prediction}% prediction</span>
                                </div>
                                <p className="text-sm text-gray-700">{content.content}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {card.id === 'campaigns' && (
                      <div className="space-y-4">
                        <button
                          onClick={createCampaign}
                          className="w-full bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2"
                        >
                          <TrendingUp size={18} />
                          <span>Create Viral Campaign</span>
                        </button>
                        
                        {campaigns.length > 0 && (
                          <div className="space-y-3">
                            {campaigns.map((campaign: any, idx: number) => (
                              <div key={idx} className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                                <h4 className="font-semibold text-orange-800 mb-1">{campaign.name}</h4>
                                <p className="text-sm text-gray-600 mb-2">{campaign.platform}</p>
                                <div className="flex justify-between">
                                  <span className="text-xs text-orange-600 font-bold">{campaign.potential}% viral potential</span>
                                  <span className="text-xs text-gray-600">{campaign.reach}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {card.id === 'analytics' && (
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-xl p-4">
                          <ResponsiveContainer width="100%" height={180}>
                            <BarChart data={mockData.platformData}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                              <XAxis dataKey="name" fontSize={10} />
                              <YAxis fontSize={10} />
                              <Tooltip />
                              <Bar dataKey="engagement" fill="#EF4444" radius={[4, 4, 0, 0]} />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center bg-red-50 p-4 rounded-xl">
                            <p className="text-xl font-bold text-red-600">6.8%</p>
                            <p className="text-xs text-gray-600">Avg Engagement</p>
                          </div>
                          <div className="text-center bg-blue-50 p-4 rounded-xl">
                            <p className="text-xl font-bold text-blue-600">42K</p>
                            <p className="text-xs text-gray-600">Total Reach</p>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                )}
              </div>

              {/* Click indicator */}
              {activeCard !== card.id && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gray-100 px-4 py-2 rounded-full">
                    <p className="text-xs text-gray-600 font-medium">Click to expand</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Action Bar */}
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 flex items-center space-x-4">
            <button className="p-3 bg-blue-100 hover:bg-blue-200 rounded-xl transition-colors">
              <Download className="text-blue-600" size={20} />
            </button>
            <button className="p-3 bg-green-100 hover:bg-green-200 rounded-xl transition-colors">
              <Target className="text-green-600" size={20} />
            </button>
            <button className="p-3 bg-purple-100 hover:bg-purple-200 rounded-xl transition-colors">
              <Brain className="text-purple-600" size={20} />
            </button>
            <button className="p-3 bg-orange-100 hover:bg-orange-200 rounded-xl transition-colors">
              <TrendingUp className="text-orange-600" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Success Badge */}
      <div className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-2xl shadow-xl">
        <div className="flex items-center space-x-2">
          <Star className="text-yellow-300" size={18} />
          <div>
            <p className="font-bold text-sm">✨ Interactive Cards!</p>
            <p className="text-green-100 text-xs">Click cards to expand</p>
          </div>
        </div>
      </div>
    </div>
  );
}
