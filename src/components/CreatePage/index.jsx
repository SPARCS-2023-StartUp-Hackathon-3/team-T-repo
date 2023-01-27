import { Configuration, OpenAIApi } from "openai";
import React, { useState } from "react";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPEN_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default function CreatePage() {
  const [userPrompt, setUserPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const generateImage = async () => {
    const imageParameters = {
      prompt: userPrompt,
      n: 1,
      size: "512x512",
    };

    try {
      const response = await openai.createImage(imageParameters);
      const urlData = response.data.data[0].url;
      setImageUrl(urlData);

      response.status(200).json({
        success: true,
        data: imageUrl,
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <section>
      {imageUrl && <img src={imageUrl} alt="ai_image" />}
      <input onChange={(e) => setUserPrompt(e.target.value)} />
      <button onClick={() => generateImage()}>Ganerate</button>
    </section>
  );
}
