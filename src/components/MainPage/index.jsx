import React from "react";
import { St } from "./style";
import MainHeader from "./MainHeader";
import Banner from "./Banner";
import LandingBtn from "./LandingBtn";
import MainPost from "./MainPost";
import Header from "../common/Header";

export default function MainPage({ isLoggedIn, userObj }) {
  console.log("mainpage", isLoggedIn, userObj);
  return (
    <St.MainPage>
      <MainHeader isLoggedIn={isLoggedIn} userObj={userObj} />
      <Banner />
      <St.ContentContainer>
        <LandingBtn />
        <MainPost />
      </St.ContentContainer>
    </St.MainPage>
  );
}

// <Header isLoggedIn={isLoggedIn} userObj={userObj} />
