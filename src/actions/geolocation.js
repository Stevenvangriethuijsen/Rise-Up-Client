import superagent from "superagent";

// const baseUrl =
//   "https://gentle-stream-67817.herokuapp.com" || "http://localhost:4000";

// enable top baseUrl when deploying to heroku

const baseUrl = "http://localhost:4000";

export const GET_LOCATION = "GET_LOCATION";

function newLocation(location) {
  return {
    type: GET_LOCATION,
    payload: location,
  };
}

function getCurrentPosition(options = {}) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

export const getLocation = () => async (dispatch, getState) => {
  try {
    const location = await getCurrentPosition();
    console.log(location, "logging location");
    const action = newLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
    dispatch(action);
  } catch (error) {
    console.error(error);
  }
};
