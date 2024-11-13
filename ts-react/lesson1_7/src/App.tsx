import './App.css';
import NameTag from './components/NameTag';
import Box from './components/Box'


function App() {
  return (
    <div className="App">
     <NameTag name = {"Mluleki"}/>
      <Box style={{padding:"1em",border:"5px solid purple"}}>
        just a string.
        <p>Some html that is not nested</p>
        <Box style = {{borderColor:'yellow'}}>
          <h2> Another React Component with one child</h2>
        </Box>
        <Box style={{borderColor:'red'}}>
          <h2> A nested React component with two children</h2>
          <p>The second child</p>
        </Box>
      </Box>
    </div>
  );
}

export default App;
