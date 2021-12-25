import { Box, Card, IconButton, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../stores";
import { Result } from "../types/users";
import React, { useState } from "react";
import { Message } from "../types";
import TextMessageAction from "../actions/chat";

const Chat = () => {
  const { userId } = useParams();
  const usersData = useSelector((state: RootState) => state.users["users"]).results.filter(
    (user: Result) => user.login.uuid === userId
  );

  const [messageState, setMessageStete] = useState("");
  const messagesSelector = useSelector((state: RootState) => state.messages["messages"]);
  const messages = messagesSelector[userId !== undefined ? userId : ""];
  const dispatch = useDispatch();
  const onTextMessage = () => {
    if (!!userId) {
      let today = new Date();
      const now =
        today.getFullYear() +
        "/" +
        today.getMonth() +
        "/" +
        today.getDate() +
        " " +
        today.getHours() +
        ":" +
        today.getMinutes() +
        ":" +
        today.getSeconds();
      const responseMessage = ["Hello!"];
      const messages: Message[] = [
        {
          who: "me",
          message: messageState,
          textedTime: now,
        },
        {
          who: "he or she",
          message: responseMessage[0],
          textedTime: now,
        },
      ];
      dispatch(TextMessageAction(userId, messages));
      setMessageStete("");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "space-between",
        width: "100%",
        height: "100%",
      }}
    >
      <Typography
        variant="h4"
        component="div"
        color="#c6c6c6"
        sx={{
          display: "flex",
          marginLeft: 1,
          marginY: 2,
        }}
      >
        {usersData[0].name.first} {usersData[0].name.last}
      </Typography>
      <div
        style={{
          display: "inline-flex",
          justifyContent: "center",
          width: "100%",
          height: "85%",
          overflow: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            height: "100%",
            width: "80%",
          }}
        >
          {!!messages &&
            messages.length > 0 &&
            messages.map((message: Message, index: number) =>
              message.who === "me" ? (
                <div key={index} style={{ width: "100%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      width: "100%",
                    }}
                  >
                    <Card
                      variant="outlined"
                      style={{
                        marginBottom: 1,
                        marginLeft: 2,
                        marginRight: 2,
                        paddingBottom: 3,
                        paddingLeft: 6,
                        paddingRight: 6,
                        color: "#c6c6c6",
                        backgroundColor: "#4169E1",
                      }}
                    >
                      {message.message}
                    </Card>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      width: "100%",
                    }}
                  >
                    <Typography color="#c6c6c6">{message.textedTime}</Typography>
                  </Box>
                </div>
              ) : (
                <div key={index} style={{ width: "100%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      width: "100%",
                    }}
                  >
                    <Card
                      variant="outlined"
                      style={{
                        marginBottom: 1,
                        marginLeft: 2,
                        marginRight: 2,
                        paddingBottom: 3,
                        paddingLeft: 6,
                        paddingRight: 6,
                        backgroundColor: "#99FF66",
                      }}
                    >
                      {message.message}
                    </Card>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      width: "100%",
                    }}
                  >
                    <Typography color="#c6c6c6">{message.textedTime}</Typography>
                  </Box>
                </div>
              )
            )}
        </div>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          height: "10%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "95%",
          }}
        >
          <TextField
            fullWidth={true}
            autoFocus={true}
            value={messageState}
            placeholder="Send Message..."
            style={{
              color: "#c6c6c6",
            }}
            InputProps={{
              style: { color: "#c6c6c6" },
            }}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setMessageStete(event.target.value)}
          >
            {userId}
          </TextField>
          <IconButton size="small" style={{ color: "#c6c6c6", marginLeft: 2 }} onClick={onTextMessage}>
            <SendIcon />
          </IconButton>
        </div>
      </Box>
    </div>
  );
};

export default Chat;
