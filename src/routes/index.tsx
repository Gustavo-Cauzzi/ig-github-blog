import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import { PostPage } from "../pages/Post";
import { CommomLayout } from "./layouts/CommomLayout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommomLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
