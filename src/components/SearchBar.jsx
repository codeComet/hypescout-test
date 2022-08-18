import React, { useState } from "react";
import {
  Box,
  Typography,
  OutlinedInput,
  InputLabel,
  FormControl,
  InputAdornment,
  Modal,
  Divider,
  MenuItem,
  Select,
  Slider,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { FiSearch } from "react-icons/fi";
import { makeStyles } from "@mui/styles";
import { BiFilterAlt } from "react-icons/bi";

const followersMarks = [
  {
    value: 0,
    scaledValue: 1000,
    label: "1k",
  },
  {
    value: 25,
    scaledValue: 5000,
    label: "5k",
  },
  {
    value: 50,
    scaledValue: 10000,
    label: "10k",
  },
  {
    value: 75,
    scaledValue: 25000,
    label: "25k",
  },
  {
    value: 100,
    scaledValue: 50000,
    label: "50k",
  },
  {
    value: 125,
    scaledValue: 100000,
    label: "100k",
  },
  {
    value: 150,
    scaledValue: 250000,
    label: "250k",
  },
  {
    value: 175,
    scaledValue: 500000,
    label: "500k",
  },
  {
    value: 200,
    scaledValue: 1000000,
    label: "1M",
  },
];
const scale = (value) => {
  const previousMarkIndex = Math.floor(value / 25);
  const previousMark = followersMarks[previousMarkIndex];
  const remainder = value % 25;
  if (remainder === 0) {
    return previousMark.scaledValue;
  }
  const nextMark = followersMarks[previousMarkIndex + 1];
  const increment = (nextMark.scaledValue - previousMark.scaledValue) / 25;
  return remainder * increment + previousMark.scaledValue;
};

function numFormatter(num) {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(0) + "K"; // convert to K for number from > 1000 < 1 million
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(0) + "M"; // convert to M for number from > 1 million
  } else if (num < 900) {
    return num; // if value < 1000, nothing to do
  }
}
const SearchBar = () => {
  const outlinedInputStyles = useOutlinedInputStyles();
  const [open, setOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(1);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        <button
          className={outlinedInputStyles.filterButton}
          onClick={handleOpen}
        >
          <BiFilterAlt style={{ fontSize: "20px", marginRight: "4px" }} />
          Advance Filter
        </button>
        {/* Advance filter form */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className={outlinedInputStyles.modalParent}
        >
          <Box className={outlinedInputStyles.modalStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Filter Options
            </Typography>
            <Divider />
            <Box className={outlinedInputStyles.modalContent}>
              <form>
                <Box className={outlinedInputStyles.formGroup}>
                  <Typography
                    variant="body1"
                    sx={{ marginTop: "8px", marginBottom: "10px" }}
                  >
                    Influencer's Industry
                  </Typography>
                  <FormControl fullWidth>
                    <InputLabel>Select Options</InputLabel>
                    <Select
                      label="Select Options"
                      className={outlinedInputStyles.select}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box className={outlinedInputStyles.formGroup}>
                  <Typography
                    variant="body1"
                    sx={{ marginTop: "8px", marginBottom: "10px" }}
                  >
                    Influencer's Country
                  </Typography>
                  <FormControl fullWidth>
                    <InputLabel>Select Options</InputLabel>
                    <Select
                      label="Select Options"
                      className={outlinedInputStyles.select}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box className={outlinedInputStyles.formGroup}>
                  <Typography
                    variant="body1"
                    sx={{ marginTop: "8px", marginBottom: "10px" }}
                  >
                    Audience's Country
                  </Typography>
                  <FormControl fullWidth>
                    <InputLabel>Select Options</InputLabel>
                    <Select
                      label="Select Options"
                      className={outlinedInputStyles.select}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box className={outlinedInputStyles.formGroup}>
                  <Typography
                    variant="body1"
                    sx={{ marginTop: "8px", marginBottom: "10px" }}
                  >
                    Influencer's Social Media Platform
                  </Typography>
                  <FormControl fullWidth>
                    <InputLabel>Select Options</InputLabel>
                    <Select
                      label="Select Options"
                      className={outlinedInputStyles.select}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box className={outlinedInputStyles.formGroup}>
                  <Typography
                    variant="body1"
                    sx={{ marginTop: "8px", marginBottom: "10px" }}
                  >
                    Influencer's Social Media Platform
                  </Typography>
                  <FormControl fullWidth>
                    <Slider
                      aria-label="Custom marks"
                      valueLabelFormat={numFormatter}
                      value={sliderValue}
                      scale={scale}
                      min={0}
                      step={5}
                      max={200}
                      onChange={(e, value) => setSliderValue(value)}
                      valueLabelDisplay="auto"
                      marks={followersMarks}
                      className={outlinedInputStyles.slider}
                    />
                  </FormControl>
                </Box>
                <Box className={outlinedInputStyles.formGroup}>
                  <Typography
                    variant="body1"
                    sx={{ marginTop: "20px", marginBottom: "10px" }}
                  >
                    Influencer's Gender
                  </Typography>
                  <FormControl fullWidth>
                    <RadioGroup
                      aria-labelledby="radio-buttons-group-label"
                      defaultValue="male"
                      name="radio-buttons-group"
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        flexDirection: "row",
                      }}
                    >
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                        className={outlinedInputStyles.radio}
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                        className={outlinedInputStyles.radio}
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
                <Box className={outlinedInputStyles.formGroup}>
                  <Box
                    sx={{ display: "flex", justifyContent: "flex-end", my: 2 }}
                  >
                    <button className={outlinedInputStyles.reset}>Reset</button>
                    <button className={outlinedInputStyles.apply}>Apply</button>
                  </Box>
                </Box>
              </form>
            </Box>
          </Box>
        </Modal>
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
    position: "relative",
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
  modalParent: {
    [theme.breakpoints.down("sm")]: {
      overflow: "scroll",
    },
  },
  modalStyle: {
    position: "absolute",
    right: "10%",
    width: 300,
    backgroundColor: theme.palette.background.modal,
    padding: "1rem",
    borderRadius: "0.5rem",
    color: theme.palette.text.primary,
    [theme.breakpoints.up("md")]: {
      top: "28% !important",
      right: "10%",
    },
    [theme.breakpoints.only("sm")]: {
      top: "30% !important",
      right: "5%",
    },
    [theme.breakpoints.down("sm")]: {
      top: "28%",
      right: "0",
      left: "0",
      width: 270,
      margin: "0 auto",
    },
  },
  select: {
    backgroundColor: theme.palette.primary.main,
  },
  slider: {
    color: "#564FB1 !important",
    marginTop: "2rem",
    "& .MuiSlider-valueLabel": {
      backgroundColor: "#564FB1 !important",
    },
  },
  radio: {
    "& .MuiRadio-root": {
      color: "#564fb1 !important",
    },
  },
  reset: {
    backgroundColor: theme.palette.background.button,
    padding: "0.7rem 1rem",
    marginRight: "0.5rem",
    borderRadius: "0.5rem",
    color: theme.palette.text.primary,
    fontFamily: "Sen, sans-serif",
    border: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },
  apply: {
    backgroundColor: "#564FB1",
    padding: "0.7rem 1rem",
    marginRight: "0.5rem",
    borderRadius: "0.5rem",
    color: theme.palette.text.primary,
    fontFamily: "Sen, sans-serif",
    border: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));
