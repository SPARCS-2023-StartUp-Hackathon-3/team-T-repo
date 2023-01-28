
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService, dbService, firebaseInstance } from "../fbase";


const Login = ({ isLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const [userUid, SetUserUid] = useState("");
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
      }
    });
  }, []);
  const gotoHome = () => {
    // event.preventDefault();
    console.log("hi")

    navigate("/");

    //const [userObj, setUserObj] = useState(navigateState && navigateState.user)
    //const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    //console.log(userObj)
  };
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
    console.log(userObj2.uid)
    setUserObj2(data.user.uid)
    //await dbService.collection("users").add(userObj2);
    /*await dbService.doc(`user/${userObj2.uid}`).update({

     uid: userObj2.uid,
   });*/
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
  const checkUser = () => {
    //event.preventDefault();
    console.log("hi")

    navigate("/login/nickname",
      {
        replace: false,
        state: { uid: userObj.uid }
      }
    );
    console.log(userObj)
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