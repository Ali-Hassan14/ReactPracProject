import './ExpenseItem.css'
function ExpenseItem (props) {
    //  const expenseDate= new Date();
    //  const expenseTitle='Mobile LED Replacement';
    //  const expenseAmount='Rs. 8000';
    return(
        <div className='expense-item'>
            <div>{props.date.toDateString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
            <div className='expense-item__price'>
                <div>
                    {props.amount}
                </div>
            </div>
                
            </div>
        </div>
    );
}

export default ExpenseItem;