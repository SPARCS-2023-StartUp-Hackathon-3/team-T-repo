import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService, dbService, firebaseInstance } from "../../fbase";
import AuthForm from "./AuthForm";

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
      navigate("/auth/nickname", {
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
      <AuthForm />
      <div className="authBtns">
        <button onClick={onSocialClick} name="google" className="authBtn">
          Continue with Google
        </button>
      </div>
    </div>
  );
}
