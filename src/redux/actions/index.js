import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const GET_KITCHEN = "GET_KITCHEN";
export const REGISTER_USER = "REGISTER_USER";
export const IS_LOADING_USERS = "IS_LOADING_USERS";
export const IS_ERROR_USERS = "IS_ERROR_USERS";
export const USER_MESSAGE = "USER_MESSAGE";
export const LOG_IN_USER = "LOG_IN_USER";
export const LOGOUT = "LOGOUT";
export const GET_PROFILE = "GET_PROFILE";

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
        /*  */
        //when this 2 lines of code are on, it creates the user but it also catches and error
        //and returns "Could not create user"
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
  const user = { email: userData.email, password: userData.password };

  return async (dispatch, getState) => {
    try {
      const res = await fetch("http://localhost:4000/api/users/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const data = await res.json();
        dispatch({ type: LOG_IN_USER, payload: data });
        dispatch({ type: IS_LOADING_USERS, payload: false });
        console.log("user after fetch", data);
        localStorage.setItem("user", JSON.stringify(data._id));
        localStorage.setItem("token", JSON.stringify(data.token));
        toast.success("User is logged in");
      }
    } catch (error) {
      toast.error("User could not log in, please try again");
    }
  };
};

export const getProfile = () => {
  return async (dispatch, getState) => {
    try {
      const token = localStorage.getItem("token").replace(/['"]+/g, "");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const res = await fetch("http://localhost:4000/api/users/profile", {
        headers,
      });

      if (res.ok) {
        const data = await res.json();
        dispatch({ type: GET_PROFILE, payload: data });
        console.log("user inside get profile", data);
      } else {
        console.log("Error getting user");
      }
    } catch (error) {
      toast.error("Could not get profile");
    }
  };
};

export const getAllUsers = (userData) => {
  return async (dispatch, getState) => {
    try {
      const res = await fetch("http://localhost:4000/api/users");

      if (res.ok) {
        const data = await res.json();
        console.log(data);
      } else {
        console.log("Error getting users");
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

//kitchenReducer

export const getKitchenByUserAndId = (kitchenId) => {
  return async (dispatch, getState) => {
    try {
      const token = localStorage.getItem("token").replace(/['"]+/g, "");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const userId = localStorage.getItem("user").replace(/['"]+/g, "");
      const kitchen = useSelector((state) => state.users.user);
      console.log(kitchen);
      const res = await fetch(
        `http://localhost:4000/api/users/${userId}/kitchen/${kitchenId}`,
        headers
      );

      if (res.ok) {
        const data = await res.json();
        console.log(data);
      } else {
        console.log("Error getting users");
      }
    } catch (error) {
      toast.error("User could not log in, please try again");
    }
  };
};
