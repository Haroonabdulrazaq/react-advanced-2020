export const reducer=(state, action)=>{
  switch (action.type) {
    case "ADD_ITEM":
    return {
      ...state,
      list: [...state.list, action.payload],
      modalColor: 'green',
      showModal: true,
      modalContent: "Item Added"
    }
    case "IS_EMPTY":
    return {
      ...state,
      modalColor: 'purple',
      showModal: true,
      modalContent: "Item cannot be Empty",
      
    }
    case "EDIT":
      let editedList = state.list.map((listItem)=>{ 
        if(listItem.id === state.editId){
            return {...listItem, item: action.payload}
        }
          return listItem;
      }) 
    return {
      ...state,
      isEditing: true,
      btnContent: "Edit",
      editId: action.payload,
      list: editedList,
      modalColor: 'green',
      showModal: true,
      modalContent: "Item Edited"
    }
    case "IS_EDITING":
    return {
      ...state,
      isEditing: true,
      btnContent: "Edit",
      editId: action.payload
    }
    case "NOT_EDITING":
    return {
      ...state,
      isEditing: false,
      btnContent: "Submit",
      editId: null
    } 
    case  "CLOSE_MODAL":
    return {
      ...state,
      showModal: false
    }
    case "DELETE_ITEM":
      let newList = state.list.filter((item)=> item.id !== action.payload)
      return {
        ...state,
        list: newList,
        modalColor: 'red',
        showModal: true,
        modalContent: "Item Deleted",
      }
    case "CLEAR_ITEM":
      return {
        ...state,
        list: [],
        modalColor: 'red',
        showModal: true,
        modalContent: "All Item cleared",

      }
  
    default:
      return "Action type mismatch" 
 
  }
}