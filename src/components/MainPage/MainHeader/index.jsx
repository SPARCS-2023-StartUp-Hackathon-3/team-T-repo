import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../../fbase";
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
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  console.log("나는 메인", isLoggedIn, userObj);
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

  const handleCheckAuth = (e) => {
    if (e === "로그아웃") {
      authService.signOut();

      isLoggedIn = false;
      userObj = null;
      setIsChecked(true);

      console.log("로그아웃 null 넣은 후", isLoggedIn, userObj);

      navigate(routePaths.Main);
    }
  };

  useEffect(() => {}, [setIsChecked]);

  const featureItemLists = featureItem.map((featureItem) => (
    <Link
      to={{
        pathname: featureItem.address,
        state: { isLoggedIn: isLoggedIn, userObj: userObj },
      }}
    >
      <St.Featureitem
        key={featureItem.name}
        onClick={() => handleCheckAuth(featureItem.name)}
      >
        {featureItem.icon}
      </St.Featureitem>
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
      {isLoggedIn && userObj ? (
        <St.FeatureContainer>{featureItemLists}</St.FeatureContainer>
      ) : (
        <St.FeatureContainer>
          <Link to={`${routePaths.Auth}`}>
            <WhiteLoginButton />
          </Link>
        </St.FeatureContainer>
      )}
    </St.Header>
  );
}
