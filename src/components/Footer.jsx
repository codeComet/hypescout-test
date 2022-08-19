import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Container } from "@mui/material";
import darkLogo from "../assets/img/hypescout-dark.png";
import lightLogo from "../assets/img/hypescout-light.png";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.footerParent}>
        <Container maxWidth="xl" className={classes.footerContainer}>
          <Box className={classes.footerItems}>
            <Box className={classes.footerItem}>
              <img
                src={theme.palette.mode === "dark" ? darkLogo : lightLogo}
                alt="hypescout logo"
                className={classes.logo}
              />
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fermentum sed ultricies volutpat rhoncus faucibus sit.{" "}
              </Typography>
              <Box className={classes.social}>
                <AiFillFacebook />
                <AiFillInstagram />
                <AiFillLinkedin />
                <AiOutlineTwitter />
              </Box>
            </Box>
            <Box className={classes.footerItem}>
              <Typography variant="h6">Company</Typography>
              <Box className={classes.pages}>
                <Typography>About Us</Typography>
                <Typography>Careers</Typography>
                <Typography>Case Study</Typography>
                <Typography>Blog</Typography>
                <Typography>Contact Us</Typography>
              </Box>
            </Box>
            <Box className={classes.footerItem}>
              <Typography variant="h6">Influencer</Typography>
              <Box className={classes.pages}>
                <Typography>Join as Influencer</Typography>
                <Typography>HypeSocial</Typography>
              </Box>
            </Box>
            <Box className={classes.footerItem}>
              <Typography variant="h6">Advertiser</Typography>
              <Box className={classes.pages}>
                <Typography>Join as Advertiser</Typography>
                <Typography>Hypelink</Typography>
              </Box>
            </Box>
          </Box>
          <Box className={classes.copyright}>
            <Box className={classes.copyText}>
              <Typography>© Hypescout 2022. All rights reserved</Typography>
            </Box>
            <Box className={classes.copyLinks}>
              <Typography>Terms & Conditions</Typography>
              <Typography>Privacy</Typography>
              <Typography>Sitemap</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;

const useStyles = makeStyles((theme) => ({
  footerParent: {
    backgroundColor: theme.palette.background.paper,
    padding: "5rem 0 1.3rem 0",
  },
  footerContainer: {
    [theme.breakpoints.up("md")]: {
      width: "85% !important",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
    },
  },
  footerItems: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
  },
  footerItem: {
    width: "30%",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    "&:first-child": {
      width: "40%",
      marginRight: "4rem",
      "& .MuiTypography-body1": {
        color: theme.palette.text.paragraph,
        margin: "1rem 0",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: "auto",
        textAlign: "center",
      },
    },
    "& h6": {
      color: theme.palette.text.primary,
      marginBottom: ".5rem",
      fontWeight: "bold",
      fontSize: "1rem",
    },
  },
  pages: {
    color: theme.palette.text.paragraph,
    "& .MuiTypography-body1": {
      fontSize: ".9rem",
      marginBottom: ".5rem",
    },
  },

  social: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "1rem auto",
    color: theme.palette.text.secondary,
    "& svg": {
      margin: "0 .5rem",
      fontSize: "1.2rem",
      "&:hover": {
        color: "#fff",
        cursor: "pointer",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "center",
    },
  },
  copyright: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    margin: "2rem 0",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  copyLinks: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& .MuiTypography-body1": {
      color: theme.palette.text.paragraph,
      fontSize: ".8rem",
      "&:hover": {
        cursor: "pointer",
      },
      [theme.breakpoints.down("sm")]: {
        margin: "0 .5rem",
        justifyContent: "center",
      },
    },
    [theme.breakpoints.up("lg")]: {
      width: "22% !important",
      marginBottom: ".7rem",
    },
    [theme.breakpoints.only("md")]: {
      width: "30%",

      marginBottom: ".7rem",
    },
    [theme.breakpoints.up("sm")]: {
      width: "40%",

      marginBottom: ".7rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "center",
      marginBottom: ".7rem",
    },
  },
  copyText: {
    "& .MuiTypography-body1": {
      color: theme.palette.text.paragraph,
      fontSize: ".8rem",
    },
  },
  logo: {
    [theme.breakpoints.up("md")]: {
      width: "120px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "130px",
    },
  },
}));
