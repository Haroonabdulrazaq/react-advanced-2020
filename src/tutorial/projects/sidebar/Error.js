import React from 'react';
import {Link} from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h2>Oops! Error Occured</h2>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default Error
