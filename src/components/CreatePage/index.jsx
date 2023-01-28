import { Configuration, OpenAIApi } from "openai";
import React, { useState, useRef } from "react";
import { St } from "./style"
import Header from "../common/Header"

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default function CreatePage({isLoggedIn, userObj}) {
  console.log(isLoggedIn, userObj)
  const [userPrompt, setUserPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const imageRef = useRef("");

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
    <>
    <Header />
    <St.Container>
      <St.maintext>
        당신의 창의력을 마음껏 발휘해보세요! 
      </St.maintext>
      <St.Container2>
        <St.Inputbox onChange={(e) => setUserPrompt(e.target.value)} />
        <St.button_made onClick={() => generateImage()} />
      </St.Container2>
      <St.Container3>
      {imageUrl? (<img src={imageUrl} alt="ai_image" />) : (<p/>)}
      </St.Container3>
      <St.Ex />
      </St.Container>
    </>
  );
}

