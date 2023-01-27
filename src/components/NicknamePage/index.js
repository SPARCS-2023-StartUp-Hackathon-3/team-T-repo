import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function NicknamePage() {
  const location = useLocation();
  console.log('state', location.state)
  const {uid}=location.state;
  //const { uid } = location.state;

  //const [userObj, setUserObj] = useState(navigateState && navigateState.user)
  //const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  //console.log(userObj)
  return <div>NicknamePage</div>;
}
