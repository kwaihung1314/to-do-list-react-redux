import React from 'react'
import { filterParameters } from '../store/actions'
import FilterButton from '../components/FilterButton'

const FilterArea = () => {
  return (
    <div>
      <span>Choose to filter: </span>
      <FilterButton filter={filterParameters.ALL} />
      <FilterButton filter={filterParameters.ACTIVE} />
      <FilterButton filter={filterParameters.COMPLETED} />
    </div>
  )
}

export default FilterArea