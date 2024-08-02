import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating'
import ImageSlider from './components/image-slider';


function App() {
  return (
    <div>
      {/*<Accordian/>*/}
      {/* <RandomColor/>*/}
      {/*<StarRating noOfStars = {10}/>*/}
      <ImageSlider
       urls = {"https://picsum.photos/v2/list"} 
       page ={"1"} limit={"10"}/>
    </div>
  );
}

export default App;
