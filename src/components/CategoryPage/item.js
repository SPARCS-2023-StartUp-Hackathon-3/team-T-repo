import { useNavigate } from "react-router-dom";

const Item = ({ listObj }) => {

    let navigate = useNavigate();

    const onClickDetail = () => {
        
        navigate(`/post/detail/${listObj.id}`, {
            replace: false,
            state: { detailObj: listObj },
        });
        /*
        if (userObj != null) {
          navigate(`/selling/detail/${listObj.id}`, {
            replace: false,
            state: { detailObj: listObj },
          });
        } else {
          Swal.fire({
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "취소",
            confirmButtonText: "로그인",
            confirmButtonColor: "#1f54c0",
            text: "로그인후 이용 가능합니다. 로그인하시겠습니까?",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/auth");
            }
          });
        }
        */
      };

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justify: "center",
            }}
        >

            <div onClick={onClickDetail}>
                {listObj.attachmentUrl ? (
                    <img
                        style={{
                            // paddingBottom:"0%",
                            width: "100%",
                            // height: "!important",
                            // marginBottom: 5,
                            borderRadius: 10,
                            aspectRatio: "1/1",
                            backgroundColor: "white",
                        }}
                        alt="썸네일"
                        src={listObj.attachmentUrl}
                    />) : (<></>)}
                <div>
                    <p>제목: {listObj.title}</p>
                    <p>내용: {listObj.content}</p>
                </div>
            </div>

        </div>
    )

}

export default Item;