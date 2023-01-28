import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { St } from "./style";

const Item = ({ listObj }) => {

  let navigate = useNavigate();

  const onClickDetail = () => {
    navigate(`/post/detail/${listObj.id}`, {
      replace: false,
      state: { detailObj: listObj },
    });
  };

  return (
    <St2.ItemContainer onClick={onClickDetail}>
      {listObj.attachmentUrl ? (
        <img
          style={{
            width: "90%",
            aspectRatio: "1/1",
            backgroundColor: "white",

          }}
          alt="썸네일"
          src={listObj.attachmentUrl}
        />) : (<></>)}
      <St2.TextContainer>
        {listObj.title}
      </St2.TextContainer>

      <St2.TextContainer2>
        {listObj.nickname}
      </St2.TextContainer2>

    </St2.ItemContainer>
  )

}

const St2 = {
  ItemContainer: styled.div`
  width: 20rem;
  height: 23rem;
  margin: 0 0 0 0;
  text-align: center;
  `
  ,
  TextContainer: styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-left: 1rem;
  text-align: left;
  `
  ,
  TextContainer2: styled.div`
  font-size: 1.5rem;
  text-align: left;
  margin-left: 1rem;
  `
}

export default Item;