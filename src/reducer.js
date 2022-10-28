import { combineReducers } from "redux";

import productsReducer from "./features/productsSlice";

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;
