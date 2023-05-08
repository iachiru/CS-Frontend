import {
  DELETE_KITCHEN,
  EDIT_KITCHEN,
  GET_KITCHEN,
  KITCHEN_LOGOUT,
  REGISTER_KITCHEN,
  SET_EDITOR,
} from "../actions";

const initialState = {
  image: "",
  ref: "",
  price: "",
  description: "",
  kitchenType: "",
  address: "",
  user: "",
};

const kitchenReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_KITCHEN:
      return {
        kitchen: action.payload,
      };
    case REGISTER_KITCHEN:
      return {
        kitchen: action.payload,
      };
    case EDIT_KITCHEN:
      return {
        kitchen: action.payload,
      };
    case SET_EDITOR:
      return {
        ...state,
        setEditor: action.payload,
      };
    case DELETE_KITCHEN:
      return {
        kitchen: action.payload,
      };
    case KITCHEN_LOGOUT:
      return {
        kitchen: action.payload,
      };

    default:
      return state;
  }
};

export default kitchenReducer;
