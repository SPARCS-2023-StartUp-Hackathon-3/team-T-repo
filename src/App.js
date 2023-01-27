import './App.css';
import styled from "styled-components";
import react, { useState } from 'react';
import Router from "./Router";

function App() {
  const [init, setInit] = useState(true);

  return (
    <div className="App">
      <Router />
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