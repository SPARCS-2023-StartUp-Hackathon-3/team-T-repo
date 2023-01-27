import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import PostUpload from "../routes/PostUpload";

const AppRouter = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false);

    return (
        <Router>
            <Routes>
                <>
                    <Route exact path="/" element={<PostUpload />} />
                    <Route exact path="/art/post/upload" element={<PostUpload />} />
                </>
            </Routes>
        </Router>
    );
};

export default AppRouter;
