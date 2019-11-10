import React from "react";
import { connect } from "react-redux";
import { Paper, Typography, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    padding: "1rem",
    margin: "1rem"
  },
  weekHeader: {
    color: "#F2C94C"
  },
  mounthHeader: {
    color: "#F2994A"
  },
  yearHeader: {
    color: "#EB5757"
  }
});

const Statistics = ({ statistics }) => {
  const classes = useStyles();
  return (
    <Container>
      <Paper className={classes.paper}>
        <Typography variant="h4" className={classes.weekHeader}>
          Ostatni tydzień
        </Typography>
        <Typography>
          Przychody: <b>{statistics.cashWeek} PLN</b>
        </Typography>
        <Typography>
          Najczęstszy zabieg: <b>{statistics.positionWeek}</b>
        </Typography>
      </Paper>
      <Paper className={classes.paper}>
        <Typography variant="h4" className={classes.mounthHeader}>
          Ostatni miesiąc
        </Typography>
        <Typography>
          Przychody: <b>{statistics.cashMonth} PLN</b>
        </Typography>
        <Typography>
          Najczęstszy zabieg: <b>{statistics.positionMonth}</b>
        </Typography>
      </Paper>
      <Paper className={classes.paper}>
        <Typography variant="h4" className={classes.yearHeader}>
          Ostatni rok
        </Typography>
        <Typography>
          Przychody: <b>{statistics.cashYear} PLN</b>
        </Typography>
        <Typography>
          Najczęstszy zabieg: <b>{statistics.positionYear}</b>
        </Typography>
      </Paper>
    </Container>
  );
};

const mapStateToProps = state => ({
  statistics: state.statistics
});

export default connect(mapStateToProps)(Statistics);
