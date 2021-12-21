import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import { Result } from "../types/users";

interface Props {
  userData: Result;
}

const Profile = (props: Props) => {
  return (
    <Card
      sx={{
        width: 250,
        height: 450,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 2,
        backgroundColor: "#000000",
      }}
    >
      <CardMedia
        component="img"
        image={props.userData.picture.thumbnail}
        alt=""
        sx={{ maxWidth: "80%", height: "auto", borderRadius: "50%", padding: 2 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="#c6c6c6">
          {props.userData.name.first} {props.userData.name.last}
        </Typography>
        <Typography variant="body2" color="#c6c6c6">
          {props.userData.location.city} / Age: {props.userData.dob.age}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" sx={{ flexShrink: 0 }} style={{ color: "#c6c6c6" }}>
          Profile
        </Button>
        <IconButton size="small" style={{ color: "#c6c6c6" }}>
          <MessageIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Profile;
