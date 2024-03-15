
import NewExpense from './Components/NewExpense/NewExpense.js';
import Expenses from './Components/Expenses/Expenses.js';
import React, {useState} from 'react';

const DUMMY_EXPENSES = [
  { id:"e1", title: "Car Insurance",amount: 200, date: new Date(2024,3,13)},
  { id:"e2", title: "Car Insurance",amount: 200, date: new Date(2024,3,13)}
];

//using arrow functions
const App = () => {

  const [expences, setExpense] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) =>{
    setExpense((prevExpenses) =>{
      return [...prevExpenses, expense];
    })
  }
  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expences} />
    </div>
  );
}

export default App;
