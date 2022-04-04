import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";

export default function ButtonAppBar() {
  // let mail = JSON.parse(localStorage.getItem("Name"));
  // const navigation = useNavigate();

  // function logout() {
  //   localStorage.clear();
  //   if (mail) {
  //     navigation("/");
  //   }
  // }
  const theme = useTheme();
  const useStyle = makeStyles({
    navIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },
    navItemContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "none !important",
      },
    },
    navLogo: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "right",
      },
    },
  });
  const { navIcon, navItemContainer, navLogo } = useStyle();
  const [state, setState] = React.useState(false);
  const [email, setEmail] = React.useState(false);

  const list = () => (
    <>
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          <ListItem button>
            <ListItemText>Home </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>service </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText> </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>Register </ListItemText>
          </ListItem>
        </List>
      </Box>
    </>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={navIcon}
              onClick={() => setState(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className={navLogo}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ textDecoration: "none" }}
            >
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/"
              >
                <Button color="inherit">logo</Button>
              </NavLink>
            </Typography>
            <Box className={navItemContainer}>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/service"
              >
                <Button color="inherit">service</Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/service"
              >
                <Button color="inherit">appointment</Button>
              </NavLink>
              {/* {mail ? (
                <Button onClick={logout} color="inherit">
                  Logout:{mail}
                </Button>
              ) : ( */}
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/login"
              >
                <Button color="inherit">Login</Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/login"
              >
                <Button color="inherit">Registration</Button>
              </NavLink>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            {list()}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
}
