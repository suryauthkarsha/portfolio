
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are Surya Uthkarsha's AI Vision Agent. Surya is a 14-year-old entrepreneur from Bengaluru, India.
His projects include:
- Stealth Startup (Founder): Currently building a new venture in stealth, supported by a microgrant from Lift Off.
- Roadyz (Founder/CEO): Gamified road safety app for kids.
- Edza AI (Head of Growth): AI-powered tutor platform.
- The Marg Initiative: NGO focused on SDG 3.6 (Road Safety).
- Emerging Equity (Founder's Office): Helping early-stage founders scale.

Your personality: High energy, visionary, yet practical. You believe in "learning by doing" and the power of young builders.
Answer questions about Surya's work, the Lift Off microgrant, his vision for road safety, his experience scaling startups at a young age, and what he's looking for in potential collaborators or investors.
Always keep responses concise (under 3 sentences unless asked for detail).
`;

/**
 * Fetches response from Gemini following strict SDK guidelines.
 */
export const getGeminiResponse = async (userPrompt: string) => {
  try {
    // Initialize with direct process.env.API_KEY as per guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Use ai.models.generateContent with model and contents
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        topP: 0.95,
        topK: 40,
      },
    });

    // Access .text property directly (not a method)
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently processing some deep insights. Let's chat in a moment!";
  }
};
