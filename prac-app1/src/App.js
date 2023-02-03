// import './App.css';
import ExpensesItems from "./components/Expenses/ExpensesItems";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const addExpenseHandler=expense=>{
    console.log('Expense in App.js')
    console.log(expense)
  }
  return (
    <div className="App">
    <NewExpense onAddExpenseData={addExpenseHandler}/>
    <ExpensesItems/>
    </div>
  );
}

export default App;
