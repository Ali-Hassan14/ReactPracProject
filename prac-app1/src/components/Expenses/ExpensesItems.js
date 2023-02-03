import React, {useState} from 'react';
import ExpenseItem from '../Expenses/ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './ExpensesItems.css';

function ExpensesItems() {
    const expenses = [
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
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
    <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
     <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
     <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
     <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
     </Card>
  )
}

export default ExpensesItems