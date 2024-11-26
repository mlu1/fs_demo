import React from "react";
import northernPic from  './images/northern.jpg'
import southernPic from  './images/southern.jpg'
import './hemisphere.css'
import PropTypes from 'prop-types';

const hemisphereConfig = {
    Northern:{
        text:'it is Nothern hemisphere',
        picture:northernPic

    },
    Southern:{
        text: 'it is southern hemisphere',
        picture:southernPic
    }

}

const HemisphereDisplay = ({latitude})=>{

    const hemisphere = latitude > 0 ? 'Northern' :'Southern';
    const {text,picture} = hemisphereConfig[hemisphere]

    return (
        <div className = {hemisphere}>
            <div className='ui raised text container segment'>
                <div className="image">
                    <img src = {picture} alt="hemisphere picture"/>
                </div>
                <div className= 'ui teal bottom attached label'>
                    <h1>{text}</h1>
                </div>
            </div>
        </div>
    )
}

export default HemisphereDisplay