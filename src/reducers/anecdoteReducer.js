const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  let newState
  switch(action.type) {
    case 'VOTES':
      const voted = action.anecdote
      const changedObject = {...voted, votes: voted.votes + 1} 
      newState = state.map(anecdote => anecdote.id === voted.id ? changedObject : anecdote)
      return newState
    case 'NEW_ANECDOTE':
      const newObject = action.data
      newState = state.concat(newObject)
      return newState
    case 'INIT_ANECDOTES':
      return action.data
    case 'SORT':
      newState = state.sort((a,b) => a.votes < b.votes)
      return newState
    default:
      return state
  }
  
}

export const votes = (anecdote) => {
  return {
    type: 'VOTES',
    anecdote,
  }
}

export const createAnecdot = (data) => {
  return {
    type: 'NEW_ANECDOTE',
    data,
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}


export const sort  = () => {
  return {
    type: 'SORT'
  }
}

export default reducer