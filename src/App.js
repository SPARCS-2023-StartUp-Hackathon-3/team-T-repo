import logo from './logo.svg';
import './App.css';
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
      <Login isLoggedIn={isLoggedIn} userObj={userObj}/>
    </div>
  );
}

export default App;

