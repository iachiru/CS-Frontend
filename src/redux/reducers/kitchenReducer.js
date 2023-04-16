import { GET_KITCHEN } from "../actions";

const initialState = { name: "" };

const kitchenReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_KITCHEN:
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};

export default kitchenReducer;
