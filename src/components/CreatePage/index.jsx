import { Configuration, OpenAIApi } from "openai";
import React, { useState } from "react";

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default function CreatePage() {
  const [userPrompt, setUserPrompt] = useState("");

  return (
    <section>
      <input onChange={(e) => setUserPrompt(e.target.value)} />
      <button>Ganerate</button>
    </section>
  );
}
