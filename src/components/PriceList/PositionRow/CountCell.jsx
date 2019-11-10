import React from "react";
import { connect } from "react-redux";
import { TableCell, Typography, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/AddCircleOutline";
import RemoveIcon from "@material-ui/icons/RemoveCircleOutline";
import {
  incrementPosition,
  decrementPosition,
  countSum
} from "../../../store/actions/priceList";
import { useStyles } from "../styles";

const CountCell = ({ position, ...props }) => {
  const classes = useStyles();

  const handleIncrement = position => {
    props.incrementPosition(position);
    props.countSum();
  };

  const handleDecrement = position => {
    props.decrementPosition(position);
    props.countSum();
  };

  return (
    <TableCell>
      <div className={classes.count}>
        <IconButton
          size="small"
          onClick={() => handleDecrement(position)}
          color="primary"
        >
          <RemoveIcon />
        </IconButton>
        <Typography>{position.count}</Typography>
        <IconButton
          size="small"
          onClick={() => handleIncrement(position)}
          color="primary"
        >
          <AddIcon />
        </IconButton>
      </div>
    </TableCell>
  );
};

const mapStateToProps = state => ({
  positions: state.priceList.positions
});

export default connect(
  mapStateToProps,
  { incrementPosition, decrementPosition, countSum }
)(CountCell);
