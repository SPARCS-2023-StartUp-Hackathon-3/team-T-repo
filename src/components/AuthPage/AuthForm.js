import React, { useState } from "react";
import { authService } from "../../fbase";
import styled from "styled-components";

const AuthForm = () => {
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
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);
  
  return (
    <>
      <AuthStyle.form2 onSubmit={onSubmit}>
        
        <AuthStyle.TextInput
          name="email"
          type="email"
          placeholder=" ID"
          required
          value={email}
          onChange={onChange}
          className="authInput" />

        <AuthStyle.TextInput
          name="password"
          type="password"
          placeholder=" PW"
          required
          value={password}
          onChange={onChange}
          className="authInput"
        />
        <AuthStyle.SubmitButton
          type="submit"
          value={newAccount ? ("Create Account") : ("Sign In")}
          className="authInput"
        />
        {error && <span className="authError">{error}</span>}
      <span onClick={toggleAccount} className="authSwitch">
        {newAccount ? "Sign In" : "Create Account"}
      </span>
      </AuthStyle.form2>
    </>
  );
};

const AuthStyle = {
  form2:styled.form`
    margin: 16rem auto 0 0;
      display: low;
  `,
  TextInput: styled.input`
  width: 25%;
  height: 3rem;
  margin: 1rem auto 0 71%;
  display: table;
  flex-direction: column;
  align-items: left;
  background-color: #d9d9d9;
  display: flex;
  flex-wrap: wrap;
  border: 0;
  border-radius: 10px;
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
