import './App.css'
class App extends React.Component{
    state = {
        btn_color:'button-red'
    }

    handleButtonClick =(event)=>{
        this.setState({btn_color:'button-grey'})
    }
    render(){
        return(
            <div>
                <button
                className={this.state.btn_color} 
                onClick={this.handleButtonClick}
                >
                Click Me!</button>
            </div>
        )
    }
}