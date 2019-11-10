import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { useStyles } from "./styles";

const ReceiptDetails = ({ positions }) => {
  const classes = useStyles();
  return positions.map((position, i) => (
    <TableRow key={i}>
      <TableCell align="left" className={classes.detailsCell}>
        {position.name}
      </TableCell>
      <TableCell></TableCell>
      <TableCell align="center">{position.price} PLN</TableCell>
    </TableRow>
  ));
};

export default ReceiptDetails;
