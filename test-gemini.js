require('dotenv').config({path: '.env.local'});
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function run() {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    // Test direct sendMessage
    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: "Halo" }] },
        { role: "model", parts: [{ text: "Hai" }] }
      ]
    });
    const result = await chat.sendMessage([{ text: "apa itu kkn bangka bandhawa" }]);
    console.log("Success:", result.response.text());
  } catch(e) {
    console.error("Error Detail:", e);
  }
}
run();
