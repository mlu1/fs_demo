import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class TodoList extends React.Component{
    static contextType = ThemeContext;
    render(){
        const {isDarkTheme,lightheme,darkTheme} = this.context;
        const theme  = isDarkTheme?darkTheme:lightheme
        return(
        <div style = {{
            background:theme.background,
            color:theme.text,
            height:'140px',
            textAlign:'center'
        }}>
            <p className="item"> Plan Family Trip</p>
            <p className="item">Go for shopping</p>
            <p className="item">Go for a walk</p>
        </div>
        )}
}
export default TodoList;