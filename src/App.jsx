import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  function loadDataFromAPI() {
    const URL = import.meta.env.VITE_API_URL;
    axios
      .get(`${URL}/todos`)
      .then(({ data }) => {
        setTodos(data)
      })
      .catch(e => {
        console.log(e.message);
        alert('Ooooops! Something went wrong!');
      });
  }


  return (
    <>
      {
        todos.length > 0 
      }
        
      
    </>
  )
}

export default App
