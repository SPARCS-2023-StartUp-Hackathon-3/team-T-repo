import { Configuration, OpenAIApi } from "openai";
import React, { useState, useRef } from "react";
//import { saveAs } from "file-saver";
//import domtoimage from "dom-to-image";
//import { exportComponentAsPNG } from "react-component-export-image";

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

  // blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
  // const onDownloadBtn = () => {
  //   const download = imageRef.current;
  //   domtoimage.toBlob(download).then((blob) => {
  //     saveAs(blob, "card.png");
  //   });
  // };

  // 새창에 열림
  // const downloadImage = () => {
  //   console.log(imageUrl);
  //   saveAs(imageUrl, `download.png`);
  // };

  // 이또한 cors error
  // const ComponentToPrint = React.forwardRef((props, ref) => (
  //   <div ref={ref}>{imageUrl && <img src={imageUrl} alt="ai_image" />}</div>
  // ));
  //     <ComponentToPrint ref={imageRef} />;

  return (
    <section>
      {imageUrl && <img src={imageUrl} alt="ai_image" />}
      <input onChange={(e) => setUserPrompt(e.target.value)} />
      <button onClick={() => generateImage()}>Ganerate</button>
      <button>Download</button>
    </section>
  );
}

/*
      <button onClick={() => exportComponentAsPNG(imageRef)}>Download</button>
      <a
        href={imageUrl}
        download="ai_sample.png"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Download2</button>
      </a>
*/
