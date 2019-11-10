import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "@material-ui/core";
import { routes } from "./../../App";

const Menu = ({ loggedIn }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(0);
  }, [loggedIn]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      variant="fullWidth"
      value={value}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleChange}
    >
      <Tab label="Cennik" component={Link} to={routes.priceList}></Tab>
      <Tab label="Opinie" component={Link} to={routes.rates}></Tab>
      {loggedIn && (
        <Tab label="Rachunki" component={Link} to={routes.receitps}></Tab>
      )}
      {loggedIn && (
        <Tab label="Statystyki" component={Link} to={routes.statistics}></Tab>
      )}
    </Tabs>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn
});

export default connect(mapStateToProps)(Menu);
