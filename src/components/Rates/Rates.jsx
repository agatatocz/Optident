import React from "react";
import { connect } from "react-redux";
import { Container } from "@material-ui/core";
import AddRateButton from "./AddRateButton";
import Rate from "./Rate";
import { useStyles } from "./styles";

const Rates = ({ loggedIn, rates }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      {loggedIn || <AddRateButton />}
      {rates.map(rate => (
        <Rate rate={rate} key={rate.id} />
      ))}
    </Container>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  rates: state.rates
});

export default connect(mapStateToProps)(Rates);
