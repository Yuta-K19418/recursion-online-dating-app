import { Box, Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SideNavBar = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        color: "white",
        backgroundColor: "#000010",
        width: 200,
        height: "100%",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <Button sx={{ color: "#c6c6c6", flexShrink: 0, marginBottom: 3 }} onClick={() => navigate("/")}>
          HOME
        </Button>
        <Button sx={{ color: "#c6c6c6", flexShrink: 0, marginBottom: 3 }} onClick={() => navigate("/user-list")}>
          USER LIST
        </Button>
        <Button sx={{ color: "#c6c6c6", flexShrink: 0, marginBottom: 3 }} onClick={() => navigate("/message-list")}>
          MESSAGE LIST
        </Button>
      </Toolbar>
    </Box>
  );
};

export default SideNavBar;
