import { useState } from 'react';
import './App.css';

function App() {
  const [btnColor,setBtnColor] = useState({
      button_color:'button-red'
  })

  const changeColor = (event)=>{
    setBtnColor({
      btn_color:'button-grey'
    })
  }

  return (
    <div className="App">
      <button className={btnColor.button_color} onClick={changeColor}>
          Click Me!
      </button>
    </div>
  );
}

export default App;
