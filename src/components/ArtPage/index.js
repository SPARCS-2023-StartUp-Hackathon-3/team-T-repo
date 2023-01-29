import React from "react";
import Header from "../common/Header";
import { St } from "./style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

export default function ArtPage({ isLoggedIn, userObj }) {
  const settings = {
    className: "center",
    //centerMode: true,
    infinite: true,
    //centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    rows: 1,
  };
  return (
    <>
      <Header isLoggedIn={isLoggedIn} userObj={userObj} />
      <St.TopContainer></St.TopContainer>
      <St.TopicContainer>Topic</St.TopicContainer>
      <St.PostContainer>
        {" "}
        <div className="SliderWrapper">
          <Slider {...settings}>
            <div>
              <img src="img/Realistic.png" width="100%" />
            </div>
            <div className="box">
              <img src="img/3D.png" width="100%" />
            </div>
            <div className="box">
              <img src="img/Anime.png" width="100%" />
            </div>
            <div className="box">
              <img src="img/Fanart.png" width="100%" />
            </div>
            <div className="box">
              <img src="img/Fantasy.png" width="100%" />
            </div>
            <div className="box">
              <img src="img/Gameart.png" width="100%" />
            </div>
            <div className="box">
              <img src="img/Landscape.png" width="100%" />
            </div>
            <div className="box">
              <img src="img/Painting.png" width="100%" />
            </div>
          </Slider>
        </div>
      </St.PostContainer>
      <St.TopicContainer>Today's Pick</St.TopicContainer>
      <St.TopContainer2></St.TopContainer2>
      <St.TopicContainer>명예의 전당</St.TopicContainer>
      <St.TopContainer3></St.TopContainer3>
    </>
  );
}
