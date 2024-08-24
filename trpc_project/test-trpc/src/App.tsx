import { useState } from 'react'
import { User } from './Person'
import { UserProvider } from './UserContextProvider'
import "./App.css"

function App() {

  const fetchUser = ()=>(
    { 
      name:"Mluleki",age:22,isMarried:false
    })
    const userFetched =fetchUser();
  return ( 
    <>
      <UserProvider name ={userFetched.name} 
              age = {userFetched.age}
              isMarried = {userFetched.isMarried}/>
              {" "}
      <UserProvider name ={"Carlos"} age = {34} isMarried={true}/>{" "}
    </>
    )}
export default App