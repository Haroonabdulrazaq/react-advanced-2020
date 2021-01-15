export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        isModalOpen: true,
        list: [...state.list, action.payload],
        modalContent: "Item Added"
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        isModalOpen: true,
        list: state.list.filter((item) => item.id !== action.payload),
        modalContent: "Item Removed"
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpen: false,
      }
    case 'NO_VALUE':
      return {
        ...state,
        isModalOpen: true,
        modalContent: "No value Added"
      }
    default: throw new Error("Action type not found")
  }
 
}