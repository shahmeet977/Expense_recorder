import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { expenseActions } from "./store/expense-slice";
const App = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expense.expenses);

  const addExpenseHandler = (expense) => {
    dispatch(expenseActions.addToList(expense));
  };

  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
};

export default App;
