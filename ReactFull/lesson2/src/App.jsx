import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassBasedComponent from './components/class-based-component'
import FunctionalComponent from './components/functional-component'
import ProductList from './components/products'

const dummyProductsData = ['Product 1','Product 2','Product 3','Product 4'];

function App() {
  return (
    <div>
      <h1>React 2024</h1>
      {/*<ProductList name = "mlu" city= "ABC" listOfProducts= {dummyProductsData}/>*/}
      <ClassBasedComponent/>
    </div>
  )
}

export default App