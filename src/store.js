import { combineReducers, createStore } from "redux";
import { categoryReducer } from "./Category/Reducers/categoryReducer";
import { subCategoryReducer } from "./SubCategory/Reducers/subCategoryReducers";

const reducers = combineReducers({
  fullCategoryDetails: categoryReducer,
  subCategoryDetails: subCategoryReducer,
});
const store = createStore(reducers);

export default store;
