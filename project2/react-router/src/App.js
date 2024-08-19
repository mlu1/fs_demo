import React from 'react';
import { BrowserRouter,Route,Routes,Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Card from './components/Card';
import NotFound from './components/NotFound';

 
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route exact path ='/' element={<Home/>}/>
          <Route exact path ='/about' element={<About/>}/>
          <Route exact path ='/contact' element ={<Contact/>} />
          <Route path = '/card/:user' element={<Card/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>
      </BrowserRouter>
  );
}
export default App;