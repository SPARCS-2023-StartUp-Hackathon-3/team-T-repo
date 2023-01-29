import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../common/Header";
import DDDPage from "./3DPage/Index";
import AnimePage from "./AnimePage/Index";
import FanartPage from "./FanartPage";
import { St } from "./style";

export default function CategoryPage({ isLoggedIn, userObj }) {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  console.log(categoryId === undefined);

  const todos = [
    { engname: "Anime", name: "만화", address: "anime", imgurl: "img/Category Button.png" },
    { engname: "Realistic", name: "실사", address: "realistic",  imgurl: "img/Category Button (1).png" },
    { engname: "3D", name: "3D", address: "3D",  imgurl: "img/Category Button (2).png" },
    { engname: "Fantasy", name: "판타지", address: "fantasy",  imgurl: "img/Category Button (3).png" },
    { engname: "Fanart", name: "팬아트", address: "fanart",  imgurl: "img/Category Button (4).png" },
    { engname: "Landscape", name: "풍경", address: "landscape",  imgurl: "img/Category Button (5).png" },
    { engname: "Painting", name: "수채화", address: "painting",  imgurl: "img/Category Button (6).png" },
    { engname: "GameArt", name: "게임 아트", address: "gameart",  imgurl: "img/Category Button (7).png" },

  ];

  const onFormSubmit = (e) => {
    navigate(`/art/category/${e.target.value}`);
  };

  return (
    <>
      <Header />
      {categoryId === "fanart" && (<FanartPage />)}
      {categoryId === "anime" && (<AnimePage />)}
      {categoryId === "3d" && (<DDDPage />)}
      {categoryId === undefined && (
        <div>
          <St.TopicContainer>Topics</St.TopicContainer>
          <St.PostContainer>
            <St.button_input value="anime" onClick={onFormSubmit} />
            <St.button_input1 value="realistic" onClick={onFormSubmit} />
            <St.button_input2 value="3d" onClick={onFormSubmit} />
            <St.button_input3 value="fantasy" onClick={onFormSubmit} />
            <St.button_input4 value="fanart" onClick={onFormSubmit} />
            <St.button_input5 value="landscape" onClick={onFormSubmit} />
            <St.button_input6 value="painting" onClick={onFormSubmit} />
            <St.button_input7 value="gameart" onClick={onFormSubmit} />
          </St.PostContainer>
        </div>
      )}
    </>
  );
}

/*
<St.PostCotainer>
       {todoItems}
     </St.PostCotainer>
*/
