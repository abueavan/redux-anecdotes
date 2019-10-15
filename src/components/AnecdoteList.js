import React from 'react';
import { votes, sort } from '../reducers/anecdoteReducer'
import { setNotification, clear } from '../reducers/NotificationReducer'


const AnecdoteList = ({store}) => {
  const anecdotes = store.getState().anecdotes

  const vote = (id) => {
    console.log('vote', id)
    const votedAnecodte = anecdotes.find(anecdote => anecdote.id === id)
    store.dispatch(votes(votedAnecodte))
    store.dispatch(sort())
    store.dispatch(setNotification(`you have voted '${votedAnecodte.content}'`))
    setTimeout(() => {
        store.dispatch(clear())
      }, 5000)
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList