// pages/api/rag.js
import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

// import { GoogleGenerativeAI } from "@google/generative-ai"; // Deprecated
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const POST = async (req) => {
  const { query } = await req.json();

  console.log(query);

  // 1. Get embedding for query
//   const embedding = await getEmbedding(query); // use Google API or local model

  // 2. Search vector DB
//   const docs = await searchSimilarDocs(embedding); // returns top k relevant docs

  // 3. Combine query + context
  // const context = docs.map(doc => doc.text).join("\n");
  const context = `
  Brainware University is a private institution located in Barasat, Kolkata, West Bengal, India. Established on February 25, 2016, under the West Bengal Act XXXI of 2015, it is recognized by the University Grants Commission (UGC) and holds affiliations with several professional bodies, including the Association of Indian Universities (AIU), Pharmacy Council of India (PCI), Bar Council of India (BCI), and Indian Nursing Council (INC) . ([Brainware University](https://en.wikipedia.org/wiki/Brainware_University?utm_source=chatgpt.com))

**Campus and Infrastructure**

The university's urban campus spans 9 acres and is equipped with modern facilities such as on-campus hostels, multisport arenas, clinics for mental and general healthcare, and allied healthcare labs . Additional amenities include a reading room, yoga room, gym, seminar halls, food court, playground, wellness centre, ATM, and bus services . ([Brainware University](https://en.wikipedia.org/wiki/Brainware_University?utm_source=chatgpt.com), [Brainware University - West Bengal - Propelld](https://propelld.com/site/college/brainware-university?utm_source=chatgpt.com))

**Academic Programs**

Brainware University offers over 70 undergraduate, postgraduate, diploma, and doctoral programs across various disciplines, including Management, Engineering, Computer Science, Media Science, Multimedia, Law, Commerce, Pharmacy, Biotechnology, Agriscience, Nutrition Science, Nursing, Allied Health Sciences, and Skill Development . These programs are delivered through ten different schools, each focusing on a specific area of study . ([Brainware University](https://en.wikipedia.org/wiki/Brainware_University?utm_source=chatgpt.com))

**Research and Rankings**

The university has a strong focus on research, with 418 research papers published in peer-reviewed journals, 113 book chapters, and 59 patents to its name . It has been recognized as the No. 1 Technical University in West Bengal according to the IIRF Ranking 2023 . ([Brainware University](https://en.wikipedia.org/wiki/Brainware_University?utm_source=chatgpt.com), [Brainware University - West Bengal - Propelld](https://propelld.com/site/college/brainware-university?utm_source=chatgpt.com))

**Student Life and Events**

Brainware University hosts several annual events, including "Anandadhara," the university's annual fest; "Creative Communion," an intercollege mega-event; and "Texibition," the annual techfest featuring prototype model-building competitions, video gaming, and coding competitions . The university also offers various talent clubs, such as Photography, Communication, Cinematography, and Technology, to foster student engagement and creativity . ([Brainware University](https://en.wikipedia.org/wiki/Brainware_University?utm_source=chatgpt.com))

**Placement and Industry Connect**

Brainware University boasts a placement record of 98% for the year 2024, with over 500 clients participating in campus recruitment . The university's "Campus-to-Corporate Connect" program offers students the opportunity to transform theoretical knowledge into practical skills through industry visits, masterclasses, and live business projects . ([Campus Placement 2025 - Brainware University](https://www.brainwareuniversity.ac.in/placement-overview.php?utm_source=chatgpt.com))

For more detailed information, you can visit the official website: [Brainware University](https://www.brainwareuniversity.ac.in/). 
  `;

  const prompt = `Answer the following based on the context:\n${context}\n\n and the question is below: \n\nQuestion: ${query}`;

  // 4. Query Gemini
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  const answer = response.text;

//   res.status(200).json({ answer });
  return new NextResponse(JSON.stringify({answer}),{
    status: 200
  });
}
