const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TO_DO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return {
            text: todo.text,
            completed: true
          }
        }
        return todo
      })
    case 'DELETE_TO_DO':
      return state.filter((todo, index) => {
        return index !== action.index
      })
    default:
      return state
  }
}

export default todos