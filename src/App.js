import './App.css';
import styled from "styled-components";
import { footer_banner } from "../src/asset";
import Router from "./Router";
import { useEffect, useState } from 'react';
import { authService } from './fbase';

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

  //footer onClick
  const githubUrl = "https://github.com/SPARCS-2023-StartUp-Hackathon-3/team-T-repo/blob/develop/README.md"

  return (
    <>
    <div>
      <Router isLoggedIn={Boolean(userObj)} userObj={userObj} refreshUser={refreshUser} />
      <FooterContainer onClick={()=>{window.open(githubUrl)}}/>
    </div>
    
    </>
  );
}

export default App;

const FooterContainer = styled.div`
  background-image:url(${footer_banner});
  background-size:cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 25rem;
`

