import axios from "axios";
export const resetUsersState = (dispatch) => {
  dispatch({ type: "CLEAR_USERS_ERRORS" });
};

export const login = async (dispatch, user) => {
  dispatch({ type: "CLEAR_USERS_ERRORS" });
  dispatch({ type: "START_SPINNER" });
  try {
    const result = await axios.post("users/login", {
      email: user.email,
      password: user.password,
    });
    localStorage.setItem("usertoken", result.data.token);
    dispatch({ type: "STOP_SPINNER" });
    dispatch({ type: "SUCCESS_LOGIN" });

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const register = async (dispatch, newUser) => {
  dispatch({ type: "CLEAR_USERS_ERRORS" });
  dispatch({ type: "START_SPINNER" });
  try {
    const result = await axios.post("users/register", {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
    });
    dispatch({ type: "STOP_SPINNER" });
    return result;
  } catch (error) {
    console.log(error);
  }
};
