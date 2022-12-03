import { actionTypes } from "./actionTypes";

export const initialState = {
  loading: false,
  product: [],
  error: false,
};
export const productReducer = (state, action) => {
  switch (action.types) {
    case actionTypes.FETCHING_START: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actionTypes.FETCHING_SUCCESS: {
      return {
        ...state,
        product: action.payload,
        loading: false,
        error: false,
      };
    }
    case actionTypes.FETCHING_ERROR: {
      return {
        ...state,

        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};
