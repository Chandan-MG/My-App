import React, {useState} from "react";
import './ExpenseForm.css';

function ExpenseForm(props){

    const [enteredTitle, setTitle] = useState();
    const [enteredAmount, setAmount] = useState();
    const [enteredDate, setDate] = useState();

    //combined approach
    // const [userInput, setUserInput ] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // });

    const titleChangedHandler = (event) =>{
        setTitle(event.target.value);
        //or
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value,
        // })
        //or
        // setUserInput( (prevState) => {
        //     return { 
        //         ...prevState, 
        //         enteredTitle : event.target.value 
        //     };
        // })
    }
    const amountChangedHandler = (event) =>{
        setAmount(event.target.value);
    }
    const dateChangedHandler = (event) =>{
        setDate(event.target.value);
    }

    const submitFormHandler = (event) =>{
        event.preventDefault();//used to prevent the default behaviour

        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate) //here enteredAmount string converted to date format
        };

        props.onSaveExpenseData(expenseData);
        setAmount('');
        setTitle('');
        setDate('');
    }

    return <form onSubmit={submitFormHandler}>
        <div className="new-expense_controls">
            <div className="new-expense_control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangedHandler} />
            </div>
            <div className="new-expense_control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min= "0.01" step= "0.01" onChange={amountChangedHandler}  />
            </div>
            <div className="new-expense_control">
                <label>Date</label>
                <input type="date" value={enteredDate} min= "2024-02-24" max= "2024-12-31" onChange={dateChangedHandler}  />
            </div>
        </div>
        <div className="new-expense_actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;