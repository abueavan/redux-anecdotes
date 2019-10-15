import React from 'react'
import { createAnecdot } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {

    const addAnecdot = (event) => {
      event.preventDefault();
      props.store.dispatch(
        createAnecdot(event.target.anecdote.value)
      )
      event.target.anecdote.value=''
    }

    return (
        <div>
          <h2>create new</h2>
          <form onSubmit={addAnecdot}>
            <div><input name='anecdote' /></div>
            <button type='submit'>create</button>
          </form>
        </div>
      )
}

export default AnecdoteForm