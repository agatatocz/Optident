import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPositions } from "./../../store/actions/priceList";
import { fetchRates } from "./../../store/actions/rates";
import { fetchReceipts } from "./../../store/actions/receipts";
import { fetchStatistics } from "./../../store/actions/statistics";

const DataFetcher = ({
  loggedIn,
  fetchPositions,
  fetchRates,
  fetchReceipts,
  fetchStatistics
}) => {
  useEffect(() => {
    fetchPositions();
    fetchRates();

    if (loggedIn) {
      fetchReceipts();
      fetchStatistics();
    }
  }, [loggedIn, fetchPositions, fetchRates, fetchReceipts, fetchStatistics]);

  return null;
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn
});

export default connect(
  mapStateToProps,
  { fetchPositions, fetchRates, fetchReceipts, fetchStatistics }
)(DataFetcher);
