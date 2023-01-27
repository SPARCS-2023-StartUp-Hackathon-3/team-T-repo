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

export default function Router({isLoggedIn, userObj}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePaths.Main} element={<MainPage />} />
        <Route path={routePaths.Auth} element={<AuthPage isLoggedIn={isLoggedIn} userObj={userObj}/>} />
        <Route path={routePaths.Profile} element={<ProfilePage />} />
        <Route path={routePaths.Art} element={<ArtPage />} />
        <Route
          path={`${routePaths.Art}${routePaths.Category}`}
          element={<CategoryPage />}
        />
        <Route
          path={`${routePaths.Art}${routePaths.Create}`}
          element={<CreatePage />}
        />
        <Route path={routePaths.Post} element={<PostPage />} />
        <Route
          path={`${routePaths.Post}${routePaths.Post_Upload}`}
          element={<PostUploadPage />}
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
