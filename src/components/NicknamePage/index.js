import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { dbService } from "../../fbase";

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
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <input
              onChange={onChange}
              type="text"
              autoFocus
              placeholder="닉네임"
              value={nickname}
            /> &nbsp;
            <button>
              닉네임 변경하기
            </button>
          </div>
        </form>
      </div>
    </>
  )
}