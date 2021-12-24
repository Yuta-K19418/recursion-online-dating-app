import { Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../stores";

interface Props {
  setGender: React.Dispatch<React.SetStateAction<string>>;
}

const Home = (props: Props) => {
  const navigate = useNavigate();
  const usersData = useSelector((state: RootState) => state.users["users"]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {usersData.results.length < 1 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="div" color="#c6c6c6">
            You are
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
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
      ) : (
        <Typography variant="h4" component="div" color="#c6c6c6">
          There is no message...
        </Typography>
      )}
    </div>
  );
};
export default Home;
