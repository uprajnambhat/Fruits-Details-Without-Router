import { fruitsDetails } from "../../json-fruit-details";

const initialState = {
  fruitsDetails: fruitsDetails,
  selectedFruitCategory: {},
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SELECTED_FRUIT_DETAILS":
      return {
        ...state,
        selectedFruitCategory: action.payload,
      };

    default:
      return state;
  }
};
