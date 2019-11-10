import React from "react";
import { TextField as MUITextField, FormHelperText } from "@material-ui/core";
import { useStyles } from "./styles";

const TextField = ({ label, name, ...props }) => {
  const classes = useStyles();
  return (
    <>
      <MUITextField
        variant="outlined"
        label={label}
        name={name}
        type={props.type}
        value={props.values[name]}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        className={classes.textField}
        error={props.errors[name] && props.touched[name]}
      />
      {props.errors[name] && props.touched[name] && (
        <FormHelperText className={classes.helperText}>
          {props.errors[name]}
        </FormHelperText>
      )}
    </>
  );
};

export default TextField;
