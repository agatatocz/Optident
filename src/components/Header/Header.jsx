import React from "react";
import { connect } from "react-redux";
import { AppBar, makeStyles, Typography } from "@material-ui/core";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";

const useStyles = makeStyles({
  header: {
    padding: "1em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    color: "white",
    fontSize: "2em",
    fontWeight: "bold"
  }
});

const Header = ({ loggedIn }) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.header} position="relative">
      <Typography className={classes.logo}>Optident</Typography>
      {loggedIn ? <LogoutButton /> : <LoginButton />}
    </AppBar>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn
});

export default connect(mapStateToProps)(Header);
