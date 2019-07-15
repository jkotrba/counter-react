export const addAction = amount => {
  return { type: 'ADD_ACTION', amount }
}

export const addActionAsync = amount => {
  return { type: 'ADD_ACTION_ASYNC', amount }
}
