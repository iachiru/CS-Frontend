import {
  DELETE_KITCHEN,
  EDIT_KITCHEN,
  GET_KITCHEN,
  REGISTER_KITCHEN,
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
    case DELETE_KITCHEN:
      return {
        kitchen: action.payload,
      };

    default:
      return state;
  }
};

export default kitchenReducer;
