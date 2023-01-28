import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService, dbService, firebaseInstance } from "../../fbase";
import AuthForm from "./AuthForm";
import styled from "styled-components";

export default function AuthPage() {
  let navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [userUid, SetUserUid] = useState("");

  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    setUserData(data);

    const userObj = {
      uid: data.user.uid,
    }

    const userRef = dbService.collection('user').doc(`${data.user.uid}`);
    const doc = await userRef.get();
    if (!doc.exists) {  //첫 로그인이라면
      console.log('No such document!');
      navigate("/auth/nickname", {
        replace: false,
        state: { userObj: userObj }
      })
    } else {  //아니라면
      console.log('Document data:', doc.data());
      navigate("/", {
        replace: false,
        state: { userObj: userObj }
      })
    }


  };

  return (
      <div className="authContainer">

        <St.Authority>
          <div>
            <AuthForm />
          </div>
        </St.Authority>
        <St.GoogleLoginForm>
          <button onClick={onSocialClick} name="google" className="authBtn">
            Continue with Google
          </button>
        </St.GoogleLoginForm>
      </div>
  );
}


const St = {

  Authority: styled.div`
  width: 20rem;
  height: 10rem;
  margin: 10% auto 0 70%;
  background-color: white;
  display: table;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  `,

  GoogleLoginForm: styled.button`
  width: 20rem;
  height: 10rem;
  margin: 10% 70% 0 70%;
  background-color: white;
  display: table;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  `

}