import React from "react";
import { St } from "./style";
import Header from "../common/Header";

export default function MainPage({isLoggedIn, userObj}) {
  console.log("mainpage", isLoggedIn, userObj)
  return (
    <St.MainPage>
      <Header isLoggedIn={isLoggedIn} userObj={userObj} />
    </St.MainPage>
  );
}
