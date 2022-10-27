import { useState } from "react";
import NewExpense from "./components/NewExpenses/NewExpense";
import Expenses from "./components/Expenses/Expenses/Expenses";
import Counter from "./components/Counter/Counter";

const initialExpenses = [
  {
    id: "e1",
    title: "Iphone 45",
    amount: 3000,
    date: new Date(2022, 9, 2),
  },
  {
    id: "e2",
    title: "Mac & Cheese",
    amount: 15000,
    date: new Date(2022, 9, 2),
  },
  {
    id: "e3",
    title: "Trip to jerusalem",
    amount: 3000,
    date: new Date(2022, 9, 2),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <h2 className="title">Expense App</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <Counter />
    </div>
  );
};

export default App;
