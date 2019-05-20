import todos from './reducers/todos'
import filter from './reducers/filter'
import { createStore } from 'redux'

const rootReducer = (state = {}, action) => ({
  todos: todos(state.todos, action),
  filter: filter(state.filter, action)
})

export default createStore(rootReducer)