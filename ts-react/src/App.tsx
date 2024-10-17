import './App.css';
import NameTag from './components/NameTag';
import * as PropTypes from 'prop-types'
import Box from './components/Box'


function App() {
  return (
    <div className="App">
     <NameTag name = {"Mluleki"}/>
      <Box>
        just a string.
        <p>Some html that is not nested</p>
        <Box>
          <h2> Another React Component with one child</h2>
        </Box>
        <Box>
          <h2> A nested React component with two children</h2>
          <p>The second child</p>
        </Box>
      </Box>
    </div>
  );
}

export default App;
