import React, {useState} from "react";
import './ExpenseForm.css';

function ExpenseForm(){

    const [enteredTitle, setTitle] = useState();
    const [enteredAmount, setAmount] = useState();
    const [enteredDate, setDate] = useState();

    const titleChangedHandler = (event) =>{
        setTitle(event.target.value);
    }
    const amountChangedHandler = (event) =>{
        setAmount(event.target.value);
    }
    const dateChangedHandler = (event) =>{
        setDate(event.target.value);
    }

    return <form>
        <div className="new-expense_controls">
            <div className="new-expense_control">
                <label>Title</label>
                <input type="text" onChange={titleChangedHandler} />
            </div>
            <div className="new-expense_control">
                <label>Amount</label>
                <input type="number" min= "0.01" step= "0.01" onChange={amountChangedHandler}  />
            </div>
            <div className="new-expense_control">
                <label>Date</label>
                <input type="date" min= "2024-02-24" max= "2024-12-31" onChange={dateChangedHandler}  />
            </div>
        </div>
        <div className="new-expense_actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;