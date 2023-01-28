import React, { useState } from "react";
import { authService } from "../../fbase";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";


const AuthForm = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

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
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        console.log("newAccount")
        const data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
        const userObj = {
          uid: data.user.uid,
        };    
        navigate("/login/nickname", {
          replace: false,
          state: { userObj: userObj },
        });
      } else { // 기존 유저
        console.log("notnewAccount")
        const data = await authService.signInWithEmailAndPassword(email, password);
        const userObj = {
          uid: data.user.uid,
        };  
        navigate("/", {
          replace: false,
          state: { userObj: userObj },
        });
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);
  
  return (
    <>
      <form onSubmit={onSubmit}>
        <St.TextInput
          name="email"
          type="email"
          placeholder="ID"
          required
          value={email}
          onChange={onChange}
          className="authInput" />
        <St.TextInput
          name="password"
          type="password"
          placeholder="PW"
          required
          value={password}
          onChange={onChange}
          className="authInput"
        />
        <St.Container>
        <St.TextInput2
          type="submit"
          value={newAccount ? ("Create Account") : ("Log In")}
          className="authInput"
        />
        {error && <span className="authError">{error}</span>}
        <St.TextInput3 onClick={toggleAccount} className="authSwitch">
          {newAccount ? "Log In" : "Create Account"}
        </St.TextInput3>
        </St.Container>
      </form>
    </>
  );
};

const St = {
  TextInput: styled.input`
    width: 35rem;
    height: 5rem;
    flex-direction: column;
    align-items: left;
    background-color: #f5f5f5;
    border: 0;
    border-radius: 15px;
    margin-bottom: 1rem;
    font-size: 2rem;
    font-style: bold;
    font-color: black;
    padding-left: 1.2rem;
  `,
  Container: styled.div`
    display: flex;
    flex-direction: row;
    `,
  TextInput2: styled.input`
    width: 18rem;
    height: 4rem;
    background-color: #f5f5f5;
    border: 0;
    border-radius: 15px;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    padding-left: 1.2rem;
  `,
  TextInput3: styled.div`
    width: 18rem;
    height: 4rem;
    border-radius: 15px;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    padding-left: 0rem;
    padding-top: 1rem;
    text-align: center;
  `,
  SubmitButton: styled.input`
    width: 25%;
    height: 2rem;
    margin: 1rem auto 0 71%;
    display: table;
    flex-direction: column;
    border: 0;
    background-color: #ffffff;
    align-items: center;
  `
}

export default AuthForm;
