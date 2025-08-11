import type { NextApiRequest, NextApiResponse } from 'next'
import { HuggingFaceService } from '@/lib/huggingface'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { prompt, platforms } = req.body;

  if (!prompt || !platforms) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const hfService = new HuggingFaceService(process.env.HUGGINGFACE_API_KEY!);
    const results = [];

    for (const platform of platforms) {
      const content = await hfService.generateContent(prompt, platform);
      results.push(content);
    }

    res.status(200).json({ success: true, content: results });
  } catch (error) {
    console.error('Content generation error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}