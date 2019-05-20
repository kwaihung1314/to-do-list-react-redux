import { filterParameters } from '../actions'

const filter = (state = filterParameters.ALL, action) => {
  switch(action.type) {
    case 'CHANGE_FILTER':
      return action.filter
    default:
      return state
  }
}

export default filter