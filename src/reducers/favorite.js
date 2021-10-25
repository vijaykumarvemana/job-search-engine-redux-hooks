import { ADD_COMPANY_TO_FAVORITE, REMOVE_COMPANY_FROM_FAVORITE } from "../actions";
import { initialState } from "../store";

const favoriteReducer = (state = initialState.favorite, action) => {
  switch (action.type) {
    case ADD_COMPANY_TO_FAVORITE: {
      return {
        ...state,
        companies: [...state.companies, action.payload],
      };
    }

    case REMOVE_COMPANY_FROM_FAVORITE: {
      return {
        ...state,
        companies: [
          ...state.companies.slice(0, action.payload),
          ...state.companies.slice(action.payload + 1),
        ],
      };
    }

    default:
      return state;
  }
};

export default favoriteReducer;
