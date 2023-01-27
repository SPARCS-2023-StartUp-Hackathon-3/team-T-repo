import React, { useEffect, useState } from "react";
import Login from "../Login";
import { authService } from "../../fbase";
import Nickname from "../NicknamePage";

export default function AuthPage() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
        //console.log(userObj)
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <Login isLoggedIn={isLoggedIn} userObj={userObj}/> : <Nickname isLoggedIn={isLoggedIn} userObj={userObj}/> }
    </>
  );
}
