
import ExpenseItem from './Components/Expenses/ExpenseItem.js';
import NewExpense from './Components/NewExpense/NewExpense.js';


//using arrow functions
const App = () => {
  const expences = [
    { title: "Car Insurance",amount: 200, date: new Date(2024,3,13)},
    { title: "Car Insurance",amount: 200, date: new Date(2024,3,13)}
  ]
  return (
    <div>
        <NewExpense />
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
    </div>
  );
}

export default App;
