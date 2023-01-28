import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dbService } from "../../fbase";
import styled from "styled-components";


export default function PostDetailPage() {
  let navigate = useNavigate();
  const { postId } = useParams();
  const [detailObj, setDetailObj] = useState([]);

  useEffect(() => {
    dbService.collection("posts").doc(postId).get().then((doc) => {
      const postObj = {
        id: doc.id,
        ...doc.data(),
      };
      setDetailObj(postObj);
    });
  }, [])


  return (
    <>
      <>
        {/* 상단배너*/}
      </>
      <St.PostContainer>
        <St.ImageContainer>
          <St.Image imgurl={detailObj.attachmentUrl} />
        </St.ImageContainer>
        <St.TextContainer>
          <>
          <St.Title>
           {detailObj.title}
          </St.Title>
          <St.Content>
            {detailObj.content}
          </St.Content>
          <St.Category>
            #{detailObj.category}
          </St.Category>
          <St.AiModel>
            {detailObj.aiModel}
          </St.AiModel>
          <St.Prompt>
            <b>Prompt</b><br></br>
            <St.Inside>
              {detailObj.prompt}
            </St.Inside>
          </St.Prompt>
          <St.NonPrompt>
            <b>Negative_prompt</b><br></br>
            <St.Inside>
              {detailObj.nonPrompt}
            </St.Inside>
          </St.NonPrompt>
</>
        </St.TextContainer>

      </St.PostContainer>
    </>
  )

}

const St = {
  PostContainer: styled.div`
  width: 65rem;
  height: 51.87rem;
  margin: 10% auto 10% auto;
  background-color: white;
  display: table;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  `
  ,
  ImageContainer: styled.div`
  width: 42.75rem;
  height: 51.87rem;
  background-color: black;
  float:left;
  border: 1px solid blue;
  align-items: center;
  text-content: center;
  display: table-cell;
  vertical-align: middle;
  `
  ,
  Image: styled.div`
  width: 40.75rem;
  height: 49.87rem;
  background-color: white;
  margin: 1rem;
  border: 1px solid black;
  background-image: url(${(props) => props.imgurl});
  background-size: cover;
  `
  ,
  TextContainer: styled.div`
  display:inline-block;
  width: 22.25rem;
  height: 51.87rem;
  margin-left: 1.63rem;
  background-color: white;
  float:left;
  border: 1px solid green;
  `
  ,
  Title: styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  `
  ,
  Content: styled.div`
  width: 16rem;
  height: 10.50rem;
  padding: 1.5rem;
  font-size: 1.5rem;
  margin-bottom: 1.0rem;
  margin-left: 1.5rem;
  background-color: #d9d9d9;
  overflow: auto;
  border-radius: 1.0rem;
  `
  ,
  Category: styled.div`
  font-size: 1.5rem;
  margin-bottom: 1.0rem;
  margin-left: 1.5rem;
  `
  ,
  AiModel: styled.div`
  font-size: 1.5rem;
  margin-bottom: 1.0rem;
  margin-left: 1.5rem;
  `
  ,
  Prompt: styled.div`
  font-size: 1.5rem;
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
  `
  ,
  NonPrompt: styled.div`
  font-size: 1.5rem;
  margin-left: 1.5rem;
  `
  ,
  Inside: styled.div`
  width: 16rem;
  height: 7.95rem;
  padding: 1.0rem;
  font-size: 1.0rem;
  margin-bottom: 1.5rem;
  background-color: #d9d9d9;
  overflow: auto;
  border-radius: 1.0rem;
  `
}

/*
position: absolute; top:0; left: 0;
  width: 100%;
  height: 100%;
  */