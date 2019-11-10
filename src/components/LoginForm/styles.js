import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  form: {
    padding: "0.5em",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  textField: { marginTop: "0.2em" },
  helperText: {
    marginBottom: "0.3em"
  },
  button: {
    color: "white",
    fontWeight: "bold",
    marginTop: "0.2em"
  }
});
