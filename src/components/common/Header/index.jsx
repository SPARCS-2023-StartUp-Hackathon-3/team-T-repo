import React from "react";
import {
  IcGenerateBtnIcon,
  IcGenerateIcon,
  IcGotoMypageIcon,
  IcLoginIcon,
  IcLogoIcon,
  IcLogoutIcon,
  IcMenuIcon,
  IcUploadBtnIcon,
} from "../../../asset";
import { St } from "./style";
import { routePaths } from "../../../core/routes/path";
import { Link } from "react-router-dom";

export default function Header({ isLoggedIn, userObj }) {
  const featureItem = [
    { name: "로그아웃", icon: <IcLogoutIcon />, address: "/" },
    { name: "마이페이지", icon: <IcGotoMypageIcon />, address: "/profile" },
    { name: "게시글 업로드", icon: <IcUploadBtnIcon />, address: "/post/upload" },
    { name: "AI 생성", icon: <IcGenerateIcon />, address: "/art/create" },
  ];
  const featureItemLists = featureItem.map((featureItem) => (
    <Link to={{
      pathname: featureItem.address,
      state: { isLoggedIn: isLoggedIn, userObj: userObj }
    }}>
      <St.Featureitem key={featureItem.name}>
        {featureItem.icon}
      </St.Featureitem>
    </Link>
  ));


  return (
    <St.Header>
      <St.Menubar>
        <IcMenuIcon />
      </St.Menubar>
      <St.Link to={routePaths.Main}>
        <IcLogoIcon />
      </St.Link>
      <St.FeatureContainer>{featureItemLists}</St.FeatureContainer>

    </St.Header>
  );
}
