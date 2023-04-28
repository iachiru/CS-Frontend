import { GET_KITCHEN } from "../actions";

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
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
};

export default kitchenReducer;
