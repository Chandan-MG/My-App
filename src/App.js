
import ExpenseItem from './Components/ExpenseItem';

function App() {
  const expences = [
    { title: "Car Insurance",amount: 100, date: new Date(2024,3,13)},
    { title: "Car Insurance",amount: 100, date: new Date(2024,3,13)},
    { title: "Car Insurance",amount: 100, date: new Date(2024,3,13)},
    { title: "Car Insurance",amount: 100, date: new Date(2024,3,13)},
    { title: "Car Insurance",amount: 100, date: new Date(2024,3,13)},
    { title: "Car Insurance",amount: 100, date: new Date(2024,3,13)},
    { title: "Car Insurance",amount: 100, date: new Date(2024,3,13)},
    { title: "Car Insurance",amount: 100, date: new Date(2024,3,13)}
  ]
  return (
    <div>
        <h2>Lets gets started..</h2>
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
