import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./expense-slice";
import inputSlice from "./input-slice";

const store = configureStore({
  reducer: { expense: expenseSlice.reducer, input: inputSlice.reducer },
});

export default store;
