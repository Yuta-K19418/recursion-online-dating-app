import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import AppBar from "./appBar";

const App = () => {
  return (
    <React.Fragment>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
