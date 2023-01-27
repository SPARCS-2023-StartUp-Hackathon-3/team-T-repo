
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService, dbService, firebaseInstance } from "../fbase";
import Nickname from "./Nickname";

const Login=({ isLoggedIn })=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const [userUid, SetUserUid]=useState("");
    const [userObj, setUserObj] = useState(null);
    const [userObj2, setUserObj2] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
          if (user) {
            setUserObj({
              displayName: user.displayName,
              uid: user.uid,
              updateProfile: (args) => user.updateProfile(args),
            });

            
          } else {
            console.log("else")
            setUserObj(null);
          }

        });
      }, []);
      const refreshUser = () => {
        const user = authService.currentUser;
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      };
    const onChange = (event) => {
      const {
        target: { name, value },
      } = event;
      if (name === "email") {
        setEmail(value);
      } else if (name === "password") {
        setPassword(value);
      }
    };
    const onSubmit = async (event) => {
        try {
            let data;
            if (newAccount) {
              data = await authService.createUserWithEmailAndPassword(
                email,
                password
              );
            } else {
              data = await authService.signInWithEmailAndPassword(email, password);
            }
          } catch (error) {
            setError(error.message);
          }
          console.log(userObj);
          
    };
    const toggleAccount = () => setNewAccount((prev) => !prev);
    const onSocialClick = async (event) => {
        const {
          target: { name },
        } = event;
        let provider;

        provider = new firebaseInstance.auth.GoogleAuthProvider();

        const data = await authService.signInWithPopup(provider);
        SetUserUid(data.user);
        console.log(data.user);
        const userObj2 = {
            uid: data.user.uid,

        }
        console.log(data.user)
       //await dbService.collection("users").add(userObj2);
       await dbService.doc(`user/${userObj2.uid}`).set({
        displayName: userObj.displayName,
        uid: userObj.uid,
      });
      checkUser();
       //await dbService.doc(`users/${userObj2.uid}`).add(userObj2);
      /* await dbService.collection("user").update({
        displayName: userObj.uid,
      });*/
        /*await dbService.doc(`user/${userObj.uid}`).update({
            displayName: newDisplayName,
          });*/
      };
/*
      const onChange2 = async (event) => {
        //event.preventDefault();
        const {
          target: { value },
        } = event;
        setNewDisplayName(value);
      };
    }*/
      const checkUser = async (event) => {
        //event.preventDefault();
        console.log("hi")
        navigate("/auth/nickname");
        //dbService.doc(`user/${userObj.uid}`).get(userObj);
        /*
        if (userObj.displayName !== newDisplayName) {
          const IDcheck = await dbService
            .collection("user")
            .where("uid", "==", newDisplayName)
            .get();
          if (IDcheck.docs.length == 0 && newDisplayName.length > 0) {
            //user에 업로드
        await dbService.doc(`user/${userObj.uid}`).set({
          displayName: userObj.displayName,
          uid: userObj.uid,
        });
            await userObj.updateProfile({
              displayName: newDisplayName,
            });
            refreshUser();
            await dbService.doc(`user/${userObj.uid}`).update({
              displayName: newDisplayName,
            });
            alert("닉네임 생성완료!");
          }
          else{
            if (newDisplayName.length != 0)
            alert("중복된 닉네임입니다.");
          }
        }
        else {
            alert("같은 닉네임입니다.");
        }*/
    }

      
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={onChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={onChange}
          />
          <input
          type="submit"
          value={newAccount ? "Create Account" : "Sign In"}
        />
        {error}
        </form>
        <span onClick={toggleAccount}>
        {newAccount ? "Sign In" : "Create Account"}
        </span>
        <div>
          <button onClick={onSocialClick}>Continue with Google</button>
        </div>
      </div>
    );
  };
export default Login;