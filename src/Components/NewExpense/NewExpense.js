import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(props){
    const savedExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    const [ isAddingExpense, setIsAddingExpense ] = useState(false);
    const addNewExpenseHandler = () =>{
        setIsAddingExpense(true);
    }
    return(
        <div className="new-expense">
            {!isAddingExpense && (
                <button onClick={addNewExpenseHandler}>Add new expense</button>
            )}
            {isAddingExpense && (
                <ExpenseForm onSaveExpenseData={savedExpenseHandler} onCancel={() => setIsAddingExpense(false)} />
            )}
        </div>
    )
}

export default NewExpense;