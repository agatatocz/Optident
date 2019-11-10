import { combineReducers } from "redux";
import priceListReducer from "./priceList";
import userReducer from "./user";
import ratesReducer from "./rates";
import receiptsReducer from "./receipts";
import statisticsReducer from "./statistics";

export default combineReducers({
  priceList: priceListReducer,
  user: userReducer,
  rates: ratesReducer,
  receipts: receiptsReducer,
  statistics: statisticsReducer
});
