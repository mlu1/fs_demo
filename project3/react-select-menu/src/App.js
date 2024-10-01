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
      <Route exact path ='/scroll' element ={<ScrollIndicator url = {'https://dummyjson.com/products?limit=100'}/>}/>
        {/*<Accordian/>*/}
      <Route exact path ='/random' element ={<RandomColor/>}/>
      <Route exact path ='/star' element ={<StarRating noOfStars = {10}/>}/>
      <Route exact path ='/images' element ={<ImageSlider
        urls = {"https://picsum.photos/v2/list"} 
        page ={"1"} limit={"10"}/>}/>
        <Route exact path ='/load' element = {<LoadMoreData/>}/>
        <Route exact path ='/tree' element ={<TreeView menus= {menus}/>}/>
        <Route exact path ='/qrcode' element = {<QRCodeGenerator/>}/>
        <Route exact path ='/light'   element ={<LightDarkMode/>}/>
        <Route exact path ='/tabs' element ={<TabsTest/>}/>
        <Route exact path ='/modals' element ={<ModalTest/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;