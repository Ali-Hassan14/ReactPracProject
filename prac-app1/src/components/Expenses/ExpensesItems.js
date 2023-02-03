import React, {useState} from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './ExpensesItems.css';

import ExpensesChart from './ExpensesChart';

function ExpensesItems(props) {
  const [filteredYear, setFilteredYear] = useState('2023');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
   const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
 
  return (
    <Card className="expenses">
    <ExpenseFilter selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList item={filteredExpenses} />
    {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
     <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
     <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
     <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem> */}
     </Card>
  )
}

export default ExpensesItems