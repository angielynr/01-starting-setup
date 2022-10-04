import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(data) {
  return (
    <div className="expenses">
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
    </div>
  );
}

export default Expenses;
