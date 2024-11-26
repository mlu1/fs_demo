import React from "react";

const SingleComment =({picture,name,date})=>{
    return(
            <div className='comment'>
                <a href="/" className='avatar'>
                    <img src = {picture} alt ="profile"/>
                </a>
                <div className='content'>
                    <a href="/" className='author'>
                            {name}
                    </a>
                    <div className='metadata'>
                        <span className='date'>
                            {date}
                        </span>
                    </div>
                    <div className='text'>
                        {text}
                    </div>
                </div>
            </div>
    )
}

export default SingleComment; 