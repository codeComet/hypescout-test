import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import darkLogo from "../assets/img/hypescout-dark.png";
import lightLogo from "../assets/img/hypescout-light.png";
import { makeStyles } from "@mui/styles";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import { ColorModeContext } from "../ColorContext";

const pages = ["Dashboard", "Campaign", "Hypesocial", "Insights"];

const Navbar = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const classes = useStyles();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img
              src={theme.palette.mode === "dark" ? darkLogo : lightLogo}
              alt="Hypescout"
              className={classes.logo}
            />

            {/* Mobile responsive menu */}
            <Box
              sx={{
                flexGrow: { xs: 0, sm: 0, md: 1 },
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
                order: { xs: 2, sm: 2, md: 1 },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <GiHamburgerMenu />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                order: { xs: 2, sm: 2, md: 1 },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    display: "block",
                    color: theme.palette.text.primary,
                    textTransform: "none",
                  }}
                  className={classes.button}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                flexGrow: { xs: 1, sm: 1, md: 0 },
                order: { xs: 1, md: 2 },
                justifyContent: "flex-end",
                textAlign: "right",
              }}
            >
              <IconButton>
                <BiBell className={classes.navIcon} />
              </IconButton>
              <IconButton onClick={colorMode.toggleColorMode}>
                <MdDarkMode className={classes.navIcon} />
              </IconButton>

              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                  className={classes.navIcon}
                />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default Navbar;

const useStyles = makeStyles((theme) => ({
  button: {
    "&:hover": {
      background: theme.components.MuiButton.root,
    },
  },
  navIcon: {
    color: theme.palette.text.primary,
    [theme.breakpoints.up("sm")]: {
      margin: "0 5px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "20px",
    },
  },
  logo: {
    [theme.breakpoints.down("sm")]: {
      width: "100px",
    },
  },
}));
