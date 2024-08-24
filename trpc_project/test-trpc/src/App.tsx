import { useState } from 'react'
import { Person } from './Person'
import "./App.css"

function App() {

  const fetchUser = ()=>(
    { 
      name:"Mluleki",age:22,isMarried:false
    })
    const userFetched =fetchUser();
  return ( 
    <>
      <Person name ={userFetched.name} 
              age = {userFetched.age}
              isMarried = {userFetched.isMarried}/>
              {" "}
      <Person name ={"Carlos"} age = {34} isMarried={true}/>{" "}
    </>
    )}
export default App