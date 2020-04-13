import superagent from "superagent";

const baseUrl =
  "https://gentle-stream-67817.herokuapp.com" || "http://localhost:4000";

// enable top baseUrl when deploying to heroku

// const baseUrl = "http://localhost:4000";

export const JWT = "JWT";

function loginUser(payload) {
  return {
    type: JWT,
    payload,
  };
}

export const login = (email, password) => async (dispatch, getState) => {
  try {
    const response = await superagent
      .post(`${baseUrl}/login`)
      .send({ email: email, password: password });

    const action = loginUser(response.body);
    dispatch(action);
  } catch (error) {
    console.error(error);
  }
};

export const NEW_USER = "NEW_USER";

function newUser(user) {
  return {
    type: NEW_USER,
    payload: user,
  };
}

export const createUser = (data) => async (dispatch, getState) => {
  try {
    const response = await superagent.post(`${baseUrl}/user`).send(data);

    const action = newUser(response.body);
    dispatch(action);
  } catch (error) {
    console.error(error);
  }
};
