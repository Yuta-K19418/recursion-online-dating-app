import { Avatar, Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../stores";
import { Result } from "../types/users";

interface Props {
  setGender: React.Dispatch<React.SetStateAction<string>>;
}

const Home = (props: Props) => {
  const navigate = useNavigate();
  const usersData = useSelector((state: RootState) => state.users["users"]);
  const messages = useSelector((state: RootState) => state.messages["messages"]);
  const finalUserId = Object.keys(messages).splice(-1)[0];
  if (usersData.results.length < 1) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "70%",
          }}
        >
          <Typography
            variant="h4"
            component="div"
            color="#c6c6c6"
            sx={{
              marginBottom: 3,
            }}
          >
            You are
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "23%",
            }}
          >
            <Button
              variant="contained"
              sx={{ flexShrink: 0 }}
              style={{ color: "#c6c6c6" }}
              onClick={() => {
                props.setGender("female");
                navigate("/user-list");
              }}
            >
              MAN
            </Button>
            <Button
              variant="contained"
              sx={{ flexShrink: 0 }}
              style={{ color: "#c6c6c6" }}
              onClick={() => {
                props.setGender("male");
                navigate("/user-list");
              }}
            >
              WOMAN
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    if (!!messages && Object.keys(messages).length > 0) {
      const finalUserMessage = messages[finalUserId];
      const finalUserData = usersData.results.filter((user: Result) => user.login.uuid === finalUserId)[0];
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography style={{ marginBottom: 5 }} variant="h4" component="div" color="#c6c6c6">
            Let's Contact {finalUserData.name.first} {finalUserData.name.last} !!!!!!
          </Typography>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              width: "70%",
              margin: 6,
              padding: 6,
              backgroundColor: "#000010",
            }}
            onClick={() => navigate(`/user/${finalUserId}/chat`)}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "90%",
              }}
            >
              <Avatar
                src={finalUserData.picture.thumbnail}
                alt=""
                sx={{ maxWidth: "80%", height: "auto", padding: 2 }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "13%",
                }}
              >
                <Typography variant="body2" color="#c6c6c6">
                  {finalUserData.name.first}
                </Typography>
                <Typography variant="body2" color="#c6c6c6">
                  {finalUserData.name.last}
                </Typography>
              </div>
              <Typography variant="body2" color="#c6c6c6">
                {finalUserMessage.slice(-1)[0].textedTime}
              </Typography>
              <Typography variant="body2" color="#c6c6c6">
                {finalUserMessage.slice(-1)[0].message}
              </Typography>
            </div>
          </Box>
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant="h4" component="div" color="#c6c6c6">
            There is no message...
          </Typography>
        </div>
      );
    }
  }
};
export default Home;
