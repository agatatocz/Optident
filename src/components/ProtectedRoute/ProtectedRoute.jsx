import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { routes } from "./../../App";

const ProtectedRoute = ({ loggedIn, ...rest }) => {
  return loggedIn ? <Route {...rest} /> : <Redirect to={routes.empty} />;
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn
});

export default connect(mapStateToProps)(ProtectedRoute);
