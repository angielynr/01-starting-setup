import React, { useState, useRef } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (data) => {
  //const [enteredTitle, setEnteredTitle] = useState(""); //it will use a string since the value of event is always string
  //const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const enteredUserTitle = useRef();
  const enteredUserAmount = useRef();

  // const titleChangeHandler = (event) => {
  //   setEnteredTitle(event.target.value);
  // };
  // const amountChangeHandler = (event) => {
  //   setEnteredAmount(event.target.value);
  // };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = enteredUserTitle.current.value;
    const enteredAmount = enteredUserAmount.current.value;

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    data.onSaveExpenseData(expenseData);
    // enteredTitle.current.value = "";
    // enteredAmount.current.value = "";
    event.target.reset();
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            id="title"
            type="text"
            // value={enteredTitle}
            // onChange={titleChangeHandler}
            ref={enteredUserTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            id="amount"
            type="number"
            // value={enteredAmount}
            // onChange={amountChangeHandler}
            ref={enteredUserAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-30"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={data.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
