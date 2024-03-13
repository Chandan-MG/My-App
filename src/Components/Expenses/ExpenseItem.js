import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';

function ExpenseItem(props){
    
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            {/* <div><h3>Expense items</h3></div> */}
            <div className="expense-item_description">
                <h2>{props.title}</h2>
                <div className="expense-item_price">${props.amount}</div>
            </div>
            {/* <div>{props.date.toISOString()}</div> */}
            
        </div>
    )

}

export default ExpenseItem;