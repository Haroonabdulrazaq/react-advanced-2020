const reducer=(state, action)=>{
  switch(action.type){
    case 'REMOVE_ITEM':
      return {
        ...state,
        tourData: state.tourData.filter((tour)=> tour.id !== action.payload )
      }
      // case 'READ_MORE':
      //   return {
      //     ...state,
      //     textContent: "read more"   
      //   }
      // case 'READ_LESS':
      //   return {
      //     ...state,
      //     textContent: "read less" 
      //   }

    default: throw new Error("Action type mismatch")
  }
}