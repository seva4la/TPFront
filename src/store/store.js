import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "./category/category.slice";

export const store = configureStore({
  reducer: {
    category: CategoryReducer,
  },
});
