import { Avatar, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../stores";
import { Result } from "../types/users";

const MessageList = () => {
  const messages = useSelector((state: RootState) => state.messages["messages"]);
  const targetUsers = Object.keys(messages);
  const usersData = useSelector((state: RootState) => state.users["users"]);
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        overflow: "auto",
      }}
    >
      {!!targetUsers &&
        targetUsers.length > 0 &&
        targetUsers.map((userId: string, index: number) => (
          <Box
            key={`${userId}-${index}`}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              margin: 6,
              padding: 3,
              backgroundColor: "#000010",
            }}
            onClick={() => navigate(`/user/${userId}/chat`)}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "70%",
              }}
            >
              <Avatar
                src={
                  usersData.results.filter((targetUser: Result) => targetUser.login.uuid === userId)[0].picture
                    .thumbnail
                }
                alt=""
                sx={{ maxWidth: "80%", height: "auto", padding: 2 }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "10%",
                }}
              >
                <Typography variant="body2" color="#c6c6c6">
                  {usersData.results.filter((targetUser: Result) => targetUser.login.uuid === userId)[0].name.first}
                </Typography>
                <Typography variant="body2" color="#c6c6c6">
                  {usersData.results.filter((targetUser: Result) => targetUser.login.uuid === userId)[0].name.last}
                </Typography>
              </div>
              <Typography variant="body2" color="#c6c6c6">
                {messages[userId].slice(-1)[0].textedTime}
              </Typography>
              <Typography variant="body2" color="#c6c6c6">
                {messages[userId].slice(-1)[0].message}
              </Typography>
            </div>
          </Box>
        ))}
    </div>
  );
};

export default MessageList;
