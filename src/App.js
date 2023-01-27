import './App.css';
import AppRouter from './components/Router';
import styled from "styled-components";
import react, { useState } from 'react';

function App() {
  const [init, setInit] = useState(true);

  return (
    <>
      {init ? (
        <AppRouter/>
      ) : (
        <Load>
          {/*  <div className="ini"> */}
          <img src="img/biglogo.png" width="50%" alt="로딩로고" style={{ position: "relative", top: "30vh", left: "25%" }} />
          {/* <img id="rotating_img" width="80%" src="img/loading.gif"></img> */}
          {/* </div> */}
        </Load>
      )}
    </>
  );
}

export default App;

const Load = styled.div`
  background-color: #1f54c0;
  height: 100vh;
  width: 100vw;
  position:absolute;
`