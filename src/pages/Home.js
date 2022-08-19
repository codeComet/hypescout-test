import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
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
  users: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    padding: "1rem",
    justifyContent: "center",
  },
}));
