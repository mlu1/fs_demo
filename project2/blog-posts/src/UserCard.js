import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ children}) => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header"></div>
        <div className="description">
          {children}
        </div>
      </div>
      <div className="ui bottom button">
        <i className="add icon"></i>
            Add Friend
      </div>
    </div>
  );
};

UserCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserCard;
