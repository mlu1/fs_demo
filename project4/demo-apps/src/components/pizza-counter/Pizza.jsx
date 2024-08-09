import './pizza.css'
import React from 'react'
import pizzaImage from './images/dates.png'

class Pizza extends React.Component{
    constructor(props){
        super(props)
            this.state = {
                count:0
            }   
    }

    takeOrder(){
        this.setState({
            count:this.state.count +1
        })
    }

    cancelOrder(){
        this.setState({
            count:this.state.count > 0 ? this.state.count-1:this.state.count =0 
        })
    }

    render(){
        return (
            <div className='pizza-container'> 
                <img src={pizzaImage}/>
                <h1>Pizza Order Counter</h1>
                <h1 className='h1-counter'>{this.state.count}</h1>
                <button onClick={()=>this.takeOrder()}>Take Order</button>
                <br/>
                <button onClick={()=> this.cancelOrder()} >Cancel Order</button>

            </div>
         )
        }
}

export default Pizza