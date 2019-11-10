import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { createReceipt } from "../../store/actions/receipts";
import { useStyles } from "./styles";

const CreateReceiptButton = ({ positions, sum, createReceipt }) => {
  const classes = useStyles();

  const getPositionsString = () => {
    const chosenPostions = [];
    positions.forEach(position => {
      if (position.count > 0)
        for (let i = 0; i < position.count; i++)
          chosenPostions.push(position.id);
    });
    return chosenPostions.toString();
  };

  const handleClick = () => {
    const chosenPositions = getPositionsString();
    const now = new Date();
    const date = now.toLocaleString();
    createReceipt({
      date,
      sum,
      positions: chosenPositions
    });
  };

  return (
    <div className={classes.addButtonContainer}>
      <Button
        onClick={handleClick}
        variant="contained"
        color="primary"
        className={classes.addButton}
        disabled={!sum}
      >
        Wystaw rachunek
      </Button>
    </div>
  );
};

const mapStateToProps = state => ({
  positions: state.priceList.positions,
  sum: state.priceList.sum
});

export default connect(
  mapStateToProps,
  { createReceipt }
)(CreateReceiptButton);
