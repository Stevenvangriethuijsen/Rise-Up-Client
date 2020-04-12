import { JWT, NEW_USER } from "../actions/user";

const initialstate = "";

export default function (state = initialstate, action = {}) {
  switch (action.type) {
    case JWT: {
      console.log(action.payload, "this is the login response");
      return action.payload;
    }
    case NEW_USER: {
      return state;
    }
    default:
      return state;
  }
}
