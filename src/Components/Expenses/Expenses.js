
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';


const Expenses = (props) => {
  return (
    <Card className="expenses">
        {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      /> */}
      
        {
            expences.map((expence,index)=>(
            <ExpenseItem
                key={index}
                title={expence.title}
                amount={expence.amount}
                date={expence.date}
            />
            ))
        }
    </Card>
  );
}

export default Expenses;
