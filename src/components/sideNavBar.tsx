import { Box, Button, Toolbar } from "@mui/material";

const SideNavBar = () => {
  return (
    <Box
      sx={{
        color: "white",
        backgroundColor: "#000000",
        width: 200,
        height: "100%",
      }}
    >
      <Toolbar sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 5,
      }}>
          <Button sx={{color: "#c6c6c6", flexShrink: 0, marginBottom: 3}}>
              HOME
          </Button>
          <Button sx={{color: "#c6c6c6", flexShrink: 0, marginBottom: 3}}>
              USER LIST
          </Button>
          <Button sx={{color: "#c6c6c6", flexShrink: 0, marginBottom: 3}}>
              MESSAGE LIST
          </Button>
      </Toolbar>
    </Box>
  );
};

export default SideNavBar;
