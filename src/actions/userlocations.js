import superagent from "superagent";

const baseUrl =
  "https://gentle-stream-67817.herokuapp.com" || "http://localhost:4000";

// enable top baseUrl when deploying to heroku

// const baseUrl = "http://localhost:4000";

export const USER_LOCATIONS = "USER_LOCATIONS";

function userLocationData(users) {
  return {
    type: USER_LOCATIONS,
    payload: users,
  };
}

export const userLocations = () => async (dispatch, getState) => {
  try {
    const state = getState();

    const { userlocations } = state;

    const condition = userlocations.length;

    if (condition) {
      return null;
    }

    const response = await superagent.get(`${baseUrl}/user/location`);

    const action = userLocationData(response.body);

    dispatch(action);
  } catch (error) {
    console.error(error);
  }
};
