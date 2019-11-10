import React from "react";
import { connect } from "react-redux";
import {
  Paper,
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow
} from "@material-ui/core";
import ReceiptRow from "./ReceiptRow";
import { useStyles } from "./styles";

const Receipts = ({ receipts }) => {
  const classes = useStyles();
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" className={classes.headCell}>
              Numer rachunku
            </TableCell>
            <TableCell align="center" className={classes.headCell}>
              Data
            </TableCell>
            <TableCell align="center" className={classes.headCell}>
              Suma
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {receipts.map(receipt => (
            <ReceiptRow key={receipt.id} receipt={receipt}></ReceiptRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

const mapStateToProps = state => ({
  receipts: state.receipts
});

export default connect(mapStateToProps)(Receipts);
