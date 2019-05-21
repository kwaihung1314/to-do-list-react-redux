import React from 'react'
import { connect } from 'react-redux'
import { changeFilter } from '../store/actions'

const FilterButton = ({ active, filter, onClick }) => {
  return (
    <button 
      disabled={active}
      onClick={onClick}
    >
      {filter}
    </button>
  )
}

const mapStateToProps = (state, ownProps) => ({
  active: (state.filter === ownProps.filter)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(changeFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton)