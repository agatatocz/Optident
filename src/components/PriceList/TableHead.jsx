import React from "react";
import {
  TableRow,
  TableCell,
  TableHead as MuiTableHead
} from "@material-ui/core";
import { useStyles } from "./styles";

const TableHead = () => {
  const classes = useStyles();
  return (
    <MuiTableHead>
      <TableRow>
        <TableCell className={classes.headCell}>Usługa</TableCell>
        <TableCell className={classes.headCell}>Cena</TableCell>
        <TableCell className={classes.headCell}>Ilość</TableCell>
      </TableRow>
    </MuiTableHead>
  );
};

export default TableHead;
