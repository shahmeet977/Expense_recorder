import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <div className="expense-item__description">
          <ExpenseDate {...props} />
          <h2>{props.title}</h2>
          <p>{props.category}</p>
          <div className="expense-item__price">Rs. {props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
