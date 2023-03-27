import React from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import ExpensesPieChart from "./ExpensesPieChart";
import Table from "../UI/Table";
import "./Expenses.css";
import { useDispatch, useSelector } from "react-redux";
import { expenseActions } from "../../store/expense-slice";

function Expenses(props) {
  const dispatch = useDispatch();
  const filteredYear = useSelector((state) => state.expense.filteredYear);

  const filterChangeHandler = (selectedYear) => {
    dispatch(expenseActions.changeFilteredYear(selectedYear));
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {filteredExpenses.length > 0 && (
          <ExpensesPieChart expenses={filteredExpenses} />
        )}
        {filteredExpenses.length > 0 && <Table expenses={filteredExpenses} />}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;
