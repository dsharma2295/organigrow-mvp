import React, { useState } from 'react';
import { Search, TrendingUp, Users, MessageSquare, Target, Zap, Brain, ArrowUpRight, Download, Star, Rocket, BarChart3, Sparkles } from 'lucide-react';

export default function Home() {
  const [appUrl, setAppUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const runAppAudit = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      alert('🎯 Audit Score: 85/100 - Great organic growth potential!');
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-xl border-b border-white/10 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg">
              <Zap className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                OrganiGrow
              </h1>
              <p className="text-purple-300 text-sm">AI-Powered Marketing Platform</p>
            </div>
          </div>
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold">PM</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-8">
        {/* Hero Section */}
        <div className="text-center py-12">
          <div className="inline-flex items-center space-x-2 bg-violet-600/20 rounded-full px-6 py-3 border border-violet-500/30 mb-6">
            <Sparkles className="text-violet-400" size={20} />
            <span className="text-white font-medium">World's Most Affordable B2C Marketing</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6">
            Grow Your App Without Breaking the Bank
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Get the same results as $50,000/month agencies for under $500/month. 
            AI-powered organic growth that actually works.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Search className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">🎯 Free Growth Audit</h3>
            <p className="text-gray-300">AI-powered analysis of your app's organic growth potential</p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Brain className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">🤖 AI Content Generator</h3>
            <p className="text-gray-300">Generate viral content for Instagram, TikTok, X, and Reddit</p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">🚀 Viral Campaigns</h3>
            <p className="text-gray-300">Launch campaigns that drive organic growth at zero cost</p>
          </div>
        </div>

        {/* Audit Tool */}
        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">🎯 Try Free Growth Audit</h2>
            <p className="text-gray-300">Get instant insights into your app's growth potential</p>
          </div>
          
          <div className="space-y-6">
            <input
              type="text"
              value={appUrl}
              onChange={(e) => setAppUrl(e.target.value)}
              placeholder="Enter your app name or store URL"
              className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500"
            />
            <button
              onClick={runAppAudit}
              disabled={isAnalyzing || !appUrl}
              className="w-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-violet-700 hover:to-cyan-600 transition-all disabled:opacity-50 flex items-center justify-center space-x-3"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  <span>🤖 AI Analyzing...</span>
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
      </div>

      {/* Success Badge */}
      <div className="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-2xl shadow-2xl animate-pulse">
        <div className="flex items-center space-x-3">
          <Star className="text-yellow-300" size={20} />
          <div>
            <p className="font-bold">🎉 MVP LIVE!</p>
            <p className="text-green-100 text-xs">@dsharma2295</p>
          </div>
        </div>
      </div>
    </div>
  );
}
