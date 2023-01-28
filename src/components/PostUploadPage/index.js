import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { dbService, storageService } from "../../fbase";
import { v4 as uuidv4 } from "uuid";

export default function PostUploadPage({ isLoggedIn, userObj }) {
    console.log("postupload", isLoggedIn, userObj)

    //입력받을 내용
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [attachment, setAttachment] = useState("");
    const [category, setCategory] = useState("");
    const [aiModel, setAiModel] = useState("");
    const [prompt, setPrompt] = useState("");
    const [nonPrompt, setNonPrompt] = useState("");

    var today = new Date();

    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);

    var dateString = year + '-' + month + '-' + day;

    //이동할 경로
    const navigate = useNavigate();

    //제출
    const onFormSubmit = async (event) => {
        event.preventDefault();
        navigate(`/art/category/${category}`);

        const userRef = dbService.collection("user").doc(`${userObj.uid}`);
        const doc = await userRef.get();

        let attachmentUrl = "";
        if (attachment != "") {
            const attachmentRef = storageService.ref().child(`${category}/${dateString}/${doc.data().nickname}/${uuidv4()}`);
            const response = await attachmentRef.putString(attachment, "data_url");
            attachmentUrl = await response.ref.getDownloadURL();
        }

        const postObj = {
            randomidx: Math.random(),
            title: title,
            content: content,
            attachmentUrl: attachmentUrl,
            category: category,
            aiModel: aiModel,
            prompt: prompt,
            nonPrompt: nonPrompt,
            datetime: Date.now(),
            nickname: doc.data().nickname,
        }

        await dbService.collection("posts").add(postObj);

        setTitle("");
        setContent("");
        setAttachment("");
        setCategory("");
        setAiModel("");
        setPrompt("");
        setNonPrompt("");
    }

    const onChange = (event) => {
        const {
            target: { value },
        } = event;

        if (event.target.id === "title") {
            setTitle(value);
        }
        else if (event.target.id === "content") {
            setContent(value);
        }
        else if (event.target.id === "category") {
            setCategory(value);
        }
        else if (event.target.id === "aiModel") {
            setAiModel(value);
        }
        else if (event.target.id === "prompt") {
            setPrompt(value);
        }
        else if (event.target.id === "nonPrompt") {
            setNonPrompt(value);
        }
    }

    const onFileChange = (event) => {
        const {
            target: { files },
        } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {
                currentTarget: { result },
            } = finishedEvent;
            setAttachment(result);
        };
        reader.readAsDataURL(theFile);
    }
    const onClearAttachment = () => setAttachment(null);

    return (
        <>
            {isLoggedIn ? (<form className="post-upload">
                파일 업로드:
                <input
                    id="attachment"
                    className="attachment"
                    type="file"
                    accept="image/*"
                    onChange={onFileChange}
                />
                <br></br>
                {attachment && (
                    <div className="attachment">
                        <img src={attachment} width="50px" height="50px" />
                        <button onClick={onClearAttachment}>Clear</button>
                    </div>
                )}
                제목:
                <input
                    id="title"
                    className="title"
                    value={title}
                    onChange={onChange}
                    type="text"
                    placeholder="제목을 입력해주세요"
                    required
                />
                <br></br>
                내용:
                <input
                    id="content"
                    className="content"
                    value={content}
                    onChange={onChange}
                    type="textarea"
                    placeholder="내용을 입력해주세요"
                    required
                />
                <br></br>
                카테고리:
                <select
                    id="category"
                    className="category"
                    onChange={onChange}
                    required
                >
                    <option name="anime" value="anime">만화</option>
                    <option name="realistic" value="realistic">실사</option>
                    <option name="3D" value="3D">3D</option>
                    <option name="fantasy" value="fantasy">판타지</option>
                    <option name="fanart" value="fanart">팬아트</option>
                    <option name="landscape" value="landscape">풍경</option>
                    <option name="painting" value="painting">수채화</option>
                    <option name="gameArt" value="gameArt">게임 아트</option>
                </select>
                <br></br>
                AI모델:
                <input
                    id="aiModel"
                    className="aiModel"
                    value={aiModel}
                    onChange={onChange}
                    type="text"
                    placeholder="내용을 입력해주세요"
                    required
                />
                <br></br>
                입력어:
                <input
                    id="prompt"
                    className="prompt"
                    value={prompt}
                    onChange={onChange}
                    type="text"
                    placeholder="내용을 입력해주세요"
                    required
                />
                <br></br>
                부정입력어:
                <input
                    id="nonPrompt"
                    className="nonPrompt"
                    value={nonPrompt}
                    onChange={onChange}
                    type="text"
                    placeholder="내용을 입력해주세요"
                    required
                />
                <button className="default_Btn_Right2" onClick={onFormSubmit}>
                    제출
                </button>
            </form>
            ) : (
                <>
                    <p>로그인해야 이용가능합니다</p>
                    <a href="/auth">로그인하러 가기</a>
                </>)}
        </>
    )
}
