const initialState = {
  eachFruit: {},
  nutritionDetails: {},
  growingRegionsDetails: [],
  pricesDetails: {},
  availabilityDetails: {},
};

export const subCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_EACHFRUIT_DETAILS":
      return {
        ...state,
        eachFruit: action.payload,
      };
    case "UPDATE_NUTRITION_DETAILS":
      return {
        ...state,
        nutritionDetails: action.payload,
      };
    case "UPDATE_GROWINGREGIONS_DETAILS":
      return {
        ...state,
        growingRegionsDetails: action.payload,
      };
    case "UPDATE_PRICESDETAILS_DETAILS":
      return {
        ...state,
        pricesDetails: action.payload,
      };
    case "UPDATE_AVAILABILITY_DETAILS":
      return {
        ...state,
        availabilityDetails: action.payload,
      };
    default:
      return state;
  }
};
