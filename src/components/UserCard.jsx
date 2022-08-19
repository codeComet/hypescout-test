import React from "react";
import { Box, Typography } from "@mui/material";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiClock } from "react-icons/fi";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { makeStyles } from "@mui/styles";

const UserCard = ({ user }) => {
  const classes = useStyles();
  const { image, name, joined, location, followers, category, gender } = user;
  return (
    <Box className={classes.cardParent}>
      <Box className={classes.cardImg}>
        <img src={image} alt={name} />
      </Box>
      <Box className={classes.cardDescription}>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body1">
          <HiOutlineLocationMarker /> {location}
        </Typography>
        <Typography variant="body1">
          <FiClock /> Joined On: {joined}
        </Typography>
      </Box>
      <Box className={classes.social}>
        <AiFillFacebook />
        <AiFillInstagram />
        <AiFillLinkedin />
        <AiOutlineTwitter />
      </Box>
      <Box className={classes.cardFooter}>
        <Box className={classes.cardFooterBox}>
          <Typography variant="h6">{followers}</Typography>
          <Typography variant="body2">followers</Typography>
        </Box>
        <Box className={classes.cardFooterBox}>
          <Typography variant="h6">{category}</Typography>
          <Typography variant="body2">Categories</Typography>
        </Box>
        <Box className={classes.cardFooterBox}>
          <Typography variant="h6">{gender}</Typography>
          <Typography variant="body2">Gender</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default UserCard;

const useStyles = makeStyles((theme) => ({
  cardParent: {
    padding: "4rem 2rem",
    backgroundColor: theme.palette.background.paper,

    borderRadius: ".5rem",

    [theme.breakpoints.up("lg")]: {
      width: "280px",
      margin: "1rem",
    },
    [theme.breakpoints.only("md")]: {
      width: "280px",
      margin: "1rem",
    },
    [theme.breakpoints.only("sm")]: {
      width: "250px",
      margin: "1rem",
    },
    [theme.breakpoints.only("xs")]: {
      width: "235px",
      margin: "1rem .2rem",
    },
  },
  cardImg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem",
    "& img": {
      width: "100px",
      height: "100px",
      objectFit: "cover",
      borderRadius: "50%",
    },
  },
  cardDescription: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#637381",
    "& h5": {
      color: theme.palette.text.primary,
      marginBottom: ".5rem",
      fontWeight: "bold",
    },
    "& .MuiTypography-body1": {
      display: "flex",
      alignItems: "center",
      margin: "0 0 .4rem",
      color: theme.palette.text.paragraph,
      "& svg": {
        marginRight: "5px",
        fontSize: "1.2rem",
      },
    },
  },
  social: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem auto",
    color: theme.palette.text.secondary,
    "& svg": {
      margin: "0 .5rem",
      fontSize: "1.2rem",
      "&:hover": {
        color: theme.palette.text.primary,
        cursor: "pointer",
      },
    },
  },
  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "2rem",
  },
  cardFooterBox: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: ".2rem .8rem",
    border: "1px dashed #637381",
    borderRadius: ".2rem",
    "& .MuiTypography-body2": {
      color: theme.palette.text.paragraph,
    },
    "& .MuiTypography-h6": {
      color: theme.palette.text.secondary,
      fontSize: "1rem",
    },
    [theme.breakpoints.only("sm")]: {
      padding: ".2rem .4rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: ".2rem .4rem",
    },
  },
}));
