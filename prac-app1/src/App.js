// import './App.css';
import ExpenseItem from './components/ExpenseItem';
function App() {
  const expenses = [
    {
      id:'e1',
      title:'MBL LED Replacement',
      amount:'R.s 8000',
      date: new Date (2023,1,18)
    },
    {
      id:'e2',
      title:'Laptop Repair',
      amount:'R.s 20000',
      date: new Date (2023,1,1)
    },
    {
      id:'e3',
      title:'Water Cooler',
      amount:'R.s 2000',
      date: new Date (2023,1,10)
    },
    {
      id:'e4',
      title:'Buy Books',
      amount:'R.s 5000',
      date: new Date (2023,1,18)
    }
  ]
  return (
    <div className="App">
     <h1> Hi...! Let's Get Started</h1>
     <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
     <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
     <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
     <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
