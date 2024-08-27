import { Component } from "react";

class classBasedComponent extends Component{
    state = {
            showText:false,
            changeColor:false,
            count:0,
            changeCountStyle:false
        }
    
    handleClick = ()=>{ 
        console.log('button clicked')
        const { showText,changeColor } = this.state
        this.setState({
                      showText:!showText,
                      changeColor:!changeColor
                    })
            }

    //Life Cycle Methods
    //componentDidMount
    //componentDidUpdate
    //componentwillUnmount
    
    componentDidMount(){
        console.log("this is called first time on page load");
        this.setState({ 
             showText   : !this.state.showText,
             changeColor: !this.state.changeColor
        });
    }

    handleCount = ()=>{
        //destructure this state
        this.setState({
            ...this.state,
            count : this.state.count+1
        });
    };

    componentDidUpdate(prevProps,prevState){
        //previous count is not the same as current count
        if(
            prevState && prevState.count !== this.state.count && 
            this.state.count ===10)
            {
                this.setState({
                ...this.state,
                changeCountStyle:true,
            });
        };
    }

    render(){
        const {showText,changeColor,count,changeCountStyle} = this.state
        console.log(changeCountStyle)
        return (
            <div>
                {
                    showText ? <h3 style={{color:changeColor? 'red':'black'}}>  Class Based component</h3>:null
                }
                    <button onClick={this.handleClick}> Toggle Text</button>
                    <button onClick={this.handleCount}>Increse Count Value</button>
                    <h3 style={{
                            color: changeCountStyle ? "blue" : "black",
                            fontSize: changeCountStyle ? "30px" : "12px",
            }}>Count is {count}</h3>
            </div>
            );
        }
}
export default classBasedComponent;