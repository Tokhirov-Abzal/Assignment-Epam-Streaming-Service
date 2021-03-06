import { SEARCH_SHOWS, SET_LOADING } from "../types";

const showsReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_SHOWS:
      return {
        ...state,
        shows: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default showsReducer;
