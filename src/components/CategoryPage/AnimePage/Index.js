import React, { useEffect, useState } from "react";
import { dbService } from "../../../fbase";
import Item from "../item";
import { St } from "./style";

export default function AnimePage() {
    const [postlists, setPostlists] = useState([]);

    useEffect(() => {
        dbService.collection("posts").where("category", "==", "anime").orderBy("datetime", "desc")
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
            <St.TopContainer></St.TopContainer>
            <St.TopicContainer>작품</St.TopicContainer>
            <St.PostContainer>
                {postlists.map((list) => (
                    <Item
                        key={list.id}
                        listObj={list}
                        {...list}
                    />
                ))}
            </St.PostContainer>
        </>
    )
}
