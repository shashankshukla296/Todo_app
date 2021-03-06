import React, {useState, useEffect} from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel,  } from '@material-ui/core';

import './App.css';
import db from './firebase';
import firebase from 'firebase'; 

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
// when app loads, we need to listen the database

useEffect(() => {
  //this code runs here... fires when the app.js loads
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
    setTodos(snapshot.docs.map(doc =>({id: doc.id ,todo: doc.data().todo})))

  })
}, []);


  const addTodo = (event) => {
    event.preventDefault();//stop page for refresh.  

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })



    setTodos([...todos, input]);
    setInput('');//clear up the input after clicking add todo buton
    

  }
  return (
    <div className="App">
      <h1>Hello Lavi Nice to Seee U !</h1>
      <form>

      <FormControl>
        <InputLabel>✅ Write a Todo</InputLabel>
        <Input value = {input} onChange={event => setInput(event.target.value)}/>
      </FormControl>


      <Button disabled={!input} type = "submit" onClick ={addTodo} variant="contained" color="primary">
       Add Todo
       </Button>
      {/*<button type = "submit" onClick ={addTodo}> Add Todo</button>*/}
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
          
        ))}
      </ul>
    </div>
  );
}

export default App;
