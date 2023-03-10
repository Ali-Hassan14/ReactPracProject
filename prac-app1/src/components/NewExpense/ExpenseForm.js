import React, { useState } from "react";
import './ExpenseForm.css'
const ExpenseForm=(props)=>{
    const submitHandler = (event) =>{
      event.preventDefault();
      const expenseData = {
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate),
        // price:enteredPrice
      }
      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
    }
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    // const [enteredPrice,setPrice]=useState('');
    // const[userInput,setUserInput]=useState({
    //     title:'',
    //     amount:'',
    //     date:'',
    //     price:''
    //   }
    // );
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value)
        // setUserInput({
        //   ...userInput,
        //   amount:event.target.value
        // })
        // setUserInput((prevState)=>{
        //     return{
        //       ...prevState,
        //       amount:event.target.value
        //     }
        // });
    }
     const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value)
        // setUserInput({
        //   ...userInput,
        //   date:event.target.value
        // })
        // setUserInput((prevState)=>{
        //   return{
        //     ...prevState,
        //     date:event.target.value
        //   }
        // });
    }
     const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value)
        // setUserInput({
        //   ...userInput,
        //   title:event.target.value,
        // })
        // setUserInput((prevState)=>{
        //     return{
        //       ...prevState,
        //       title:event.target.value
        //     }
        // });
    }
    // const priceChangeHandler = (event) =>{
    //     setPrice(event.target.value)
    //     // SetUserInput({
    //     //  ...userInput,
    //     //  price:event.target.value
    //     // })
    //     // setUserInput((prevState)=>{
    //     //     return{
    //     //       ...prevState,
    //     //       price:event.target.value
    //     //     }
    //     // });
    // }
    return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2021-01-01' max='2023-12-31' value={enteredDate} onChange={dateChangeHandler}/>
        </div>
        {/* <div className='new-expense__control'>
          <label>Price</label>
          <input type='number'  onChange={priceChangeHandler}/>
        </div> */}
      </div>
      <div className='new-expense__actions'>
         <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
)}
export default ExpenseForm;