import anecdoteService from '../services/anecdotes'

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
  return async dispatch => {
    const changed = await anecdoteService.put(anecdote)
    console.log('VOTES', changed)
    dispatch({
      type: 'VOTES',
      anecdote,
    })
  }
}

export const createAnecdot = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}


export const sort  = () => {
  return {
    type: 'SORT'
  }
}

export default reducer