import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import { Button } from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";
import { useStyles } from "./styles";
import TextField from "./TextField";
import { logIn } from "./../../store/actions/user";
import { routes } from "./../../App";

const initialValues = { email: "", password: "" };
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Proszę wpisać email"),
  password: Yup.string().required("Proszę wpisać hasło")
});

const LoginForm = ({ logIn, history }) => {
  const classes = useStyles();

  const handleSubmit = values => {
    logIn(values.email, values.password).then(history.push(routes.priceList));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      render={props => (
        <form onSubmit={props.handleSubmit} className={classes.form}>
          <TextField label="Email" name="email" type="email" {...props} />
          <TextField label="Hasło" name="password" type="password" {...props} />
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            className={classes.button}
          >
            Zaloguj
          </Button>
        </form>
      )}
    />
  );
};

const enhance = compose(
  withRouter,
  connect(
    null,
    { logIn }
  )
);

export default enhance(LoginForm);
