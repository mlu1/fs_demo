import { useState } from 'react'
import './App.css'
import ClassBasedComponent from './components/class-based-component'
import FunctionalComponent from './components/functional-component'
import ProductList from './components/products'
import Users from './components/users'
import ContextButtonComponent from './components/context-concept/button'
import ContextTextComponent from './components/context-concept/text'
import UseReducerExample from './components/use-reducer-example'
import FormComponent from './components/form'
import RegisterComponent from './components/register'
import LoginComponent from './components/login'

const dummyProductsData = ['Product 1','Product 2','Product 3','Product 4'];

function App() {
  return (
    <div>
      <h1>React 2024</h1>
      {/*{<ProductList name = "mlu" city= "ABC" listOfProducts= {dummyProductsData}/>
      &<ClassBasedComponent/>*/}
      {
        /*<Users/>
          <ContextButtonComponent/>
          <ContextTextComponent/>
        */
      }
      {/*<UseReducerExample/>*/}
      {/*<FormComponent/>*/}
      <div style={{display:'flex',gap:'20px'}}> 
          <LoginComponent/>
          <RegisterComponent/>
      </div>
    </div>
  )
}

export default App