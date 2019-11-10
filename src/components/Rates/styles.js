import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  button: {
    margin: "0.7rem 0.2rem 0.2rem"
  },
  addButton: {
    color: "white"
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  rate: {
    margin: "0.5rem",
    backgroundColor: "rgba(86, 204, 242,0.1)",
    border: "1px solid #2D9CDB",
    borderRadius: "15px",
    padding: "0.7rem",
    width: "100%",
    maxWidth: "800px"
  },
  gradingField: {
    marginTop: "1rem",
    color: "grey"
  },
  email: {
    color: "#4F4F4F"
  },
  icon: {
    fontSize: "1rem",
    margin: "1px"
  }
});
