import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { dbService } from "../../fbase";

export default function NicknamePage() {
  const location = useLocation();
  const { uid } = location.state;
  console.log(uid)
  const [nickname, setNickname] = useState("");
  const [check, setChcek] = useState(false);
  const [isNew, setIsNew] = useState(true);
  const [obj, setObj] = useState({});
  const navigate = useNavigate();


  useEffect(() => {
    dbService.collection("user")
      .get().then((docs)=>
      {docs.forEach((doc) => {
        console.log("11")
        if (doc.exists){
          if  (doc.id === uid)   {
            console.log(doc.data().displayName)
            if(doc.data().displayName==null){
              dbService.doc(`user/${uid}`).update({
                uid: uid,
                displayName: newDisplayName
              });
            }
            else{
              gotoHome()
            }
          }
        }
            /*
            setChcek(!check)
            console.log(check);
            if(check){
              console.log(doc.data().displayName ==="사용자");
              setNickname(doc.data().displayName);
            }
            

          }
        }
      });*/
    });
  });
  }, []);
  console.log(obj.displayName)
  const Nickname = () => {
    console.log("name2222")

  }
  const [newDisplayName, setNewDisplayName] = useState("");
  console.log(nickname)
  //이름 바꾸기
  const onChange = async (event) => {
    //event.preventDefault();
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  
    const onSubmit =  () => {
      //event.preventDefault();
      console.log("name33")
       dbService.collection("user").doc(uid).update({
        displayName: newDisplayName,
      });
  
    };
  const gotoHome = () => {
    // event.preventDefault();
    console.log("hi")

    navigate("/",
     {
       replace: false,
       state:{uid : uid}}
     );
    console.log(uid)
    //const [userObj, setUserObj] = useState(navigateState && navigateState.user)
    //const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    //console.log(userObj)
  };
  return (
    <>
      {isNew ?
        (<>
          <div>
            <form onSubmit={onSubmit}>
              <div>
                <input
                  onChange={onChange}
                  type="text"
                  autoFocus
                  placeholder="닉네임"
                  value={newDisplayName}
                /> &nbsp;
                <button>
                  닉네임 변경하기
                </button>
              </div>
            </form>
          </div>
        </>)
        :
        (
          <div>gotoHom</div>
        )
      }
    </>
  );
};
