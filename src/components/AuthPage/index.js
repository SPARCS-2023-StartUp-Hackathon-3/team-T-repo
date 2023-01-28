import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService, dbService, firebaseInstance } from "../../fbase";
import AuthForm from "./AuthForm";
import styled from "styled-components";
import  { IcLogoIcon } from "../../asset";
import Background from "../../asset/LogInBackground.png";
import { IcGoogleButton } from "../../asset";

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
    };

    const userRef = dbService.collection("user").doc(`${data.user.uid}`);
    const doc = await userRef.get();
    if (!doc.exists) {
      //첫 로그인이라면
      console.log("No such document!");
      navigate("/login/nickname", {
        replace: false,
        state: { userObj: userObj },
      });
    } else {
      //아니라면
      console.log("Document data:", doc.data());
      navigate("/", {
        replace: false,
        state: { userObj: userObj },
      });
    }
  };

  return (
      <div className="authContainer">
        <St.Background>
            <div>
            </div>
        </St.Background>
        <St.TeamLogo>
          <IcLogoIcon />
        </St.TeamLogo>
          <AuthForm />
        <St.GoogleLoginButton
          type="button"
          onClick={onSocialClick}
          name="google"
          className="authBtn" >
          </St.GoogleLoginButton>
      </div>
  );
}


const St = {


  Background: styled.div`
  position: absolute;
  width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  background-size: cover;
  background-image: url(${Background});
  `,

  TeamLogo: styled.div`
  position: absolute;
  width: 25%;
  height: 3rem;
  left: 71%;
  top: 10rem;
  background-size: 100%;
  align-items: right;
  `,

  Authority: styled.input`
  width: 20rem;
  height: 2rem;
  margin: 15rem auto 0 71%;
  display: table;
  flex-direction: column;
  align-items: left;
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  `,

  GoogleLoginButton: styled.input`
  width: 25%;
  height: 2rem;
  margin: 2rem auto 0 71%;
  background-color: white;
  display: table;
  flex-direction: column;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  vertical-align: middle;
  border: 0;
  background-image: url(${IcGoogleButton});
  background-size: 100%;
  `
}
