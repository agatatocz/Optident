import React, { useState } from "react";
import { TableCell, TableRow } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ReceiptDetails from "./ReceiptDetails";
import { useStyles } from "./styles";

const ReceiptRow = ({ receipt }) => {
  const classes = useStyles();
  const [showDetails, setShowDetails] = useState(false);
  const switchShowDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <>
      <TableRow onClick={switchShowDetails}>
        <TableCell align="center">
          {showDetails ? (
            <KeyboardArrowDownIcon className={classes.icon} />
          ) : (
            <KeyboardArrowRightIcon className={classes.icon} />
          )}
          {receipt.id}
        </TableCell>
        <TableCell align="center">{receipt.date}</TableCell>
        <TableCell align="center">{receipt.sum} PLN</TableCell>
      </TableRow>
      {showDetails && <ReceiptDetails positions={receipt.positions} />}
    </>
  );
};

export default ReceiptRow;
