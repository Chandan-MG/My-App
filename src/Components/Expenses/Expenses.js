
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import React, {useState} from 'react';
import ExpenseList from './ExpenseList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2024');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  // Filter expenses based on the selected year
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return (
    <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      
        <ExpenseList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
