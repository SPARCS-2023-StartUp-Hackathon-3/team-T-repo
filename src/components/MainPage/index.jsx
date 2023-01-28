import React from "react";
import { St } from "./style";
import MainHeader from "./MainHeader";
import Banner from "./Banner";
import LandingBtn from "./LandingBtn";
import MainPost from "./MainPost";

export default function MainPage() {
  return (
    <St.MainPage>
      <MainHeader />
      <Banner />
      <St.ContentContainer>
        <LandingBtn />
        <MainPost />
      </St.ContentContainer>
    </St.MainPage>
  );
}
