import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import AppBar from "./appBar";
import SideNavBar from "./sideNavBar";

const App = () => {
  const [menuButtonState, setMenuButtonState] = useState(true);
  return (
    <React.Fragment>
      <AppBar menuButtonState={menuButtonState} setMenuButtonState={setMenuButtonState} />
      <div style={{ display: "flex", flexDirection: "row", height: 835 }}>
        {menuButtonState && <SideNavBar />}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/user-list" />
        </Routes>
        <Routes>
          <Route path="/message-list" />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default App;
