import { createSlice } from "@reduxjs/toolkit";

export const CategorySlice = createSlice({
  name: "category",
  initialState: [
    // {
    //   id: 0,
    //   title: "",
    // },
  ],
  reducers: {
    setTitle: (state, { payload: { id, title } }) => {
      const categoryToUpdate = state.find((category) => category.id === id);
      if (categoryToUpdate) {
        categoryToUpdate.title = title;
      }
    },
    addCategory: (state, { payload }) => {
      state.push(payload);
    },
    deleteCategory: (state, { payload }) => {
      return state.filter((category) => category.id !== payload);
    },
  },
});

export const { setTitle, addCategory, deleteCategory } = CategorySlice.actions;

export default CategorySlice.reducer;
