import superagent from "superagent";

const baseUrl =
  "https://gentle-stream-67817.herokuapp.com" || "http://localhost:4000";

// enable top baseUrl when deploying to heroku

// const baseUrl = "http://localhost:4000";

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
    const state = getState();
    const { user } = state;
    const location = await getCurrentPosition();
    console.log(location, "logging location");
    const data = {
      userId: user.userId,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    if (user.userLocation === null) {
      console.log("i am creating new coordinates");
      const response = await superagent
        .post(`${baseUrl}/user/location`)
        .set("Authorization", `Bearer ${user.jwt}`)
        .send(data);
      const action = newLocation(response.body);
      dispatch(action);
    } else {
      console.log("i am updating coordinates");
      const response = await superagent
        .put(`${baseUrl}/user/location/${user.userLocation.id}`)
        .set("Authorization", `Bearer ${user.jwt}`)
        .send(data);
      console.log(response.body);
      const action = newLocation(response.body);
      dispatch(action);
    }
  } catch (error) {
    console.error(error);
  }
};
