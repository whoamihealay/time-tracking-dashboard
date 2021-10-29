import { GET_DATA, GET_TIMEFRAME, SET_LOADING, SET_TIMEFRAME } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
