import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { expenseActions } from "../../store/expense-slice";
import { useDispatch, useSelector } from "react-redux";

function NewExpense(props) {
  const dispatch = useDispatch();
  const isEditing = useSelector((state) => state.expense.isEditing);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    dispatch(expenseActions.offEditing());
  };

  const startEditingHandler = () => {
    dispatch(expenseActions.onEditing());
  };

  const stopEditingHandler = () => {
    dispatch(expenseActions.offEditing());
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
