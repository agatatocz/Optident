import React, { useState } from "react";
import { Button } from "@material-ui/core";
import AddRateForm from "./AddRateForm";
import { useStyles } from "./styles";

const AddRateButton = () => {
  const classes = useStyles();
  const [showForm, setShowForm] = useState(false);
  const hideForm = () => setShowForm(false);
  return showForm ? (
    <AddRateForm hideForm={hideForm} />
  ) : (
    <Button
      color="secondary"
      variant="contained"
      className={`${classes.addButton} ${classes.button}`}
      onClick={() => setShowForm(true)}
    >
      Dodaj swoją opinię
    </Button>
  );
};

export default AddRateButton;
