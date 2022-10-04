import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(data) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={data.date} />
      <div className="expense-item__description">
        <h2>{data.title}</h2>
        <div className="expense-item__price">
          Php{" "}
          {data.amount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
