import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';

function App() {
  const[count,setCounter] =useState<number|string>(5)

  interface IState {
    people :{
      name:string,
      age:number,
      url:string,
      note?:string
    }[]
  }
  /*Declared an IState*/
  const [people,setPeople] = useState<IState["people"]>([])
  
  return (
    <div className="App">
      <h1>People Invited</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
