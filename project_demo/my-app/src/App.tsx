import React from 'react';
import './App.css';

let name:string
let age :number | string
let isStudent:boolean
let hobbies:number[]
let role:[number,string]

/*
  Function Types
*/
let printName:(name:string)=>string

/*
type Person = {
  name:string,
  age?:number
}

let person:Person = {
  name:"Mluleki",
  age:35
}

let lotsofPeople:Person[];
*/

interface Personal {
    name:string;
    age?:number
}

type X = Personal & {
  a:string,
  b:number
}


interface Guy extends Personal  {
  profession:string
}


function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
