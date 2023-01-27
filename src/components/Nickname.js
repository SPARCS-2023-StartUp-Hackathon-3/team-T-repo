import React, { useEffect, useState } from "react";
import { dbService } from "../fbase";

function  Nickname ({userObj}) {
const onChange = async (event) => {
    //event.preventDefault();
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
}

const onSubmit = async (event) => {
    event.preventDefault();
    
    // dbService.doc(`user/${userObj.uid}`).get(userObj);
    if (userObj.displayName !== newDisplayName) {
      const IDcheck = await dbService
        .collection("user")
        .where("displayName", "==", newDisplayName)
        .get();
      if (IDcheck.docs.length == 0 && newDisplayName.length > 0) {
        //user에 업로드
    await dbService.doc(`user/${userObj.uid}`).set({
      displayName: userObj.displayName,
      uid: userObj.uid,
    });
        await userObj.updateProfile({
          displayName: newDisplayName,
        });
        refreshUser();
        await dbService.doc(`user/${userObj.uid}`).update({
          displayName: newDisplayName,
        });
        alert("닉네임 변경완료!");
      }
      else{
        if (newDisplayName.length != 0)
        alert("중복된 닉네임입니다.");
      }
    }
    else {
        alert("같은 닉네임입니다.");
    }

return(
    <>
    <div className="container">
      <div className="profile_edit">
        <form onSubmit={onSubmit}>
          <div>
            <input
              className="profile_text"
              onChange={onChange}
              type="text"
              placeholder="닉네임"
              value={newDisplayName}
            /> &nbsp;
            <button>
              닉네임 변경하기
            </button>
          </div>
        </form>
      </div>
      </div>
      </>
);
}
export default Nickname;