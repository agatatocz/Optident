import React from "react";
import { TableRow, TableCell } from "@material-ui/core";
import { useStyles } from "./styles";

const SumRow = ({ sum }) => {
  const classes = useStyles();
  return (
    <TableRow>
      <TableCell className={classes.sumText}>Łączna cena:</TableCell>
      <TableCell />
      <TableCell className={classes.sum}>{sum} PLN</TableCell>
    </TableRow>
  );
};

export default SumRow;
