import React from 'react'
import { connect } from 'react-redux'
import { addToDo } from '../store/actions'

const AddToDo = ({ onSubmit }) => {
  let textInput = React.createRef()
  return (
    <form onSubmit={e => onSubmit(e, textInput.current)}>
      <input type="text" ref={textInput}/>
      <input type="submit" value="Add"/>
    </form>
  )
}

const addNewToDoToList = (e, input, dispatch) => {
  e.preventDefault()
  if (!input.value.trim()) {
    return
  }
  dispatch(addToDo(input.value))
  input.value = ''
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (e, input) => addNewToDoToList(e, input, dispatch)
})

export default connect(null, mapDispatchToProps)(AddToDo)

