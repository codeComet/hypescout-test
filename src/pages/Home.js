import React from "react";
import { makeStyles } from "@mui/styles";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.parent}>
      <div className={classes.container}>
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;

const useStyles = makeStyles((theme) => ({
  parent: {
    padding: "6rem 1rem",
    backgroundColor: theme.palette.background.default,
    height: "auto",
    color: theme.palette.text.primary,
  },
  container: {
    margin: "0 auto",

    [theme.breakpoints.up("md")]: {
      width: "85% !important",
    },
    [theme.breakpoints.up("xl")]: {
      width: "85% !important",
    },

    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
    },
  },
}));
