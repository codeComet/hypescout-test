import React from "react";
import {
  Box,
  Typography,
  OutlinedInput,
  InputLabel,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import { FiSearch } from "react-icons/fi";
import { makeStyles } from "@mui/styles";
import { BiFilterAlt } from "react-icons/bi";

const SearchBar = () => {
  const outlinedInputStyles = useOutlinedInputStyles();
  return (
    <Box className={outlinedInputStyles.searchParent}>
      <Box>
        <Typography variant="h5">Profile(100)</Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "50%", md: "55%", lg: "70%" },
          my: { xs: 2, sm: 2, md: 0 },
        }}
      >
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel
            htmlFor="outlined-adornment-Search-Profile"
            className={outlinedInputStyles.inputLabel}
          >
            Search Profile
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-Search-Profile"
            startAdornment={
              <InputAdornment position="start">
                <FiSearch />
              </InputAdornment>
            }
            label="Search Profile"
            className={outlinedInputStyles.root}
          />
        </FormControl>
      </Box>
      <Box>
        <button className={outlinedInputStyles.filterButton}>
          <BiFilterAlt style={{ fontSize: "20px", marginRight: "4px" }} />
          Advance Filter
        </button>
      </Box>
    </Box>
  );
};

export default SearchBar;

const useOutlinedInputStyles = makeStyles((theme) => ({
  root: {
    "& $notchedOutline": {
      borderColor: theme.palette.text.primary,
    },
    "&:hover $notchedOutline": {
      borderColor: "#323246 !important",
    },
    "&$focused $notchedOutline": {
      borderColor: "#323246 !important",
    },
  },
  searchParent: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
    padding: "0.7rem 1rem",
    borderRadius: "0.5rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: "0.9rem 1rem",
    },
  },
  inputLabel: {
    // color: theme.palette.text.primary + " !important",
    "&.Mui-focused": {
      color: theme.palette.text.primary + " !important",
    },
  },
  filterButton: {
    display: "flex",
    alignItems: "center",
    border: "none",
    borderRadius: "4px",
    padding: "14px 15px",
    color: "#fff",
    backgroundColor: "#564FB1",
    fontFamily: "Sen, sans-serif",
    fontSize: "16px",
    transition: "all 0.3s ease",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#38346e",
    },
  },
}));
