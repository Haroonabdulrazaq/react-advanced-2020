import React from 'react';
import PropTypes from 'prop-types';
// import defaultImage from './default-image.jpeg'

const Product = ({name, price, image}) => {
 
     return <div  className="product">
              <img src={image.url} alt={name} />
              <h4>{name}</h4>
              <p>$ {price}</p>
            </div>
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired
}

Product.defaultProps = {
  name: "Product name",
  price: 0.10,
  image: {url: "https://dl.airtable.com/.attachments/3245c726ee77d73702ba8c3310639727/f000842b/product-5.jpg"}
}

export default Product;
//