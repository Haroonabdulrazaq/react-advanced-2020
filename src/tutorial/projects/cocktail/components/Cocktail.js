import React from 'react';

const Cocktail = ({name,image, info, glass}) => {
  return (
    <div>
      <img src={image} alt={name} />
      <div> <span>info : </span> {info} </div>
      <div>Glass: {glass}</div>
    </div>
  )
}

export default Cocktail;
