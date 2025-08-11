import { create } from 'zustand'

interface AppState {
  user: any
  currentApp: any
  auditResults: any
  generatedContent: any[]
  campaigns: any[]
  analytics: any
  isLoading: boolean
  
  setUser: (user: any) => void
  setCurrentApp: (app: any) => void
  setAuditResults: (results: any) => void
  addGeneratedContent: (content: any) => void
  addCampaign: (campaign: any) => void
  setAnalytics: (analytics: any) => void
  setLoading: (loading: boolean) => void
  clearContent: () => void
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  currentApp: null,
  auditResults: null,
  generatedContent: [],
  campaigns: [],
  analytics: null,
  isLoading: false,

  setUser: (user) => set({ user }),
  setCurrentApp: (app) => set({ currentApp: app }),
  setAuditResults: (results) => set({ auditResults: results }),
  addGeneratedContent: (content) => set((state) => ({ 
    generatedContent: [content, ...state.generatedContent] 
  })),
  addCampaign: (campaign) => set((state) => ({ 
    campaigns: [campaign, ...state.campaigns] 
  })),
  setAnalytics: (analytics) => set({ analytics }),
  setLoading: (loading) => set({ isLoading: loading }),
  clearContent: () => set({ generatedContent: [] }),
}))