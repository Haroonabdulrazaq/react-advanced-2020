import {AppContext} from './context';
import  { useContext }  from 'react'
// make sure use
const useGlobalContext = () => {
  return useContext(AppContext)
}

export default useGlobalContext;