import React, {useState, useContext ,useEffect} from 'react'
import { useCallback } from 'react';
  let AppContext = React.createContext()
  let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppProvider = ({children}) => {
  let[loading, setLoading] = useState(false);
  let[cocktails, setCocktails] = useState([]);
  let[searchTerm, setSearchTerm] = useState('a');



  const fetchDrinks = useCallback( async () => {
      setLoading(true)
      try {
        const response = await fetch(`${url}${searchTerm}`)
        const data = await response.json()
        console.log(data);
        const { drinks } = data
        if (drinks) {
          const newCocktails = drinks.map((item) => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass,
            } = item

            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            }
          })
          setCocktails(newCocktails)
        } else {
          setCocktails([])
        }
        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    },[searchTerm])

  useEffect(() => {
    fetchDrinks()
  }, [searchTerm,fetchDrinks])

  if(loading){
    return (
       <h2> Loading... </h2>
    )
  }
  return (
    <AppContext.Provider value={{loading, cocktails, searchTerm, setSearchTerm}}>
      <h2>Context for Fetch Drink </h2>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext=()=>{
  return useContext(AppContext)
}

export default AppProvider;
