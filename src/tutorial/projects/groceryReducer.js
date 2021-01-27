export const reducer=(state, action)=>{
  switch (action.type) {
    case "ADD_ITEM":
    return {
      ...state,
      list: [...state.list, action.payload]
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
      list: editedList
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
    case "DELETE_ITEM":
      let newList = state.list.filter((item)=> item.id !== action.payload)
      return {
        ...state,
        list: newList,
      }
    case "CLEAR_ITEM":
      return {
        ...state,
        list: []
      }
  
    default:
      return "Action type mismatch" 
 
  }
}