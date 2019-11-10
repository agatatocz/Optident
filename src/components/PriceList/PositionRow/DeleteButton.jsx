import React from "react";
import { connect } from "react-redux";
import { IconButton } from "@material-ui/core";
import MuiDeleteIcon from "@material-ui/icons/Delete";
import { deletePosition } from "../../../store/actions/priceList";
import { useStyles } from "../styles";

const DeleteButton = ({ position, deletePosition }) => {
  const classes = useStyles();
  const handleDelete = () => {
    if (window.confirm(`Czy na pewno chcesz usunąć usługę ${position.name}?`))
      deletePosition(position);
  };
  return (
    <IconButton onClick={handleDelete} size="small">
      <MuiDeleteIcon className={classes.deleteIcon} />
    </IconButton>
  );
};

export default connect(
  null,
  { deletePosition }
)(DeleteButton);
