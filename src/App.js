import './App.css';

import styled from "styled-components";
import react from 'react';
import Router from "./Router";
import Login from './components/Login';
import { useEffect, useState } from 'react';
import { authService } from './fbase';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <div>
      <Router isLoggedIn={isLoggedIn} userObj={userObj}/>

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

