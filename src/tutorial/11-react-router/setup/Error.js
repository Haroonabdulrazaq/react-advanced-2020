import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div>
      <h1>Oops!, An error occured</h1>
      <Link to="/">
        <p>Back to home page</p>
      </Link>
    </div>
  );
};

export default Error;
