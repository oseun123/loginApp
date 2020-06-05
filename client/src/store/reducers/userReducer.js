const initState = {
  message: null,
  status: null,
  errors: null,
  spinner: false,
  isLoggedin: localStorage.getItem("usertoken") ? true : false,
};

const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "CLEAR_USERS_ERRORS":
      return {
        ...state,
        message: null,
        status: null,
        errors: null,
        spinner: false,
      };
    case "START_SPINNER":
      return {
        ...state,
        spinner: true,
      };
    case "STOP_SPINNER":
      return {
        ...state,
        spinner: false,
      };
    case "SUCCESS_LOGIN":
      return {
        ...state,
        isLoggedin: true,
        // status: "success",
        // message: "Login successfully",
      };
    case "LOGOUT_USER":
      return {
        ...state,
        isLoggedin: false,
        message: null,
        status: null,
        errors: null,
        spinner: false,
      };
    default:
      return state;
  }
};
export default userReducer;
