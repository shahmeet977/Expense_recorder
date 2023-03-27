import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputActions } from "../../store/input-slice";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const dispatch = useDispatch();
  const enteredTitle = useSelector((state) => state.input.title);
  const enteredAmount = useSelector((state) => state.input.amount);
  const enteredDate = useSelector((state) => state.input.date);
  const enteredCategory = useSelector((state) => state.input.category);

  const titleChangeHandler = (event) => {
    dispatch(inputActions.changeTitle(event.target.value));
  };

  const amountChangeHandler = (event) => {
    dispatch(inputActions.changeAmount(event.target.value));
  };

  const dateChangeHandler = (event) => {
    dispatch(inputActions.changeDate(event.target.value));
  };

  const categoryChangeHandler = (event) => {
    dispatch(inputActions.changeCategory(event.target.value));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      category: enteredCategory,
    };
    props.onSaveExpenseData(expenseData);
    dispatch(inputActions.emptyTitle());
    dispatch(inputActions.emptyAmount());
    dispatch(inputActions.emptyCategory());
    dispatch(inputActions.emptyDate());
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Category</label>
          <select
            id="category"
            value={enteredCategory}
            onChange={categoryChangeHandler}
          >
            <option value="Grocery">Grocery</option>
            <option value="Transport">Transport</option>
            <option value="Rentals">Rentals</option>
          </select>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
