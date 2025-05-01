// pages/api/rag.js
import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

// import { GoogleGenerativeAI } from "@google/generative-ai"; // Deprecated
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const POST = async (req, res) => {
  const { query } = req.body;

  // 1. Get embedding for query
//   const embedding = await getEmbedding(query); // use Google API or local model

  // 2. Search vector DB
//   const docs = await searchSimilarDocs(embedding); // returns top k relevant docs

  // 3. Combine query + context
//   const context = docs.map(doc => doc.text).join("\n");
//   const prompt = `Answer the following based on the context:\n${context}\n\nQuestion: ${query}`;
  const prompt = `Answer the following qustion:\n\nQuestion: ${query}`;

  // 4. Query Gemini
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works in a few words",
  });
  const answer = response.text;

//   res.status(200).json({ answer });
  return new NextResponse(JSON.stringify({answer}),{
    status: 200
  });
}
