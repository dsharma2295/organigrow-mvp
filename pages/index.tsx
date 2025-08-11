import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Search, TrendingUp, Users, MessageSquare, Target, Zap, Brain, Globe, Calendar, Settings, ChevronRight, Star, ArrowUpRight, Download } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { HuggingFaceService } from '@/lib/huggingface';
import { RedditService } from '@/lib/reddit';

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

export default function OrganiGrow() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [appUrl, setAppUrl] = useState('');
  const [contentPrompt, setContentPrompt] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState(['instagram', 'tiktok']);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const { 
    auditResults, 
    generatedContent, 
    campaigns, 
    setAuditResults, 
    addGeneratedContent, 
    addCampaign 
  } = useAppStore();

  const hfService = new HuggingFaceService(process.env.HUGGINGFACE_API_KEY || '');
  const redditService = new RedditService();

  const runAppAudit = async () => {
    setIsAnalyzing(true);
    
    // Simulate comprehensive audit with real Reddit data
    try {
      const redditData = await redditService.getSubredditInfo('apps');
      
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
            "Optimize app store screenshots for better conversion (+15% installs expected)",
            "Increase TikTok posting frequency to 1 video/day (+40% reach expected)",
            "Implement user-generated content strategy (+25% engagement expected)",
            `Create Reddit presence in r/${redditData?.name || 'apps'} (+20% organic traffic expected)`,
            "Develop viral hashtag challenge campaign (+300% brand awareness expected)"
          ],
          redditInsights: redditData ? {
            targetSubreddit: redditData.name,
            subscribers: redditData.subscribers,
            activeUsers: redditData.active_users
          } : null
        };
        
        setAuditResults(results);
        setIsAnalyzing(false);
      }, 3000);
    } catch (error) {
      console.error('Audit error:', error);
      setIsAnalyzing(false);
    }
  };

  const generateContentSuite = async () => {
    setIsGenerating(true);
    
    try {
      for (const platform of selectedPlatforms) {
        const content = await hfService.generateContent(contentPrompt, platform);
        addGeneratedContent(content);
      }
    } catch (error) {
      console.error('Content generation error:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const createViralCampaign = () => {
    const campaignIdeas = [
      {
        name: "#30DayFitnessChallenge",
        platform: "TikTok + Instagram",
        concept: "Users post daily progress videos with app screenshots",
        viral_potential: 85,
        estimated_reach: "500K - 2M users",
        timeline: "4 weeks"
      },
      {
        name: "App Tier List Battle",
        platform: "X (Twitter) + Reddit",
        concept: "Create controversial tier list, encourage community debate",
        viral_potential: 78,
        estimated_reach: "100K - 800K users",
        timeline: "1 week"
      }
    ];

    const randomCampaign = campaignIdeas[Math.floor(Math.random() * campaignIdeas.length)];
    addCampaign(randomCampaign);
  };

  const TabButton = ({ id, label, icon: Icon, active, onClick }: any) => (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all w-full ${
        active 
          ? 'bg-violet-600 text-white shadow-lg' 
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      <Icon size={18} />
      <span className="font-medium">{label}</span>
    </button>
  );

  const MetricCard = ({ title, value, change, icon: Icon, color = "violet" }: any) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {change && (
            <p className="text-sm flex items-center mt-2 text-green-600">
              <ArrowUpRight size={14} className="mr-1" />
              {change} vs last month
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg bg-${color}-100`}>
          <Icon className={`text-${color}-600`} size={24} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg flex items-center justify-center animate-float">
              <Zap className="text-white" size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">OrganiGrow</h1>
              <p className="text-sm text-gray-600">AI-Powered Organic Marketing</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{mockData.appName}</p>
              <p className="text-xs text-gray-600">{mockData.category}</p>
            </div>
            <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center">
              <span className="text-violet-600 font-medium text-sm">PM</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="w-64 bg-white/50 backdrop-blur-lg border-r border-gray-200 h-screen sticky top-16 overflow-y-auto">
          <nav className="p-6 space-y-2">
            <TabButton id="dashboard" label="Dashboard" icon={BarChart} active={activeTab === 'dashboard'} onClick={setActiveTab} />
            <TabButton id="audit" label="Growth Audit" icon={Search} active={activeTab === 'audit'} onClick={setActiveTab} />
            <TabButton id="content" label="AI Content" icon={Brain} active={activeTab === 'content'} onClick={setActiveTab} />
            <TabButton id="campaigns" label="Viral Campaigns" icon={TrendingUp} active={activeTab === 'campaigns'} onClick={setActiveTab} />
            <TabButton id="analytics" label="Analytics" icon={Target} active={activeTab === 'analytics'} onClick={setActiveTab} />
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="text-center py-8">
                <h2 className="text-3xl font-bold gradient-text mb-4">Welcome to OrganiGrow</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  The world's most affordable B2C app marketing platform. Get started with our free growth audit!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard title="Total Installs" value={mockData.currentInstalls} change="+23%" icon={Download} />
                <MetricCard title="Social Followers" value={mockData.socialFollowers} change="+18%" icon={Users} color="cyan" />
                <MetricCard title="Engagement Rate" value={mockData.engagementRate} change="+0.8%" icon={MessageSquare} color="green" />
                <MetricCard title="Viral Coefficient" value="1.34" change="+0.12" icon={TrendingUp} color="yellow" />
              </div>

              <div className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">7-Day Growth Trend</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={contentPerformance}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="day" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip />
                    <Line type="monotone" dataKey="installs" stroke="#8B5CF6" strokeWidth={3} />
                    <Line type="monotone" dataKey="engagement" stroke="#06B6D4" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'audit' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Free Growth Audit</h2>
                <p className="text-gray-600">Get a comprehensive analysis of your app's organic growth potential</p>
              </div>

              <div className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      App Store URL or App Name
                    </label>
                    <input
                      type="text"
                      value={appUrl}
                      onChange={(e) => setAppUrl(e.target.value)}
                      placeholder="https://apps.apple.com/app/... or MyApp"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    onClick={runAppAudit}
                    disabled={isAnalyzing || !appUrl}
                    className="bg-gradient-to-r from-violet-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover:from-violet-700 hover:to-cyan-700 transition-all disabled:opacity-50 flex items-center space-x-2"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Analyzing with AI...</span>
                      </>
                    ) : (
                      <>
                        <Search size={18} />
                        <span>Run Free Audit</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {auditResults && (
                <div className="space-y-6">
                  <div className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Overall Growth Score</h3>
                      <div className="text-5xl font-bold gradient-text mb-4">{auditResults.overallScore}/100</div>
                      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                        <div 
                          className="bg-gradient-to-r from-violet-600 to-cyan-600 h-4 rounded-full transition-all duration-1000"
                          style={{width: `${auditResults.overallScore}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">AI-Generated Recommendations</h3>
                    <div className="space-y-3">
                      {auditResults.recommendations.map((rec: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs font-bold">{index + 1}</span>
                          </div>
                          <p className="text-gray-800">{rec}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'content' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">AI Content Generator</h2>
                <p className="text-gray-600">Generate viral-ready content using Hugging Face AI</p>
              </div>

              <div className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Content Topic
                    </label>
                    <textarea
                      value={contentPrompt}
                      onChange={(e) => setContentPrompt(e.target.value)}
                      placeholder="e.g., 'New AI feature launch' or 'User success story'"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 h-24 resize-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Platforms</label>
                    <div className="flex flex-wrap gap-3">
                      {['instagram', 'tiktok', 'twitter', 'reddit'].map(platform => (
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
                            className="text-violet-600 rounded focus:ring-violet-500"
                          />
                          <span className="text-gray-700 capitalize">{platform}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={generateContentSuite}
                    disabled={isGenerating || !contentPrompt}
                    className="bg-gradient-to-r from-violet-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover:from-violet-700 hover:to-cyan-700 transition-all disabled:opacity-50 flex items-center space-x-2"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Generating with AI...</span>
                      </>
                    ) : (
                      <>
                        <Brain size={18} />
                        <span>Generate Content</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {generatedContent.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">AI-Generated Content</h3>
                  {generatedContent.slice(0, 6).map((content: any, index: number) => (
                    <div key={index} className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-violet-100 text-violet-700 text-sm font-medium rounded-full capitalize">
                          {content.platform}
                        </span>
                        <span className="text-sm text-gray-500">
                          Predicted: {content.engagement_prediction}% engagement
                        </span>
                      </div>
                      <p className="text-gray-800 mb-3 leading-relaxed">{content.content}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {content.hashtags.slice(0, 3).map((tag: string, tagIndex: number) => (
                            <span key={tagIndex} className="text-sm text-cyan-600 bg-cyan-50 px-2 py-1 rounded">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">Best time: {content.optimal_time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'campaigns' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Viral Campaign Manager</h2>
                  <p className="text-gray-600">Create campaigns that go viral</p>
                </div>
                <button
                  onClick={createViralCampaign}
                  className="bg-gradient-to-r from-violet-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover:from-violet-700 hover:to-cyan-700 transition-all flex items-center space-x-2"
                >
                  <TrendingUp size={18} />
                  <span>Generate Campaign</span>
                </button>
              </div>

              {campaigns.length > 0 && (
                <div className="space-y-4">
                  {campaigns.map((campaign: any, index: number) => (
                    <div key={index} className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-medium text-gray-900">{campaign.name}</h4>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                          {campaign.viral_potential}% Viral Potential
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">{campaign.concept}</p>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600 font-medium">Platform</p>
                          <p className="text-gray-900">{campaign.platform}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 font-medium">Timeline</p>
                          <p className="text-gray-900">{campaign.timeline}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 font-medium">Est. Reach</p>
                          <p className="text-gray-900">{campaign.estimated_reach}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Growth Analytics</h2>
                <p className="text-gray-600">Track your organic growth performance</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Distribution</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={platformData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
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

                <div className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement by Platform</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={platformData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="name" stroke="#666" />
                      <YAxis stroke="#666" />
                      <Tooltip />
                      <Bar dataKey="engagement" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Success Banner */}
      <div className="fixed bottom-6 right-6 bg-gradient-to-r from-violet-600 to-cyan-600 text-white p-4 rounded-lg shadow-xl max-w-sm animate-float">
        <div className="flex items-center space-x-3">
          <Star className="text-yellow-300" size={20} />
          <div>
            <p className="font-medium">Zero Budget MVP!</p>
            <p className="text-sm opacity-90">Perfect for PM showcase</p>
          </div>
        </div>
      </div>
    </div>
  );
}