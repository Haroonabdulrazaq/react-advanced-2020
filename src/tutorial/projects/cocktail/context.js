import React, {useState, useEffect} from 'react'

const AppProvider = () => {
  let[loading, setLoading] = useState(false);
  let[cocktails, setCocktails] = useState([]);
  let[searchTerm, setSearchTerm] = useState('');

  let AppContext = React.createContext()

  let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


  const fetchDrink= async() => {
    setLoading(true)
    const response = await fetch(`${url}${searchTerm}`)
    const drinkData = await response.json()
    console.log(drinkData)
    if(drinkData){
      setLoading(false)
    }
  }

  useEffect(() => {
  fetchDrink()
  }, [])

  if(loading){
    return (
       <h2> Loading </h2>
    )
  }
  return (
    <AppContext.Provider>
    
      <h2>Context for Fetch Drink </h2>
    </AppContext.Provider>
  )
}

export default AppProvider;
