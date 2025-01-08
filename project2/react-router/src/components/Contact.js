import React from "react";
import {Link} from 'react-router-dom';
import Modal from './Modal'

const Contact = (props) =>{
    console.log(props)
    return(
        <div>
            <Modal/>
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