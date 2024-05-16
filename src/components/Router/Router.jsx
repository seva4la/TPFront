import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SignIn, SignUp } from "../pages/auth/";
import { MainPage } from "../pages/MainPage/MainPage";

export const Router = () => (
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
