import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";

interface Props {
  menuButtonState: boolean;
  setMenuButtonState: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppBar = (props: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static" style={{ color: "#c6c6c6", backgroundColor: "#000080" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => props.setMenuButtonState(!props.menuButtonState)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Online Dating App
          </Typography>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};

export default AppBar;
