import React from "react";
import SearchInput from "./SearchInput";
import axios  from "axios";
import ImageList from "./ImageList"

class App extends React.Component{
   state = {images:[]}

   onSearchSubmit = async(entry) =>{
       const response = await axios.get(`https://pixabay.com/api/?key=45138926-b8716ae54566c6aeea83f2de1&q=${entry}&image_type=photo`)
       console.log(this)
       this.setState({images:response.data.hits})
    }
    render(){
    return(
            <div className="ui container" style={{marginTop:'30px'}}>
            <SearchInput onSearchSubmit={this.onSearchSubmit}/>
             <ImageList images={this.state.images}/>
            </div>
        )
    }
}
export default App