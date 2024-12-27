import React from "react";
import PropTypes from "prop-types";

const SingleComment = ({ picture, name,date,text }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={picture} alt="profile" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {name}
        </a>
        <div className="metadata">
          <span className="date">{date}</span>
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

SingleComment.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date:PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SingleComment;
