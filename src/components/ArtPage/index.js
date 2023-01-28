import React from "react";
import Header from "../common/Header";
import { St } from "./style";

export default function ArtPage() {
  return (
    <>
      <Header />
      <St.TopContainer></St.TopContainer>
      <St.TopicContainer>Topic</St.TopicContainer>
      <St.PostContainer>{/*여기에 추가*/}</St.PostContainer>
      <St.TopicContainer>Today's Pick</St.TopicContainer>
      <St.TopContainer2></St.TopContainer2>
      <St.TopicContainer>명예의 전당</St.TopicContainer>
      <St.TopContainer3></St.TopContainer3>
    </>
  );
}
