
import { GoogleGenerativeAI } from "@google/generative-ai";

// // Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyATOGIi4qj7M-z9N3QSa7o04g18Y-17z5Q");


// async function run() {
//   // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
//  try{ const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  
//   // const prompt = "interesting facts about india. "

//   // const result = await model.generateContent(prompt);
//   // const response = await result.response;
//   // const text = response.text();
//   // console.log(text);}
// }
//   catch (error){
//     console.error("Error:");
//     return "Oops! Something went wrong"
//   }
// }
// async function franklin(){
  
//   const prompt =`you are franklin from GTA 5`;
//   const response = await run(prompt);
//   console.log(response);
// }
// franklin();


// Access your API key as an environment variable (see "Set up your API key" above)
// 

// Function to send a prompt to Gemini and get a response
async function chatWithGemini(prompt, personality) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Construct the prompt with personality details
    let personalityPrompt = "";
    if (personality === "franklin") {
      personalityPrompt = `You are a franklin from GTA 5

User: ${prompt}`;
    } else if (personality === "trevor") {
      personalityPrompt = `You are trevor from GTA 5

User: ${prompt}`;
    } 
    else if (personality === "michael") {
      personalityPrompt = `You are michael from GTA 5

User: ${prompt}`;
    } 
    else {
      personalityPrompt = prompt; // Default to no personality
    }

    const result = await model.generateContent(personalityPrompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error("Error:", error);
    return "Oops! Something went wrong. Try again later.";
  }
}

async function run() {
  // User input prompt
  const prompt = "recipe for tomato soup?"; 

  // Chat with Gemini with different personalities
  const franklinResponse = await chatWithGemini(prompt, "franklin");
  console.log("franklin:", franklinResponse);

  // const trevorResponse = await chatWithGemini(prompt, "trevor");
  // console.log("trevor:", trevorResponse);
  // const michaelResponse = await chatWithGemini(prompt, "michael");
  // console.log("michael:", michaelResponse);

  
}

run();

