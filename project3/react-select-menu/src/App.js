import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating'
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data'
import QRCode from 'react-qr-code';
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';

function App() {
  return (
    <div>
      {/*<Accordian/>*/}
      {/* <RandomColor/>*/}
      {/*<StarRating noOfStars = {10}/>*/}
      {/*<ImageSlider
       urls = {"https://picsum.photos/v2/list"} 
       page ={"1"} limit={"10"}/>*/
      }
      {/*<LoadMoreData/>*/}
      {/*<TreeView menus= {menus}/>*/}
      {/*<QRCodeGenerator/>*/}
      <LightDarkMode/>
    </div>
  );
}

export default App;
