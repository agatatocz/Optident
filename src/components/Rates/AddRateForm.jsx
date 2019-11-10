import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, TextField, Paper, Typography, Box } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import { addRate } from "./../../store/actions/rates";
import { useStyles } from "./styles";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Proszę wpisać email"),
  grade: Yup.number()
    .min(0)
    .max(5)
    .required("Proszę podać ocenę od 0 do 5"),
  description: Yup.string().required("Proszę wpisać opinię")
});

const AddRateForm = ({ addRate, hideForm }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState(0);
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitting(true);
    validationSchema
      .validate({ email, grade, description })
      .then(() => {
        addRate({ email, grade, description }).then(() => {
          setSubmitting(false);
          hideForm();
        });
      })
      .catch(error => setErrorMessage(error.message));
  };

  return (
    <Paper className={classes.rate}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email*"
          value={email}
          type="email"
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <Box className={classes.gradingField}>
          <Typography variant="body2">Ocena*</Typography>
          <Rating
            name="rate"
            value={grade}
            onChange={(event, newValue) => {
              setGrade(newValue);
            }}
            icon={<FontAwesomeIcon icon={faTooth} className={classes.icon} />}
          />
        </Box>

        <TextField
          label="Opinia*"
          value={description}
          type="text"
          multiline
          fullWidth
          onChange={e => {
            setDescription(e.target.value);
          }}
        />
        {errorMessage ? (
          <Typography color="error">{errorMessage}</Typography>
        ) : null}
        <div className={classes.buttonsContainer}>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            className={`${classes.addButton} ${classes.button}`}
            disabled={submitting}
          >
            Zapisz
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            onClick={hideForm}
          >
            Anuluj
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default connect(
  null,
  { addRate }
)(AddRateForm);
