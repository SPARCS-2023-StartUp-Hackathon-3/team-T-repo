import './App.css';

import styled from "styled-components";
import react from 'react';
import Router from "./Router";
import Login from './components/Login';
import { useEffect, useState } from 'react';
import { authService } from './fbase';
import Header from './components/common/Header';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  //현재 로그인된 상태인지 확인
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj({
          uid: user.uid
        })
        console.log("isLoggedIn")
      } else {
        setIsLoggedIn(false);
        console.log("notLoggedIn")
      }
      setInit(true);
    });
  }, []);


  //refreshUser
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      uid: user.uid
    })
  }

  return (
    <div>
      <Router isLoggedIn={Boolean(userObj)} userObj={userObj} refreshUser={refreshUser} />
    </div>
  );
}

export default App;


const Load = styled.div`
  background-color: #1f54c0;
  height: 100vh;
  width: 100vw;
  position:absolute;
`

