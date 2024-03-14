
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';


const Expenses = (props) => {
  return (
    <Card className="expenses">
      
        {
            props.items.map((expence,index)=>(
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
