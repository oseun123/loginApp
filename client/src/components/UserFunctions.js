import axios from "axios";

export const login = async (user) => {
  try {
    const result = await axios.post("users/login", {
      email: user.email,
      password: user.password,
    });
    localStorage.setItem("usertoken", result.data.token);
    return result;
  } catch (error) {
    console.log(error);
  }
};
