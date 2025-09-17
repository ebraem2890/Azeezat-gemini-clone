

// main.js or in a browser script tag
const API_KEY = "AIzaSyCzRAVf-DpQm9YXWCPqc_zGa63hC3-SwN4"; // <<< REPLACE THIS!
const MODEL_NAME = "gemini-1.5-flash-latest";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

async function runChat(prompt) {
 

  const requestBody = {
    contents: [
      {
        parts: [{ text: prompt }],
      },
    ],
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `API error: ${response.status} ${response.statusText} - ${JSON.stringify(
          errorData
        )}`
      );
    }

    const data = await response.json();
    const generatedText = data.candidates[0].content.parts[0].text;
    console.log(generatedText);
    return generatedText;
  } catch (error) {
    console.error("Error generating content:", error);
  }
}

export default runChat;