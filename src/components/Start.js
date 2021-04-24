import React from 'react';
import 'bulma/css/bulma.min.css';

const Start = ({ onQuizStart }) => {
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Pre-Test</h1>
          <p>--------------</p>
          <button className="button is-info is-medium" onClick={onQuizStart}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default Start;