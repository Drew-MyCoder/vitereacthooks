import { useCallback, useEffect, useState } from 'react'
import './App.css'
import TodoList from './features/todos/TodoList';

function App() {
 const [userInput, setUserInput] = useState('');
 const [loop, setLoop] = useState(0);

 const [num1] = useState(4);
 const [num2] = useState(5);

  const sum = useCallback(() => num1 + num2, [num1, num2]);

useEffect(() => {
  console.log(`New sum. Value: ${sum()}`)
  setLoop(sum());
}, [sum]);

  // return (
  //   <main>
  //     <input type='text' placeholder='input' value={userInput} 
  //     onChange={(e) => setUserInput(e.target.value)} />
  //     <h1>Output: {userInput || "--"} </h1>
  //   </main>
  // )
  return <TodoList />
}

export default App
