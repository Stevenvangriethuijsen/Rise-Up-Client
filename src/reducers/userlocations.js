import { USER_LOCATIONS } from "../actions/userlocations";
const initialstate = [];

export default function (state = initialstate, action = {}) {
  switch (action.type) {
    case USER_LOCATIONS: {
      return action.payload;
    }
    default:
      return state;
  }
}
