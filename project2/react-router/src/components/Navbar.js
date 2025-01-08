import React from 'react'
import { Link } from 'react-router-dom'
import withRouter from './WithRouter'

const Navbar = (props) =>{
    setTimeout(()=>{
        console.log(props)
    },200)

    return(
        <nav className = 'ui raised very padded segment'>
                <a className='ui teal inverted segment'>Gloria</a>
                <div className='ui right floated header'>
                    <button className='ui button'><Link to="/">Home</Link></button>
                    <button className='ui button'><Link to="/about">About</Link></button>
                    <button className='ui button'><Link to="/contact">Contact</Link></button>
                </div>
        </nav>
    )
}

export default withRouter(Navbar);