import { useNavigate } from "react-router-dom";
import React from "react";
import { St } from "./style";
import { MainBannerContentsIcon, GenerateBtnImage } from "../../../asset";
import { routePaths } from "../../../core/routes/path";

export default function Banner() {
  const navigate = useNavigate();

  return (
    <St.Banner>
      <St.BannerContents>
        <MainBannerContentsIcon />
      </St.BannerContents>
      <St.GenerateBtn
        onClick={() => {
          navigate(`${routePaths.Art}`);
        }}
      >
        <img src={GenerateBtnImage} alt="AI 작품 생성" />
      </St.GenerateBtn>
    </St.Banner>
  );
}
