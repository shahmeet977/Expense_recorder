import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialstate";

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addToList(state, action) {
      const newExpense = action.payload;
      state.expenses.push({
        title: newExpense.title,
        amount: newExpense.amount,
        date: newExpense.date,
        category: newExpense.category,
      });
    },

    onEditing(state, action) {
      state.isEditing = true;
    },

    offEditing(state, action) {
      state.isEditing = false;
    },

    changeFilteredYear(state, action) {
      state.filteredYear = action.payload;
    },
  },
});

export const expenseActions = expenseSlice.actions;

export default expenseSlice;
