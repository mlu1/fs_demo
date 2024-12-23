import {useState} from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people :{
    name:string,
    age:number,
    url:string,
    note?:string,
    id:number,
  }[]
}

function App() {
 
  /*Declared an IState*/

  const [people,setPeople] = useState<IState["people"]>([{
    name:"Lebron James",
    url:"https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    age:36,
    note:"Allergic to staying in one team",
    id:1
  }])

  return (
    <div className="App">
      <h1>People Invited</h1>
      <List people={people}/>
      <AddToList people = {people} setPeople = {setPeople}/>
    </div>
  );
}

export default App;
