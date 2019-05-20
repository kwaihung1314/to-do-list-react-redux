import React from 'react'

const todo = ({ todo, onMarkClick, onDeleteClick }) => {
  return (
    <div className={'todo ' + (todo.completed? 'completed': '')}>
      <div>{todo.text}</div>
      <a onClick={onMarkClick} href>Mark Complete</a>
      <a onClick={onDeleteClick} href>Delete X</a>
    </div>
  )
}

export default todo