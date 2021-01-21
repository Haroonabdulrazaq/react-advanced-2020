import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({name, price, image}) => {
   
//  const url = image && image.url
     return <div  className="product">
              <img src={image.url } alt={name} />
              <h4>{name  }</h4>
              <p>$ {price }</p>
            </div>
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired
}

Product.defaultProps = {
  name: "Product name",
  price: 0.00,
  image: {url: defaultImage}
}

export default Product;