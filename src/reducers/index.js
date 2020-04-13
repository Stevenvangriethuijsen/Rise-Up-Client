import { combineReducers } from "redux";
import user from "./user";
import geolocation from "./geolocation";

const reducer = combineReducers({
  user,
  geolocation,
});

export default reducer;
