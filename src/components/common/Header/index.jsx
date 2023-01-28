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

export default function Header() {
  const featureItem = [
    { name: "로그아웃", icon: <IcLogoutIcon /> },
    { name: "마이페이지", icon: <IcGotoMypageIcon /> },
    { name: "게시글 업로드", icon: <IcUploadBtnIcon /> },
    { name: "AI 생성", icon: <IcGenerateIcon /> },
  ];

  const featureItemLists = featureItem.map((featureItem) => (
    <St.Featureitem key={featureItem.name}>{featureItem.icon}</St.Featureitem>
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
