import React from 'react';
import Product from './Product';
import { useFetch } from '../../9-custom-hooks/final/2-useFetch';

import {ProductContext} from './useContext';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-prop-types-example'



const Index = () => {
  const { products } = useFetch(url)
 
  return (
    <ProductContext.Provider value={{products}}>
      <h2>products</h2>
      <section className='products'>
           <Product  />
      </section>
    </ProductContext.Provider>
  )
}

export default Index;
