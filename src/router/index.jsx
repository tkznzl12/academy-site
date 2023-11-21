import { Route, Routes } from "react-router-dom";
import Main from "../page/main";
import React from "react";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={Main} />
    </Routes>
  );
};
