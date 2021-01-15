export const reducer=(state, action)=> {

  switch(action.type){
    case 'ADD_ITEM':
    const newPeople = [...state.people, action.payload]
    return {
          ...state,
          people: newPeople,
          isModalOpen: true,
          modalContent: "item added"}
    case 'NO_VALUE':
      return {
        ...state,
        isModalOpen: true,
        modalContent: "No value added"}
    case 'REMOVE_ITEM':
      return {
        ...state,
        isModalOpen: true,
        modalContent: "Item Removed",
        people:  state.people.filter(person => person.id !== action.payload),
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpen: false
      }
    
    default:
      throw new Error('No matching action type')
  }
  
}