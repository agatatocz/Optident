import React from "react";
import { connect } from "react-redux";
import { Button, makeStyles } from "@material-ui/core";
import { logOut } from "../../store/actions/user";
import { Link } from "react-router-dom";
import { routes } from "./../../App";

const useStyles = makeStyles({
  button: {
    border: "1px solid #eee",
    marginLeft: "1.5em",
    color: "#eee",
    width: "10em",
    fontWeight: "bold"
  }
});

const LogoutButton = ({ logOut }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      onClick={logOut}
      component={Link}
      to={routes.priceList}
    >
      Wyloguj
    </Button>
  );
};

export default connect(
  null,
  { logOut }
)(LogoutButton);
