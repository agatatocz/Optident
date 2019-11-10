import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./styles";

const AddPositionButton = ({ showAddPositionRow, setShowAddPositionRow }) => {
  const classes = useStyles();
  const handleClick = () => {
    setShowAddPositionRow(!showAddPositionRow);
  };
  const getColor = () => {
    return showAddPositionRow ? "default" : "secondary";
  };

  return (
    <Button
      onClick={handleClick}
      variant="contained"
      color={getColor()}
      className={classes.addButton}
    >
      {showAddPositionRow ? "Anuluj" : "Dodaj usługę"}
    </Button>
  );
};

export default AddPositionButton;
