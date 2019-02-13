import React from 'react'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import { createNotification, resetNotification } from '../reducers/notificationReducer'


const Anecdote = ({vote, anecdote}) => {
  
  return(<>
    <div>
      {anecdote.content}
    </div>
    <div>
      has {anecdote.votes} votes
      <button onClick={vote}>vote</button>
    </div>
    </>
  )
}



const AnecdoteList = (props) => {
  const handleVoting = (anecdote) => () => {
    props.voteForAnecdote(anecdote.id)
    props.createNotification(`you voted '${anecdote.content}'`)
    setTimeout(() => props.resetNotification(), 5000)
  }

  return(<>
  <h2>Anecdotes</h2>
  {props.anecdotesToDisplay.map(anecdote => (
    <div key={anecdote.id}>
      <Anecdote
      vote={handleVoting(anecdote)}
      anecdote={anecdote}/>
    </div>))}
  
  </>)
}


const anecdotesToDisplay = (state) => {
  return state.anecdotes
        .filter(a => a.content.toLowerCase().includes(state.filter))
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    anecdotesToDisplay: anecdotesToDisplay(state),
  }
}

const mapDispatchToProps = {
  voteForAnecdote,
  createNotification,
  resetNotification,
}




export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)