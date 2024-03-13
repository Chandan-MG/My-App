function ExpenseItem(props){
    return (
        <div>
            <div><h3>Expense items</h3></div>
            <div>{props.title}</div>
            <div>{props.amount}</div>
            <div>{props.date.toISOString()}</div>
        </div>
    )
}

export default ExpenseItem;