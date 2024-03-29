import { toast } from "react-toastify";

export const GET_KITCHEN = "GET_KITCHEN";
export const REGISTER_USER = "REGISTER_USER";
export const IS_LOADING_USERS = "IS_LOADING_USERS";
export const IS_ERROR_USERS = "IS_ERROR_USERS";
export const USER_MESSAGE = "USER_MESSAGE";
export const LOG_IN_USER = "LOG_IN_USER";
export const LOGOUT = "LOGOUT";
export const GET_PROFILE = "GET_PROFILE";
export const REGISTER_KITCHEN = "REGISTER_KITCHEN";
export const EDIT_KITCHEN = "EDIT_KITCHEN";
export const DELETE_KITCHEN = "DELETE_KITCHEN";
export const SET_EDITOR = "SET_EDITOR";
export const KITCHEN_LOGOUT = "KITCHEN_LOGOUT";
export const EDIT_USER = "EDIT_USER";
export const AVATAR_UPLOAD = "AVATAR_UPLOAD";

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
        const data = await response.json();
        console.log("This is data inside register", data);
        dispatch({ type: REGISTER_USER, payload: userData });
        dispatch({ type: IS_LOADING_USERS, payload: false });
        /* localStorage.setItem("user", JSON.stringify(data._id));
        localStorage.setItem("token", JSON.stringify(data.token)); */

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

// this needs to be written
export const editUser = (userData) => {
  return async (dispatch, getState) => {
    try {
      const token = localStorage.getItem("token").replace(/['"]+/g, "");
      const userId = localStorage.getItem("user").replace(/['"]+/g, "");

      console.log("Hello from editUser");
      const response = await fetch(
        `http://localhost:4000/api/users/${userId}`,
        {
          method: "PUT",
          body: JSON.stringify(userData),
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        dispatch({ type: EDIT_USER, payload: userData });
        toast.success("User information updated");
        console.log("this is the response", response);
      } else if (response.status === 400) {
        toast.error("Information could not be updated");
      } else {
        dispatch({ type: IS_ERROR_USERS, payload: true });
        dispatch({ type: IS_LOADING_USERS, payload: false });
        toast.error("Something went wrong");
      }
    } catch (error) {
      dispatch({ type: IS_ERROR_USERS, payload: true });
      dispatch({ type: IS_LOADING_USERS, payload: false });
      toast.error("Please try again");
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
        /* dispatch({ type: GET_KITCHEN, payload: data }); */
        localStorage.setItem("user", JSON.stringify(data._id));
        localStorage.setItem("token", JSON.stringify(data.token));

        console.log("data.kitchen", data);

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
      dispatch({ type: KITCHEN_LOGOUT, payload: "" });
      toast.success("User has logged out");
    } catch (error) {
      console.log(error);
    }
  };
};

//kitchenReducer

export const getKitchenByUser = () => {
  return async (dispatch, getState) => {
    try {
      const token = localStorage.getItem("token").replace(/['"]+/g, "");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const userId = localStorage.getItem("user").replace(/['"]+/g, "");
      const res = await fetch(
        `http://localhost:4000/api/users/${userId}/kitchen`,
        headers
      );

      if (res.ok) {
        const data = await res.json();
        dispatch({ type: GET_KITCHEN, payload: data });
      } else {
        console.log("Error getting users");
      }
    } catch (error) {
      toast.error("User could not log in, please try again");
    }
  };
};
export const uploadKitchenPic = (formDataFiles, kitchenId) => {
  return async (dispatch, getState) => {
    try {
      const token = localStorage.getItem("token").replace(/['"]+/g, "");
      const userId = localStorage.getItem("user").replace(/['"]+/g, "");

      const res = await fetch(
        `http://localhost:4000/api/users/${userId}/kitchen-pics/${kitchenId}`,
        {
          method: "PUT",
          body: formDataFiles,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.ok) {
        console.log(res);
        console.log("Pictures uploaded");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const registerKitchen = (kitchenData) => {
  return async (dispatch, getState) => {
    try {
      const token = localStorage.getItem("token").replace(/['"]+/g, "");
      const userId = localStorage.getItem("user").replace(/['"]+/g, "");

      const response = await fetch(
        `http://localhost:4000/api/users/${userId}/kitchen`,
        {
          method: "POST",
          body: JSON.stringify(kitchenData),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        console.log("kitchen created", kitchenData);
        dispatch({
          type: REGISTER_KITCHEN,
          payload: kitchenData,
        });
      } else if (response.status === 400) {
        toast.error("Something went wrong");
      } else {
        dispatch({ type: IS_ERROR_USERS, payload: true });
        dispatch({ type: IS_LOADING_USERS, payload: false });
        toast.error("kitchen could not be created");
      }
    } catch (error) {
      dispatch({ type: IS_ERROR_USERS, payload: true });
      dispatch({ type: IS_LOADING_USERS, payload: false });
      toast.error("Could not create kitchen");
    }
  };
};

export const deleteKitchen = (kitchenId) => {
  return async (dispatch, getState) => {
    try {
      const token = localStorage.getItem("token").replace(/['"]+/g, "");
      const userId = localStorage.getItem("user").replace(/['"]+/g, "");

      const response = await fetch(
        `http://localhost:4000/api/users/${userId}/kitchen/${kitchenId}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 204) {
        toast.success("Kitchen has been deleted");
        dispatch(getKitchenByUser());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editKitchen = (kitchenData, kitchenId) => {
  return async (dispatch, getState) => {
    try {
      const token = localStorage.getItem("token").replace(/['"]+/g, "");
      const userId = localStorage.getItem("user").replace(/['"]+/g, "");
      console.log("kitchenId from edit", kitchenId);

      const response = await fetch(
        `http://localhost:4000/api/users/${userId}/kitchen/${kitchenId}`,
        {
          method: "PUT",
          body: JSON.stringify(kitchenData),
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Kitchen has been updated");
        dispatch(getKitchenByUser());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const uploadProfilePic = (event) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token").replace(/['"]+/g, "");
    const userId = localStorage.getItem("user").replace(/['"]+/g, "");
    try {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch(
        `http://localhost:4000/api/users/${userId}/avatar`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.ok) {
        console.log("Avatar uploaded");
        dispatch(getProfile());
      }
    } catch (error) {
      console.log(error);
    }
  };
};
