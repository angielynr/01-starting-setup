import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Groceries",
      amount: 3000,
      date: new Date(2022, 9, 2),
    },
    {
      id: "e2",
      title: "Lot",
      amount: 15000,
      date: new Date(2022, 9, 2),
    },
    {
      id: "e3",
      title: "Bills",
      amount: 3000,
      date: new Date(2022, 9, 2),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
    console.log("in app.js");
  };
  return (
    <div>
      <h2 className="title">Expense App</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
