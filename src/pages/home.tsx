import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        sx={{ flexShrink: 0 }}
        style={{ color: "#c6c6c6" }}
        onClick={() => navigate("/user-list")}
      >
        SEARCH USER
      </Button>
    </div>
  );
};
export default Home;
