import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

const ExpenseList = (props) => {
    
    if(props.items.length === 0){
        return <h2 className="expense-list-fallback">Found no expenses.</h2>
    }
    else if(props.items.length === 1){
        return (
            <div>
                <h2 className="expense-list-fallback">Only single Expense here. Please add more...</h2>
                <ul className="expense-list" >
                    {
                        props.items.map((expense) => (
                            <ExpenseItem
                                key={expense.id}
                                title={expense.title}
                                amount={expense.amount}
                                date={expense.date}
                            />
                        ))
                    }
                </ul>
            </div>
        )
    }
    return (
        <ul className="expense-list" >
            {
                props.items.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
            }
        </ul>
    )
}

export default ExpenseList;