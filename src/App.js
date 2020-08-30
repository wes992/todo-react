import React, { useState } from 'react';
import Todos from './components/Todos';
import Form from './components/Form';


import './App.css';

function App() {
  const [text, setText] = useState([]);
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Todos />
      <Form />
    </div>
  );
}

export default App;
