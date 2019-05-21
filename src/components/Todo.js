import React from 'react'
import '../css/Todo.css'

const todo = ({ todo, onMarkClick, onDeleteClick }) => {
  return (
    <div className={'todo ' + (todo.completed? 'completed': '')}>
      <div className="text">{todo.text}</div>
      <button onClick={onMarkClick}>Mark Complete</button>
      <button onClick={onDeleteClick}>Delete X</button>
    </div>
  )
}

export default todo