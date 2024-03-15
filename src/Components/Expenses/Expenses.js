
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import React, {useState} from 'react';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2024');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      
        {
            props.items.map((expence)=>(
            <ExpenseItem
                key={expence.id}
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
