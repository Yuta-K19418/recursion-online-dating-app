import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "../pages/chat";
import Home from "../pages/home";
import MessageList from "../pages/messageList";
import UsersList from "../pages/usersList";
import AppBar from "./appBar";
import SideNavBar from "./sideNavBar";

const App = () => {
  const [menuButtonState, setMenuButtonState] = useState(true);
  const [gender, setGender] = useState("");
  return (
    <React.Fragment>
      <AppBar menuButtonState={menuButtonState} setMenuButtonState={setMenuButtonState} />
      <div style={{ display: "flex", flexDirection: "row", height: 835 }}>
        {menuButtonState && <SideNavBar />}
        <div
          style={
            menuButtonState
              ? {
                  width: "87%",
                  display: "flex",
                  overflow: "auto",
                }
              : {
                  width: "100%",
                  display: "flex",
                  overflow: "auto",
                }
          }
        >
          <Routes>
            <Route path="/" element={<Home setGender={setGender} />} />
          </Routes>
          <Routes>
            <Route path="/user-list" element={<UsersList gender={gender} />} />
          </Routes>
          <Routes>
            <Route path="/user/:userId/chat" element={<Chat />} />
          </Routes>
          <Routes>
            <Route path="/message-list" element={<MessageList />} />
          </Routes>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
