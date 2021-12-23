import React from 'react';
import './FeedBack.css';

const FeedBack = ({ name, rating, department }) => {
  return (
    <div className="feedback-container">
      <div className="fbk">
        <span>Name:</span> {name}
      </div>
      <div className="fbk">
        <span>Department:</span> {department}
      </div>
      <div className="fbk">
        <span>Rating:</span> {rating}
      </div>
    </div>
  );
};

export default FeedBack;
