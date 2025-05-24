import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

export async function POST(request) {
  try {
    const { message } = await request.json()

    const model = genAI.getGenerativeModel({ model: "gemini-pro" })

    const prompt = `You are a helpful AI assistant specializing in food services, restaurants, and catering businesses. 
    You help with menu planning, pricing strategies, service optimization, customer service, and food business management.
    
    User question: ${message}
    
    Please provide helpful, practical advice related to food services. Keep responses concise but informative.`

    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    return Response.json({ response: text })
  } catch (error) {
    console.error("Error calling Gemini API:", error)
    return Response.json({ error: "Failed to get response from AI assistant" }, { status: 500 })
  }
}
