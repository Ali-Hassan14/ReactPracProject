// import './App.css';
import { useState } from "react";
import ExpensesItems from "./components/Expenses/ExpensesItems";
import NewExpense from "./components/NewExpense/NewExpense";
 const InitialExpenses = [
    {
      id:'e1',
      title:'MBL LED Replacement',
      amount:'8000',
      date: new Date ()
    },
    {
      id:'e2',
      title:'Laptop Repair',
      amount:'20000',
      date: new Date ()
    },
    {
      id:'e3',
      title:'Water Cooler',
      amount:'2000',
      date: new Date ()
    },
    {
      id:'e4',
      title:'Buy Books',
      amount:'5000',
      date: new Date ()
    }
  ]
function App() {
  const[expenses, setExpenses]=useState(InitialExpenses);
  const addExpenseHandler=expense=>{
    setExpenses((prevExpenses)=>{
      return[expense, ...prevExpenses]
    })
  }
  return (
    <div className="App">
    <NewExpense onAddExpenseData={addExpenseHandler}/>
    <ExpensesItems item={expenses}/>
    </div>
  );
}

export default App;
