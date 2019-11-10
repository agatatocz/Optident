import React from "react";
import { Paper, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";
import { useStyles } from "./styles";

const Rate = ({ rate }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.rate}>
      <Typography className={classes.email}>{rate.email}</Typography>
      <Rating
        precision={0.5}
        value={rate.grade}
        readOnly
        icon={<FontAwesomeIcon icon={faTooth} className={classes.icon} />}
      />
      <Typography>{rate.description}</Typography>
    </Paper>
  );
};

export default Rate;
