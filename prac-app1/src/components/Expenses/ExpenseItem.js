import React,{useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from '../Expenses/ExpenseDate'
import Card from '../UI/Card';
function ExpenseItem (props) {
    //  const expenseDate= new Date();
    //  const expenseTitle='Mobile LED Replacement';
    //  const expenseAmount='Rs. 8000';
    
    const [title,setTitle] = useState(props.title);
    const clickHandler = () =>{
        setTitle('Updated');

    }
    return(
        <Card className='expense-item'>
            <div>
                <ExpenseDate date={props.date}/>
            </div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
            <div className='expense-item__price'>
                <div>
                    R.s: {props.amount}
                </div>
            </div>  
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
        
    );
}

export default ExpenseItem;