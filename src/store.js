import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./features/productsSlice";
// import products
const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
