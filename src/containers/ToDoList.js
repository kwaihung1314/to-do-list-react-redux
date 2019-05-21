import React from 'react'
import { connect } from 'react-redux'
import Todo from '../components/Todo'
import {
  toggleToDo,
  deleteToDo,
  filterParameters
} from '../store/actions'

const ToDoList = ({ todos, onMarkClick, onDeleteClick}) => {
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <Todo 
            key={todo.text}
            todo={todo}
            onMarkClick={() => onMarkClick(index)}
            onDeleteClick={() => onDeleteClick(index)}
            />
          )
      })}
    </div>
  )
}

const getFilterTodos = (todos, filter) => {
  switch(filter) {
    case filterParameters.ALL:
      return todos
    case filterParameters.COMPLETED:
      return todos.filter(todo => todo.completed)
    case filterParameters.ACTIVE:
      return todos.filter(todo => !todo.completed)
    default:
      return todos 
  }
}

const mapStateToProps = (state) => ({
  todos: getFilterTodos(state.todos, state.filter)
})

const mapDispatchToProps = (dispatch) => ({
  onMarkClick: index => dispatch(toggleToDo(index)),
  onDeleteClick: index => dispatch(deleteToDo(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList)