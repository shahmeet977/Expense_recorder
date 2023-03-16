import React, { useState } from "react";

function ExpenseTable(props) {
  // const [yearlyExpense, setYearlyExpense] = useState(0);
  let yearExpenses = 0;
  for (const expense of props.expenses) {
    yearExpenses += expense.amount;
  }
  // setYearlyExpense(yearExpense);
  return <>{yearExpenses}</>;
}

export default ExpenseTable;
