import React from "react";
import { Button, Popover, makeStyles } from "@material-ui/core";
import LoginForm from "./../LoginForm";

const useStyles = makeStyles({
  button: {
    border: "1px solid #eee",
    marginLeft: "1.5em",
    color: "#eee",
    width: "10em",
    fontWeight: "bold"
  }
});

const LoginButton = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="outlined"
        onClick={handleClick}
        className={classes.button}
      >
        zaloguj się jako admin
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <LoginForm />
      </Popover>
    </div>
  );
};

export default LoginButton;
