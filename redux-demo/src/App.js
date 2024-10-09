import './App.css';
import Purchase from './components/Purchase';
import Cart from './components/Cart';
import Total from './components/Total';

/*
  The Provider component makes the Redux store available to any nested components
  that need access to the Redux store.
*/

function App() {
  return (
    <div className="App">
      <Purchase/>
      <Cart/>
      <Total/>
    </div>
  );
}

export default App;
