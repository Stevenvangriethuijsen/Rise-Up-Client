import { GET_LOCATION } from "../actions/geolocation";

const initialstate = {};

export default function (state = initialstate, action) {
  switch (action.type) {
    case GET_LOCATION: {
      console.log(action.payload, "this is the location response");
      return action.payload;
    }

    default:
      return state;
  }
}
