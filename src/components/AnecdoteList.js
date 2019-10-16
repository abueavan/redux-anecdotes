import React from 'react'
import{ connect } from 'react-redux'
import { votes, sort } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/NotificationReducer'


const AnecdoteList = (props) => {

  const vote = (id) => {
    console.log('vote', id)
    const votedAnecodte = props.anecdotesToShow.find(anecdote => anecdote.id === id)
    props.votes(votedAnecodte)
    props.sort()
    props.setNotification(`you have voted '${votedAnecodte.content}'`, 10)
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {props.anecdotesToShow.map(anecdote =>
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

const anecdotesToShow = ({ anecdotes, filter, notification}) => {
    return anecdotes.filter(anecdote => anecdote.content.match(RegExp(filter,'i')))
}

const mapStateToProps = (state) => {
    // sometimes it is useful to console log from mapStateToProps
    console.log(state)
    return {
      anecdotesToShow: anecdotesToShow(state)
    }
  }

  const mapDispatchToProps = {
    votes,
    sort,
    setNotification,
  }
  

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AnecdoteList)