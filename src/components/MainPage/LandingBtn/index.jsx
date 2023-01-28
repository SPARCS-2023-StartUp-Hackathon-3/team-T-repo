import React from "react";
import { St } from "./style";
import { MainArtImg, MainNovelImg, MainComicImg } from "../../../asset";
import { routePaths } from "../../../core/routes/path";

export default function LandingBtn() {
  return (
    <St.LandingBtn>
      <St.ArtWrapper to={routePaths.Art}>
        <img src={MainArtImg} alt="랜딩페이지(아트)" />
      </St.ArtWrapper>
      <St.LaterLandingBtn>
        <St.ComicWrapper to={routePaths.Main}>
          <img src={MainComicImg} alt="랜딩페이지(만화)" />
        </St.ComicWrapper>
        <St.NovelWrapper to={routePaths.Main}>
          <img src={MainNovelImg} alt="랜딩페이지(소설)" />
        </St.NovelWrapper>
      </St.LaterLandingBtn>
    </St.LandingBtn>
  );
}
