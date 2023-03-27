import { createSlice } from "@reduxjs/toolkit";

const initialState = { title: "", amount: "", date: "", category: "Grocery" };
const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    changeTitle(state, action) {
      state.title = action.payload;
    },
    changeAmount(state, action) {
      state.amount = action.payload;
    },
    changeDate(state, action) {
      state.date = action.payload;
    },
    changeCategory(state, action) {
      state.category = action.payload;
    },
    emptyTitle(state, action) {
      state.title = "";
    },
    emptyAmount(state, action) {
      state.amount = "";
    },
    emptyDate(state, action) {
      state.date = "";
    },
    emptyCategory(state, action) {
      state.category = "";
    },
  },
});

export const inputActions = inputSlice.actions;

export default inputSlice;
