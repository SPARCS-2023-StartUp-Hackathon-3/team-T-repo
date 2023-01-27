import React, { useEffect, useState } from "react";
import { dbService } from "../../../fbase";

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
    },[]);

    console.log(postlists)

    return (
        <>
            <div>FanartPage</div>
        </>
    )
}
