import React from "react";
import './ExpenseForm.css';

function ExpenseForm(){
    const titleChangedHandler = (event) =>{
        console.log(event.target.value);
    }
    return <form>
        <div className="new-expense_controls">
            <div className="new-expense_control">
                <label>Title</label>
                <input type="text" onChange={titleChangedHandler} />
            </div>
            <div>
                <label>Amount</label>
                <input type="number" min= "0.01" step= "0.01" />
            </div>
            <div>
                <label>Date</label>
                <input type="date" min= "2024-02-24" max= "2024-12-31" />
            </div>
        </div>
        <div>
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;