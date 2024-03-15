import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';
import React, {useState} from "react";
import Card from "../UI/Card";

function ExpenseItem(props){

    const [title, setTitle] = useState(props.title);
    
    const clickHandler = () =>{
        setTitle("updated...");
        console.log("updated...");
    }

    const [amount, setAmount] = useState(props.amount);
    const changeAmount = () =>{
        setAmount(100)
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            {/* <div><h3>Expense items</h3></div> */}
            <div className="expense-item_description">
                <h2>{props.title}</h2>
                <div className="expense-item_price">${props.amount}</div>
            </div>
            {/* <div>{props.date.toISOString()}</div> */}
            {/* <button onClick={ () => {console.log("Title changed...")}}>Change title</button> */}
            <button onClick={ clickHandler }>Change title</button>
            <button onClick={ changeAmount }>Change Amount</button>
        </Card>
    )

}

export default ExpenseItem;