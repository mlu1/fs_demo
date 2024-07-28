import React from "react";
import {Link} from 'react-router-dom'
const Contact = (props) =>{
    
    return(
        <div>
            <div className="ui raised very padded text container segment"
             style ={{marginTop:'80px'}}>
                <Link to ='/alex' className='ui header'>Alex</Link>
                <p>Some text related to contact page stuff</p>
            </div>
            <div className="ui raised very padded text container segment" 
                style ={{marginTop:'80px'}}>
                <Link to='/willma' className='ui header'>Wilma</Link>
                <p>Some text related to contact page stuff</p>
            </div>
        </div>   
    )
}
export default Contact;