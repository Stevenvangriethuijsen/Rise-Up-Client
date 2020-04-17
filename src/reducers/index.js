import { combineReducers } from "redux";
import user from "./user";
import geolocation from "./geolocation";
import userlocations from "./userlocations";
import users from "./users";
import { USER_LOGOUT } from "../actions/user";

const appReducer = combineReducers({
  user,
  geolocation,
  userlocations,
  users,
});

const reducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};
export default reducer;
