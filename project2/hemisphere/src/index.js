import React from "react";
import ReactDOM from "react-dom";
import HemisphereDisplay from "./HesmisphereDisplay";


class App extends React.Component{
        constructor(props){
            super(props)
            this.state = {lattitude:null,errorMessage:''}
            window.navigator.geolocation.getCurrentPosition(
                (position) => 
                  this.setState({lattitude:position.coords.latitude})  ,
                (error) => {
                    this.setState({errorMessage:error.message})
                }
            );
        }
        componentDidMount(){
            console.log(`componentDidMount`)

        }

        componentDidUpdate(){
            console.log(`componentDidUpdate`)
        }

        render(){
            if (this.state.errorMessage && !this.state.lattitude){
                return(<div>{this.state.errorMessage}</div>)
            }
            
             if(!this.state.errorMessage && this.state.lattitude){
                return (<div>{this.state.lattitude}</div>)
             }
             else{
                return <div>Loading...</div>
             }
        }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)