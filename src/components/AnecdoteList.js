import React from 'react'
import{ connect } from 'react-redux'
import { votes, sort } from '../reducers/anecdoteReducer'
import { setNotification, clear } from '../reducers/NotificationReducer'


const AnecdoteList = (props) => {
  const anecdotesToShow = props.anecdotes.filter(anecdote => anecdote.content.match(RegExp(props.filter,'i')))

  const vote = (id) => {
    console.log('vote', id)
    const votedAnecodte = props.anecdotes.find(anecdote => anecdote.id === id)
    props.votes(votedAnecodte)
    props.sort()
    props.setNotification(`you have voted '${votedAnecodte.content}'`)
    setTimeout(() => {
        props.clear()
      }, 5000)
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotesToShow.map(anecdote =>
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

const mapStateToProps = (state) => {
    // sometimes it is useful to console log from mapStateToProps
    console.log(state)
    return {
      anecdotes: state.anecdotes,
      filter: state.filter
    }
  }

  const mapDispatchToProps = {
    votes,
    sort,
    setNotification,
    clear,
  }
  

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AnecdoteList)