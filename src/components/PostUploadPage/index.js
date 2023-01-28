import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { dbService, storageService } from "../../fbase";
import { v4 as uuidv4 } from "uuid";
import { St } from "./style"
import Header from "../common/Header"



export default function PostUploadPage({userObj,isLoggedIn}) {
  //입력받을 내용
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [attachment, setAttachment] = useState("");
  const [category, setCategory] = useState("");
  const [aiModel, setAiModel] = useState("");
  const [prompt, setPrompt] = useState("");
  const [nonPrompt, setNonPrompt] = useState("");

  var today = new Date();

  var year = today.getFullYear();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  var day = ('0' + today.getDate()).slice(-2);

  var dateString = year + '-' + month  + '-' + day;

  //이동할 경로
  const navigate = useNavigate();
  
  //제출
  const onFormSubmit = async (event) => {
      event.preventDefault();
      navigate(`/art/category/${category}`);

      const userRef = dbService.collection("user").doc(`${userObj.uid}`);
      const doc = await userRef.get();

      let attachmentUrl = "";
      if(attachment != ""){
          const attachmentRef = storageService.ref().child(`${category}/${dateString}/${"id"}/${uuidv4()}`);
          const response = await attachmentRef.putString(attachment, "data_url");
          attachmentUrl = await response.ref.getDownloadURL();
      }
      
      const postObj = {
          randomidx: Math.random(),
          title: title,
          content: content,
          attachmentUrl: attachmentUrl,
          category: category,
          aiModel: aiModel,
          prompt: prompt,
          nonPrompt: nonPrompt,
          datetime: Date.now(),
          nickname: doc.data().nickname,
      }
  
      await dbService.collection("posts").add(postObj);
  
      setTitle("");
      setContent("");
      setAttachment("");
      setCategory("");
      setAiModel("");
      setPrompt("");
      setNonPrompt("");
  }
  
  const onChange = (event) => {
      const{
          target:{value},
      } = event;
      
      if(event.target.id === "title"){
          setTitle(value);
      }
      else if(event.target.id === "content"){
          setContent(value);
      }
      else if(event.target.id === "category"){
          setCategory(value);
      }
      else if(event.target.id === "aiModel"){
          setAiModel(value);
      }
      else if(event.target.id === "prompt"){
          setPrompt(value);
      }
      else if(event.target.id === "nonPrompt"){
          setNonPrompt(value);
      }
  }

  const onFileChange = (event) => {
      const{
          target:{files},
      } = event;
      const theFile = files[0];
      const reader = new FileReader();
      reader.onloadend = (finishedEvent) => {
          const{
              currentTarget:{result},
          } = finishedEvent;
          setAttachment(result);
      };
      reader.readAsDataURL(theFile);
  }
  const onClearAttachment = () => setAttachment(null);

  const alertlog = () => {
    alert('로그인해야 이용가능합니다.');
    window.location.href="/auth";
  }
  return(
    <>
        <Header />
        <St.Bar >
            <St.barbox>
            <St.bartext1>AI Arts</St.bartext1>
            <St.bartext2>AI Comics</St.bartext2>
            <St.bartext3>AI Novels</St.bartext3>
            </St.barbox>
        </St.Bar>

      {isLoggedIn ? (<St.UploadContainer>


        <St.FileUpload>
          {attachment ? (
              <div>
                <St.Img>
                  <img src={attachment} height="225px"/>
                  </St.Img>
                  <button onClick={onClearAttachment}>Clear</button>
              </div>
          ):(
            <St.FileButton
              id="attachment"
              type="file"
              accept="image/*"
              onChange={onFileChange}
          >
            </St.FileButton>
          )
          }
          
          <br></br>
        </St.FileUpload>
        
        <St.InputContainer>
        <St.InputTitle>
          제목
          </St.InputTitle>

          <St.Inputbox 
          id="title"  
          className="title" 
          value={title}
          onChange={onChange}
          type="text" 
          placeholder="Title" 
          required />
          <St.InputTitle>
          내용
          </St.InputTitle>

          <St.Inputbox 
              id="content"  
              className="content" 
              value={content}
              onChange={onChange}
              type="textarea" 
              placeholder="작품에 대한 부연 설명" 
              required
          />

          <St.InputTitle>
          주제
          </St.InputTitle>

          <St.selectbox
              id="category"  
              className="category"
              onChange={onChange}
              required
          >
              <option name="anime" value="anime">만화</option>
              <option name="realistic" value="realistic">실사</option>
              <option name="3D" value="3D">3D</option>
              <option name="fantasy" value="fantasy">판타지</option>
              <option name="fanart" value="fanart">팬아트</option>
              <option name="landscape" value="landscape">풍경</option>
              <option name="painting" value="painting">수채화</option>
              <option name="gameArt" value="gameArt">게임 아트</option>
          </St.selectbox>

          <St.InputTitle>AI모델</St.InputTitle>

          <St.Inputbox 
              id="aiModel"  
              className="aiModel" 
              value={aiModel}
              onChange={onChange}
              type="text" 
              placeholder="ex. DALL·E 2" 
              required
          />

          <St.InputTitle>
          Prompt
          </St.InputTitle>

          <St.Inputbox 
              id="prompt"  
              className="prompt" 
              value={prompt}
              onChange={onChange}
              type="text" 
              placeholder="smile, wonderful winter garden, majestic" 
              required
          />
          <St.InputTitle>
          Navigate_prompt
          </St.InputTitle>

          <St.Inputbox 
              id="nonPrompt"  
              className="nonPrompt" 
              value={nonPrompt}
              onChange={onChange}
              type="text" 
              placeholder="ugly, tiling, poorly drawn hands, poorly drawn feet, poorly drawn face" 
              required
          />
           <St.button_input onClick={onFormSubmit} />
          </St.InputContainer>


    </St.UploadContainer> ) : (
     <>
        {alertlog()}

                </>)}
    </>

  );
    };

