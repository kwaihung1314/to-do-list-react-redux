const addToDo = text => ({
  type: 'ADD_TO_DO',
  text
})

const toggleToDo = index => ({
  type: 'TOGGLE_TO_DO',
  index
})

const deleteToDo = index => ({
  type: 'DELETE_TO_DO',
  index
})

const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  filter
})

const filterParameters = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
}

export {
  addToDo,
  toggleToDo,
  deleteToDo,
  changeFilter,
  filterParameters
}