import React from "react";
import {
  WhiteLogoutButton,
  WhiteGenerate,
  WhiteGotoMypage,
  WhiteLoginButton,
  WhiteLogo,
  WhiteMenu,
  WhiteUploadButton,
} from "../../../asset";
import { St } from "./style";
import { routePaths } from "../../../core/routes/path";

export default function Header() {
  const featureItem = [
    { name: "로그아웃", icon: <WhiteLogoutButton /> },
    { name: "마이페이지", icon: <WhiteGotoMypage /> },
    { name: "게시글 업로드", icon: <WhiteUploadButton /> },
    { name: "AI 생성", icon: <WhiteGenerate /> },
  ];

  const featureItemLists = featureItem.map((featureItem) => (
    <St.Featureitem key={featureItem.name}>{featureItem.icon}</St.Featureitem>
  ));

  return (
    <St.Header>
      <St.Menubar>
        <WhiteMenu />
      </St.Menubar>
      <St.Link to={routePaths.Main}>
        <WhiteLogo />
      </St.Link>
      <St.FeatureContainer>{featureItemLists}</St.FeatureContainer>
    </St.Header>
  );
}
