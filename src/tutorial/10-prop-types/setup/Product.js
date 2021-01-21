import React, {useContext} from 'react';
import { ProductContext } from './useContext';

const Product = () => {

  const {products} = useContext(ProductContext)
 

  return <article className='product'>
   {products.map((product)=>{
     const {id, name, image, price} = product
     return <div key={id} className="item">
              <img src={image} alt={name} /> 
              <p>{name}</p><p>{price}</p>
            </div>
   })}
  </article>;
};

export default Product;
