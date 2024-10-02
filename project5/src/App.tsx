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

  const [people,setPeople] = useState<IState["people"]>([{
    name:"Lebron James",
    url:"https://cdn.nba.com/headshot/nba/latest/1040x760/2544.png",
    age:36,
    note:"Allergic to staying in one team"
  }])

  return (
    <div className="App">
      <h1>People Invited</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
