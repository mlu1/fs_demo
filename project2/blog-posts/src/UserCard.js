import React from 'react'
import PropTypes from 'prop-types';


UserCard.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
const UserCard = ({children})=>{
    return(
        <div className='ui card'>
            <div className='content'>
                <div className='header'> Alex Tancredi</div>
                <div className='desciprionn'>
                    {children}
                </div>
            </div>
            <div className='ui bottom button'>
                <i className='add icon'></i>
            </div>
        </div>
    ) 

}

export default UserCard;