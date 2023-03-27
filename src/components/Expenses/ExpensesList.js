import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expense Found</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          key={expense.id}
          amount={expense.amount}
          date={expense.date}
          category={expense.category}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
