import React from "react";

function ExpenseTable(props) {
  let yearExpenses = 0;
  for (const expense of props.expenses) {
    yearExpenses += expense.amount;
  }
  return <>{yearExpenses.toFixed(2)}</>;
}

export default ExpenseTable;
