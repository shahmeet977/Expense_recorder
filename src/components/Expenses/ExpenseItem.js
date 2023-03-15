import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle((t) => (t = "Updated"));
  // };
  return (
    <li>
      <Card className="expense-item">
        <div className="expense-item__description">
          <ExpenseDate {...props} />
          <h2>{title}</h2>
          <div className="expense-item__price">Rs. {props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
