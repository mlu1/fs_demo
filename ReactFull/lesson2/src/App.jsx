import { useState } from 'react'
import './App.css'
import ClassBasedComponent from './components/class-based-component'
import FunctionalComponent from './components/functional-component'
import ProductList from './components/products'
import Users from './components/users'

const dummyProductsData = ['Product 1','Product 2','Product 3','Product 4'];

function App() {
  return (
    <div>
      <h1>React 2024</h1>
      {/*{<ProductList name = "mlu" city= "ABC" listOfProducts= {dummyProductsData}/>
      &<ClassBasedComponent/>*/}
      <Users/>
    </div>
  )
}

export default App