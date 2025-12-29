
import { GoogleGenAI } from "@google/genai";

export const getAssistantResponse = async (userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: userMessage,
    config: {
      systemInstruction: `You are a helpful and polite virtual assistant for "Darul Quran Academy". 
      Our academy offers:
      - Noorani Qaida (Beginner level)
      - Tajweed (Pronunciation rules)
      - Hifz (Quran Memorization)
      - Arabic Language
      - Islamic Studies (Fiqh, Hadith, Seerah)
      
      Your goal is to help prospective students and parents with information about courses, 
      the enrollment process, and our certified teachers. Keep your tone respectful and spiritual.
      Always try to encourage the user to sign up for a free trial session.`,
    },
  });

  return response.text;
};
