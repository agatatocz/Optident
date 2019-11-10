import React, { useState } from "react";
import { connect } from "react-redux";
import {
  TableRow,
  TableCell,
  TextField,
  Typography,
  IconButton
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

import {
  updatePosition,
  countSum,
  setEditing
} from "./../../../store/actions/priceList";
import CountCell from "./CountCell";
import DeleteButton from "./DeleteButton";
import validationSchema from "../validationSchema";
import { useStyles } from "../styles";

const EditablePositionRow = ({ position, ...props }) => {
  const classes = useStyles();
  const [name, setName] = useState(position.name);
  const [price, setPrice] = useState(position.price);
  const [description, setDescription] = useState(position.description);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    validationSchema
      .validate({ name, price, description })
      .then(() => {
        if (
          name !== position.name ||
          price !== position.price ||
          description !== position.description
        )
          props
            .updatePosition({
              ...position,
              name,
              price,
              description,
              editing: false
            })
            .then(() => props.countSum());
        else props.setEditing(position, false);
      })
      .catch(error => setErrorMessage(error.message));
  };

  return (
    <>
      <TableRow>
        <TableCell>
          <div className={classes.positionCell}>
            <IconButton onClick={handleSubmit} size="small">
              <SaveIcon className={classes.editIcon} />
            </IconButton>
            <DeleteButton position={position} />
            <TextField
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
            />
          </div>
        </TableCell>
        <TableCell className={classes.bodyCell}>
          <TextField
            type="number"
            value={price}
            onChange={e => {
              setPrice(e.target.value);
            }}
          />
        </TableCell>
        <CountCell position={position} />
      </TableRow>
      <TableRow>
        <TableCell colSpan={3}>
          <TextField
            multiline
            fullWidth
            value={description}
            onChange={e => {
              setDescription(e.target.value);
            }}
          />
        </TableCell>
      </TableRow>
      {errorMessage ? (
        <TableRow>
          <TableCell colSpan={3} className={classes.errorMessage}>
            <Typography>{errorMessage}</Typography>
          </TableCell>
        </TableRow>
      ) : null}
    </>
  );
};

export default connect(
  null,
  { updatePosition, countSum, setEditing }
)(EditablePositionRow);
