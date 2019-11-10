import { makeStyles } from "@material-ui/core";
import { theme } from "../../settings/theme";

export const useStyles = makeStyles({
  headCell: {
    fontWeight: "bold",
    textAlign: "center"
  },
  bodyCell: {
    textAlign: "center"
  },
  positionCell: {
    display: "flex",
    alignItems: "center"
  },
  count: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.4rem"
  },
  deleteIcon: {
    color: theme.palette.error.dark
  },
  editIcon: {
    color: theme.palette.primary.dark
  },
  addButton: {
    color: "white",
    margin: "0.2rem"
  },
  buttonsContainer: {
    width: "fit-content",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "1rem"
  },
  sumText: {
    fontWeight: "bold"
  },
  sum: {
    fontWeight: "bold",
    color: theme.palette.primary.dark,
    fontSize: "1.2rem",
    textAlign: "center"
  },
  errorMessage: {
    color: theme.palette.error.dark,
    textAlign: "center"
  }
});
