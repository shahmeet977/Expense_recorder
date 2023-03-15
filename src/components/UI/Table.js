import React from "react";
import ExpenseTable from "../Expenses/ExpenseTable";
import styles from "./Table.css";
import Card from "./Card";

function Table(props) {
  return (
    <Card>
      <table className={styles.table_head}>
        <tbody>
          <tr>
            <th>Total Budget</th>
            <th>Total Expenditure</th>
          </tr>
          <tr>
            <td>5000 Rs.</td>
            <ExpenseTable expenses={props.expenses} />
          </tr>
        </tbody>
      </table>
    </Card>
  );
}

export default Table;
