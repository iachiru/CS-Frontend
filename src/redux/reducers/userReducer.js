import {
  IS_ERROR_USERS,
  IS_LOADING_USERS,
  LOGOUT,
  LOG_IN_USER,
  REGISTER_USER,
  USER_MESSAGE,
} from "../actions";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: JSON.parse(localStorage.getItem("token")) || null,
  isError: false,
  isLoading: true,
  message: "",
};
console.log(initialState);

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOG_IN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: action.payload,
        token: action.payload,
      };
    case IS_LOADING_USERS:
      return {
        ...state,
        isLoading: action.payload,
      };
    case IS_ERROR_USERS:
      return {
        ...state,
        isError: action.payload,
      };
    case USER_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
