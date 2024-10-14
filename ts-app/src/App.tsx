import React, { useState } from 'react';
import './App.css';
import Product from './Product';

function App() {
  const[counter,setCounter] = useState<number>(0);
  const [txt,setText] = useState<string>('')
  const [selectText,setSelectText] = useState<string>('')
 
  const btnHandler = (e:React.MouseEvent<HTMLButtonElement>):void=>{
    setCounter(counter+1)
  }

  const inputChangeHandler = (e:React.ChangeEvent<HTMLInputElement>):void=>{
    setText(e.target.value)
  }

  const handleSelectChange = (e:React.ChangeEvent<HTMLSelectElement>):void=>{
      setSelectText(e.target.value)
  }

  return (
    <div className="App">
      <Product pCode={1} pName='String' qty = {10}/>
      <h1>{counter}</h1>
      <hr/>
      <button onClick={btnHandler}>Increment</button>
      <hr/>
      <p>{txt}</p>
      <hr/>
      <input type = "text" onChange={inputChangeHandler} />
      <hr/>
      <p>{selectText}</p>
      <select onChange={handleSelectChange}>
        <option value={"Apple"}>Apple</option>
        <option value={"Banana"}>Banana</option>
        <option value={"Grapes"}>Grapes</option>
        <option value={"Orange"}>Oranges</option>
      </select>
    </div>
  );
}

export default App;
