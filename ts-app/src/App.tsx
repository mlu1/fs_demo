import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';

function App() {
  const[counter,setCounter] = useState<number | string>(1);
 

  const btnHandler = ()=>{
    setCounter(1)
  }

  return (
    <div className="App">
      <Product pCode={1} pName='String' qty = {10}/>
      <h1>{counter}</h1>
      <hr/>
      <button onClick={btnHandler}>Increment</button>
    </div>
  );
}

export default App;
