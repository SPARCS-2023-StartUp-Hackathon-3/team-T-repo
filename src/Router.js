import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routePaths } from "./core/routes/path";

import {
  MainPage,
  AuthPage,
  ArtPage,
  CategoryPage,
  PostPage,
  ProfilePage,
  CreatePage,
  PostUploadPage,
  PostDetailPage,
  NicknamePage,
} from "./components";

export default function Router({isLoggedIn, userObj, refreshUser}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePaths.Main} element={<MainPage isLoggedIn={isLoggedIn} userObj={userObj} />} />
        <Route path={routePaths.Auth} element={<AuthPage isLoggedIn={isLoggedIn} userObj={userObj} />} />
        <Route path={routePaths.Profile} element={<ProfilePage isLoggedIn={isLoggedIn} userObj={userObj} />} />
        <Route path={routePaths.Art} element={<ArtPage isLoggedIn={isLoggedIn} userObj={userObj} />} />
        <Route
          path={`${routePaths.Art}${routePaths.Category}`}
          element={<CategoryPage />}
        />
        <Route
          path={`${routePaths.Art}${routePaths.Category}${routePaths.CategoryId}`}
          element={<CategoryPage />}
        />
        <Route
          path={`${routePaths.Art}${routePaths.Create}`}
          element={<CreatePage isLoggedIn={isLoggedIn} userObj={userObj}/>}
        />
        <Route path={routePaths.Post} element={<PostPage />} />
        <Route
          path={`${routePaths.Post}${routePaths.Post_Upload}`}
          element={<PostUploadPage isLoggedIn={isLoggedIn} userObj={userObj} />}
        />
        <Route
          path={`${routePaths.Post}${routePaths.Post_Detail}${routePaths.PostId}`}
          element={<PostDetailPage />}
        />
        <Route
          path={`${routePaths.Auth}${routePaths.Nickname}`}
          element={<NicknamePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
