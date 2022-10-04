import React, { useState } from "react"; //hooks
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (data) => {
  //declared inside main function, not on nested
  //returns array [currentValue, updatingFunction]
  const [title, setTitle] = useState(data.title);

  const clickButton = () => {
    setTitle("Updated"); //function from react
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={data.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">
          Php{" "}
          {data.amount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
        </div>
        <button onClick={clickButton}>Click me</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
