import React, { useState } from "react";
import { connect } from "react-redux";
import {
  TableRow,
  TableCell,
  TextField,
  Typography,
  Fab
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { createPosition } from "../../store/actions/priceList";
import validationSchema from "./validationSchema";
import { useStyles } from "./styles";

const AddPositionRow = ({ hideAddPositionRow, createPosition }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    validationSchema
      .validate({ name, price, description })
      .then(() => {
        createPosition({ name, price, description });
        hideAddPositionRow();
      })
      .catch(error => setErrorMessage(error.message));
  };

  return (
    <>
      <TableRow>
        <TableCell>
          <TextField
            fullWidth
            placeholder="Nazwa usługi"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </TableCell>
        <TableCell className={classes.bodyCell}>
          <TextField
            placeholder="Cena"
            type="number"
            value={price}
            onChange={e => {
              setPrice(e.target.value);
            }}
          />
        </TableCell>
        <TableCell>
          <Fab
            variant="extended"
            color="secondary"
            className={classes.addButton}
            onClick={handleSubmit}
          >
            <AddIcon />
            Dodaj
          </Fab>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={3}>
          <TextField
            placeholder="Opis"
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
  { createPosition }
)(AddPositionRow);
