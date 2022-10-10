import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (data) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    // console.log("expenses.js");
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onChangeYearFilter={filterChangeHandler}
        />
        <ExpenseItem
          title={data.items[0].title}
          amount={data.items[0].amount}
          date={data.items[0].date}
        />
        <ExpenseItem
          title={data.items[1].title}
          amount={data.items[1].amount}
          date={data.items[1].date}
        />
        <ExpenseItem
          title={data.items[2].title}
          amount={data.items[2].amount}
          date={data.items[2].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
