import { Box, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../stores";
import { Result } from "../types/users";

const Chat = () => {
  const { userId } = useParams();
  const usersData = useSelector((state: RootState) => state.users["users"]).results.filter(
    (user: Result) => user.login.uuid === userId
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <TextField
          fullWidth={true}
          autoFocus={true}
          placeholder="Send Message..."
          style={{
            color: "#c6c6c6",
          }}
        >
          {userId}
        </TextField>
      </Box>
    </div>
  );
};

export default Chat;
