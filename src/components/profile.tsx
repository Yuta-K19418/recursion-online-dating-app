import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Result } from "../types/users";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Nations {
  [index: string]: string;
}

const nations: Nations = {
  AU: "Australia",
  BR: "Brazil",
  CA: "Canada",
  CH: "Switzerland",
  DE: "Germany",
  DK: "Denmark",
  ES: "Spain",
  FI: "Finland",
  FR: "France",
  GB: "United Kingdom",
  IE: "Ireland",
  IR: "Iran",
  NO: "Norway",
  NL: "Netherlands",
  NZ: "New Zealand",
  TR: "Turkey",
  US: "United States of America",
};

interface Props {
  userData: Result;
}

const Profile = (props: Props) => {
  const navigate = useNavigate();
  const [modalState, setModalState] = useState(false);
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
        backgroundColor: "#000010",
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
          <LocationOnIcon fontSize="small" />
          {props.userData.location.city} / Age: {props.userData.dob.age}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          sx={{ flexShrink: 0 }}
          style={{ color: "#c6c6c6" }}
          onClick={() => setModalState(true)}
        >
          Profile
        </Button>
        <Modal
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          open={modalState}
          onClose={() => setModalState(false)}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#000010",
              margin: 3,
              padding: 3,
            }}
          >
            <Avatar
              src={props.userData.picture.thumbnail}
              alt=""
              sx={{ maxWidth: "80%", height: "auto", borderRadius: "50%", padding: 2 }}
            />
            <Typography variant="h5" component="h5" color="#c6c6c6">
              {props.userData.name.first} {props.userData.name.last}
            </Typography>
            <Typography variant="subtitle2" color="#c6c6c6">
              {props.userData.email}
            </Typography>
            <Button
              size="small"
              variant="contained"
              color="success"
              sx={{ flexShrink: 0, marginY: 2 }}
              style={{ color: "#c6c6c6" }}
              onClick={() => navigate(`/user/${props.userData.login.uuid}/chat`)}
            >
              Message
            </Button>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: 1,
                marginX: 3,
                paddingX: 1,
                borderBottom: 1,
                borderColor: "#c6c6c6",
              }}
            >
              <Typography variant="subtitle1" color="#c6c6c6">
                Gender
              </Typography>
              <Typography variant="subtitle1" color="#c6c6c6">
                {props.userData.gender === "male" ? "Man" : "Woman"}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: 1,
                marginX: 3,
                paddingX: 1,
                borderBottom: 1,
                borderColor: "#c6c6c6",
              }}
            >
              <Typography variant="subtitle1" color="#c6c6c6">
                Age
              </Typography>
              <Typography variant="subtitle1" color="#c6c6c6">
                {props.userData.dob.age}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: 1,
                marginX: 3,
                paddingX: 1,
                borderBottom: 1,
                borderColor: "#c6c6c6",
              }}
            >
              <Typography variant="subtitle1" color="#c6c6c6">
                Country
              </Typography>
              <Typography variant="subtitle1" color="#c6c6c6">
                {!!nations[props.userData.nat] ? nations[props.userData.nat] : props.userData.nat}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: 1,
                marginX: 3,
                paddingX: 1,
                borderBottom: 1,
                borderColor: "#c6c6c6",
              }}
            >
              <Typography variant="subtitle1" color="#c6c6c6">
                State
              </Typography>
              <Typography variant="subtitle1" color="#c6c6c6">
                {props.userData.location.state}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: 1,
                marginX: 3,
                paddingX: 1,
                borderBottom: 1,
                borderColor: "#c6c6c6",
              }}
            >
              <Typography variant="subtitle1" color="#c6c6c6">
                City
              </Typography>
              <Typography variant="subtitle1" color="#c6c6c6">
                {props.userData.location.city}
              </Typography>
            </Box>
          </Box>
        </Modal>
        <IconButton
          size="small"
          style={{ color: "#c6c6c6" }}
          onClick={() => navigate(`/user/${props.userData.login.uuid}/chat`)}
        >
          <MessageIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Profile;
