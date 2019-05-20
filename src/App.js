import React from 'react';
import './css/App.css';
import AddToDo from './containers/AddToDo'
import FilterArea from './containers/FilterArea'
import ToDoList from './containers/ToDoList'

function App() {
  return (
    <div>
      <AddToDo />
      <FilterArea />
      <ToDoList />
    </div>
  )
}

export default App;
