import './star_style.css'
import {FaStar} from 'react-icons/fa'
import { useState } from 'react';
import PropTypes from prop-PropTypes;

StarRating.propTypes = {
    noOfStars:PropTypes.number.isRequired
}



export default function  StarRating({noOfStars =5}){

     const [rating,setRating] = useState(0);
     const [hover,setHover] = useState(0);

    function handleClick(getCurrentIndex){   
        setRating(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex)
    }

    function handleMouseLeave(){
        setHover(rating)
    }

     return (
        <div className='container'>
            <h2>Star Rating APP</h2>
            <div className = "star-rating">
            {
                [...Array(noOfStars)].map((j,index)=>{
                    index +=1
                    return (<FaStar
                        key={j}
                        className={index <= (hover || rating) ? 'active':'inactive'}
                        onClick = {()=> handleClick(index)}
                        onMouseMove = {() =>handleMouseEnter(index)}
                        onMouseLeave= {()=> handleMouseLeave()}
                        size = {40}
                        />)
                    })
                }
            </div>
        </div>
     )   
}