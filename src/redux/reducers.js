import { combineReducers } from 'redux'

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_ACTION':
      return state + action.amount
    default:
      return state
  }
}

export default combineReducers({ count: countReducer })
