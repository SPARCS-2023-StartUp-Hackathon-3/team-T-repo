import React, { useEffect, useState } from "react";
import { dbService } from "../../../fbase";
import styled from "styled-components";
import Item from "../item";

const PostListWrapper = styled.div`
  margin-top: 7px;
  display: grid;
  place-items: center;
  justify-content: space-evenly;
  /* font-size: small; */
  /* row-gap: 3px; */
  grid-template-columns: repeat(2, auto);
`;

export default function FanartPage() {
    const [postlists, setPostlists] = useState([]);

    useEffect(() => {
        dbService.collection("posts").where("category", "==", "fanart").orderBy("datetime", "desc")
            .onSnapshot((snapshot) => {
                const postArray = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setPostlists(postArray);
            });
    }, []);

    return (
        <>
            <div>FanartPage</div>
            <PostListWrapper>
                {postlists.map((list) => (
                    <Item
                        key={list.id}
                        listObj={list}
                        {...list}
                    />
                ))}
            </PostListWrapper>

        </>
    )
}