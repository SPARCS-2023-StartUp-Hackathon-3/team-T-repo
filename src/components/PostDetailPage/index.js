import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dbService } from "../../fbase";

export default function PostDetailPage() {
  let navigate = useNavigate();
  const {postId} = useParams();

  const [detailObj, setDetailObj] = useState({});
  
  useEffect(() => {
    dbService.collection("posts").doc(postId).get().then((doc) => {
      const postObj = {
        id: doc.id,
        ...doc.data(),
      };
      setDetailObj(postObj);
    });
  })
  
  return(
    <>
     <div>PostDetailPage</div>;
      <div>{detailObj.title}</div>
      <div>{detailObj.content}</div>
      <div>{detailObj.category}</div>
      <div>{detailObj.aiModel}</div>
      <div>{detailObj.prompt}</div>
      <div>{detailObj.nonPrompt}</div>
      {detailObj.attachmentUrl && (
        <img src={detailObj.attachmentUrl} width="50%" height="50%" />
      )}

    
    </>
  )
  
}
