import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Pagination } from "@mui/material";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import SearchBar from "../components/SearchBar";
import { users } from "../data";
import UserCard from "../components/UserCard";

const Home = () => {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  return (
    <div className={classes.parent}>
      <div className={classes.container}>
        <SearchBar setSearch={setSearch} />
        <div className={classes.users}>
          {users
            .filter((user) => user.name.toLowerCase().includes(search))
            .map((user) => (
              <div className={classes.user} key={user.id}>
                <UserCard user={user} />
              </div>
            ))}
        </div>
        {search.length === 0 && (
          <div className={classes.pagination}>
            <Typography>
              <BsArrowLeft /> Prev
            </Typography>
            <Pagination count={10} hidePrevButton hideNextButton />
            <Typography>
              Next
              <BsArrowRight />
            </Typography>
          </div>
        )}
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
      width: "83% !important",
    },
    [theme.breakpoints.up("lg")]: {
      width: "80% !important",
    },

    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
    },
  },
  users: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    padding: "1rem",
    justifyContent: "center",
  },
  pagination: {
    display: "flex",
    width: "88%",
    margin: "auto",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      width: "100%",
    },
    "& .MuiTypography-body1": {
      display: "flex",
      alignItems: "center",
      "& svg": {
        margin: "0 10px",
        [theme.breakpoints.down("sm")]: {
          margin: "0 5px",
        },
      },
      "&:hover": {
        cursor: "pointer",
        color: "#637381",
      },

      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
}));
