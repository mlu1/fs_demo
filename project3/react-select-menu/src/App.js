import './App.css';
import { BrowserRouter,Route,Routes,Switch,Link  } from 'react-router-dom';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating'
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QRCode from 'react-qr-code';
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';
import Home from './components/home-page'
import NotFound from './components/not-found';
import TabsTest from './components/custom-tabs/tabs-test';
import ModalTest from './components/custom-modal-popup/modal-test';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        {/*<Route exact path ='/home' element = {<Home/>}/>*/}
        {/*<ScrollIndicator url = {'https://dummyjson.com/products?limit=100'} >*/}
        {/*<Accordian/>*/}
        {/* <RandomColor/>*/}
        {/*<StarRating noOfStars = {10}/>*/}
        {/*<ImageSlider
        urls = {"https://picsum.photos/v2/list"} 
        page ={"1"} limit={"10"}/>*/
        }
        {/*<LoadMoreData/>*/}
        {/*<TreeView menus= {menus}/>*/}
        {/*<Route exact path ='/qr_code' element = {<QRCodeGenerator/>}/>*/}
        {/*<Route exact path ='/light'   element ={<LightDarkMode/>}/>*/}
        {/*<Route exact path ='/home' element ={<TabsTest/>}/>*/}
        <Route exact path ='/home' element ={<ModalTest/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;