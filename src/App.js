
import NewExpense from './Components/NewExpense/NewExpense.js';
import Expenses from './Components/Expenses/Expenses.js';


//using arrow functions
const App = () => {
  const expences = [
    { title: "Car Insurance",amount: 200, date: new Date(2024,3,13)},
    { title: "Car Insurance",amount: 200, date: new Date(2024,3,13)}
  ]
  return (
    <div>
        <NewExpense />
        <Expenses items={expences} />
    </div>
  );
}

export default App;
