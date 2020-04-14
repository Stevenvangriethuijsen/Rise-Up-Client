import { combineReducers } from "redux";
import user from "./user";
import geolocation from "./geolocation";
import userlocations from "./userlocations";

const reducer = combineReducers({
  user,
  geolocation,
  userlocations,
});

export default reducer;
