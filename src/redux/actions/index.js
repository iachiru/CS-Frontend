import { toast } from "react-toastify";

export const GET_KITCHEN = "GET_KITCHEN";
export const REGISTER_USER = "REGISTER_USER";
export const IS_LOADING_USERS = "IS_LOADING_USERS";
export const IS_ERROR_USERS = "IS_ERROR_USERS";
export const USER_MESSAGE = "USER_MESSAGE";
export const LOG_IN_USER = "LOG_IN_USER";
export const LOGOUT = "LOGOUT";

export const registerUser = (userData) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch("http://localhost:4000/api/users/register", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (response.status === 200 || response.status === 201) {
        /*  localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", JSON.stringify(response.data.token)); */

        dispatch({ type: REGISTER_USER, payload: userData });
        dispatch({ type: IS_LOADING_USERS, payload: false });
        toast.success("user registered");
        console.log("this is the response", response);
      } else if (response.status === 400) {
        toast.error("Email is already in use");
      } else {
        dispatch({ type: IS_ERROR_USERS, payload: true });
        dispatch({ type: IS_LOADING_USERS, payload: false });
        toast.error("user could not be created");
      }
    } catch (error) {
      dispatch({ type: IS_ERROR_USERS, payload: true });
      dispatch({ type: IS_LOADING_USERS, payload: false });
      toast.error("Could not create user");
    }
  };
};

export const logInUser = (userData) => {
  return async (dispatch, getState) => {
    try {
      const res = await fetch("http://localhost:4000/api/users/login", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (res.ok) {
        dispatch({ type: LOG_IN_USER, payload: userData });
        dispatch({ type: IS_LOADING_USERS, payload: false });
        toast.success("User is logged in");
      }
    } catch (error) {
      toast.error("User could not log in, please try again");
    }
  };
};

export const logout = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: LOGOUT, payload: localStorage.removeItem("user") });
      dispatch({ type: LOGOUT, payload: localStorage.removeItem("token") });
      toast.success("User has logged out");
    } catch (error) {
      console.log(error);
    }
  };
};
