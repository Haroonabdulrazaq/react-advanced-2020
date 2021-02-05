import React from 'react';
import Cocktail from './Cocktail';
import useGlobalContext from '../useGlobalContext';

export default function CocktailList() {
  console.log(useGlobalContext());
 const  {cocktails, loading}  = useGlobalContext()
  if (loading) {
    return  <h2>Loading...</h2> 
  }
  if (cocktails.length < 1) {
    return (
      <h2>
        no cocktails matched your search criteria
      </h2>
    )
  }
  return (
    <section >
      <h2  >cocktails</h2>
      <div >
        { cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}