import React from 'react'
import ReactDOM from 'react-dom'

const App =()=>{
    return(
           <div className='ui comment'>
                <div className='comment'>  
                    <a href = "/" className='avater'>
                        <img alt ='profile picture'/>
                    </a>
                    <div className='content'>
                        <a href = "/" className='author'>
                            Sarah
                        </a>
                        <div className='metadata'>
                            <span className='date'>
                                Today at 5:00pm
                            </span>
                        </div>
                        <div className='text'>
                                its amazing
                        </div>
                    </div>
                </div>
            </div> 
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'))

