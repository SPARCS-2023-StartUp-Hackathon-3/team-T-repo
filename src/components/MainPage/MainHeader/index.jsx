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
import { Link } from "react-router-dom";

export default function Header({ isLoggedIn, userObj }) {
  const featureItem = [
    { name: "로그아웃", icon: <WhiteLogoutButton />, address: "/" },
    { name: "마이페이지", icon: <WhiteGotoMypage />, address: "/profile" },
    {
      name: "게시글 업로드",
      icon: <WhiteUploadButton />,
      address: "/post/upload",
    },
    { name: "AI 생성", icon: <WhiteGenerate />, address: "/art/create" },
  ];

  const featureItemLists = featureItem.map((featureItem) => (
    <Link
      to={{
        pathname: featureItem.address,
        state: { isLoggedIn: isLoggedIn, userObj: userObj },
      }}
    >
      <St.Featureitem key={featureItem.name}>{featureItem.icon}</St.Featureitem>
    </Link>
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
