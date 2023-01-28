import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService, dbService, firebaseInstance } from "../../fbase";
import AuthForm from "./AuthForm";
import styled from "styled-components";
import { IcLogoIcon } from "../../asset";
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

  return (<>
    <St.mainContainer>
      <St.Background></St.Background>
      <St.AuthContainer>
            <IcLogoIcon width="30rem" height="30rem"/>
            <AuthForm />
            <St.GoogleLoginButton
              onClick={onSocialClick}
              name="google"
            />
      </St.AuthContainer>
    </St.mainContainer>
  </>
  );
}

const St = {
  mainContainer: styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  `,
  Background: styled.div`
  background-image: url(${Background});
  width: 70%;
  height: 65rem;
  left: 0;
  top: 0;
  background-size: cover;
  `,
  AuthContainer: styled.div`
  width: 30%;
  height: 65rem;
  left: 70%;
  top: 0;
  background-color: white;
  margin: 5rem 5rem 5rem 5rem;
  `,
  GoogleLoginButton: styled.div`
  background-image: url(${IcGoogleButton});
  background-size: contain;
  width: 35rem;
  height: 4.5rem;
  `
}
