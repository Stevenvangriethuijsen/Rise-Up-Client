import { USERS } from "../actions/user";
const initialstate = [];

export default function (state = initialstate, action = {}) {
  switch (action.type) {
    case USERS: {
      return action.payload;
    }
    default:
      return state;
  }
}
