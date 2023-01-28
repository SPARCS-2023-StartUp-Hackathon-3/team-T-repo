import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { dbService } from "../../fbase";
import { St } from "./style"

export default function NicknamePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userId, setUserId] = useState(location.state.userObj.uid);
  const [nickname, setNickName] = useState("");

  const onChange = async (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    setNickName(value);
  };

  const onSubmit =  () => {
    dbService.doc(`user/${userId}`).set({
      nickname: nickname,
      uid: userId,
      data: Date.now(),
    });

    const userObj = {
      uid: userId,
    }

    navigate("/",{
      replace: false,
      state: {userObj: userObj}
    })
  };

  return (
    <>
      <St.Container>
        <St.Intro_Container onSubmit={onSubmit}>
          <St.Intro />
          <St.realN>
            <St.nickinput
              onChange={onChange}
              type="text"
              autoFocus
              placeholder="별명 입력란"
              value={nickname}
            /> &nbsp;
            <St.nickbtn />
          </St.realN>
        </St.Intro_Container>
      </St.Container>
    </>
  )
}