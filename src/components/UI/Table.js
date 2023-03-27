import React from "react";
import ExpenseTable from "../Expenses/ExpenseTable";
import styles from "./Table.css";
import Card from "./Card";

export const totalBudget = 5000;

function Table(props) {
  return (
    <Card>
      <table className={styles.table_head}>
        <tbody>
          <tr>
            <th>Total : {totalBudget} Rs.</th>
            <th>
              Total Expenditure : <ExpenseTable expenses={props.expenses} />
            </th>
          </tr>
        </tbody>
      </table>
    </Card>
  );
}

export default Table;
