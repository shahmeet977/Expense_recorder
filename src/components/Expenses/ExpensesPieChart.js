import React from "react";
import PieChart from "../Charts/PieChart";

function ExpensesPieChart(props) {
  const chartDataPoints = [
    ["Categories", "Expense Amount"],
    ["Grocery", 0],
    ["Transport", 0],
    ["Rentals", 0],
  ];

  for (const expense of props.expenses) {
    const expenseCategory = expense.category;
    if (expenseCategory === "Grocery") {
      chartDataPoints[1][1] += expense.amount;
    } else if (expenseCategory === "Transport") {
      chartDataPoints[2][1] += expense.amount;
    } else if (expenseCategory === "Rentals") {
      chartDataPoints[3][1] += expense.amount;
    }
  }
  return <PieChart data={chartDataPoints} />;
}

export default ExpensesPieChart;
