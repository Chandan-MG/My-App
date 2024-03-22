
import NewExpense from './Components/NewExpense/NewExpense.js';
import Expenses from './Components/Expenses/Expenses.js';
import React, {useState} from 'react';

const DUMMY_EXPENSES = [
  { id:"e1", title: "Car Insurance",amount: 200, date: new Date(2024,3,13)},
  // { id:"e2", title: "Car Insurance",amount: 200, date: new Date(2024,3,13)}
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



// import './App.css';
// import React, {useState} from 'react';

// const DUMMY_DATA =[
//   { text: 'Do all exercises', id:'g1'},
//   { text: 'Complete the course', id:'g2'}
// ]
// function App() {

//   const [ goals, setGoals] = useState(DUMMY_DATA)

//   const [enteredGoal, setEnteredGoal] = useState('');

//   const submitFormHandler = (event) =>{
//     event.preventDefault();

//     if(enteredGoal.trim() !== ''){
//       const newGoal ={
//         id: Math.random().toString(),
//         text: enteredGoal.trim()
//       }
//       setGoals(prevGoals => [...prevGoals, newGoal]);
//       setEnteredGoal('');
//     }

//     // console.log(enteredGoal);

//   }

//   const textChangedHandler = (event) => {
//     setEnteredGoal(event.target.value);
//   }


//   return (
//     <div>
//       <div className="app">
//         <form onSubmit={submitFormHandler}>
//             <div className='card'>
//               <div className='new-goal-controls'>
//                 <div className='new-goal-control'>
//                   <label id='text'>Course Goal</label>
//                   <input type='text' id='text' value={enteredGoal} onChange={textChangedHandler} />
//                 </div>
//               </div>
//               <div className='new-goal-button'>
//                   <button type='submit'>Add Goal</button>
//               </div>
//             </div>
//         </form>
//       </div>
      
//       <div className='content'>
//         {goals.map(goal => (
//           <div key={goal.id} className='goal-item'>
//             {goal.text}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
