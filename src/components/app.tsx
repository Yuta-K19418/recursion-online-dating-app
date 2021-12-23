import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "../pages/chat";
import Home from "../pages/home";
import UsersList from "../pages/usersList";
import AppBar from "./appBar";
import SideNavBar from "./sideNavBar";

const App = () => {
  const [menuButtonState, setMenuButtonState] = useState(true);
  return (
    <React.Fragment>
      <AppBar menuButtonState={menuButtonState} setMenuButtonState={setMenuButtonState} />
      <div style={{ display: "flex", flexDirection: "row", height: 835 }}>
        {menuButtonState && <SideNavBar />}
        <div
          style={
            menuButtonState
              ? {
                  maxWidth: "87%",
                  display: "flex",
                  justifyContent: "flex-end",
                  overflow: "auto",
                }
              : {
                  display: "flex",
                  justifyContent: "flex-end",
                  overflow: "auto",
                }
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/user-list" element={<UsersList />} />
          </Routes>
          <Routes>
            <Route path="/user/:userId/chat" element={<Chat />} />
          </Routes>
          <Routes>
            <Route path="/message-list" />
          </Routes>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
