import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./settings/theme";
import store from "./store";
import DataFetcher from "./components/DataFetcher";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";
import Menu from "./components/Menu";
import PriceList from "./components/PriceList";
import Rates from "./components/Rates";
import Receipts from "./components/Receipts";
import Statistics from "./components/Statistics";

export const routes = {
  empty: "/",
  priceList: "/cennik",
  rates: "/opinie",
  receitps: "/rachunki",
  statistics: "/statystyki"
};

const App = () => {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={theme}>
          <DataFetcher />
          <Header></Header>
          <Menu></Menu>
          <Route path={routes.priceList} component={PriceList}></Route>
          <Route path={routes.rates} component={Rates}></Route>
          <ProtectedRoute path={routes.receitps} component={Receipts} />
          <ProtectedRoute path={routes.statistics} component={Statistics} />
          <Redirect path={routes.empty} to={routes.priceList} />
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default App;
