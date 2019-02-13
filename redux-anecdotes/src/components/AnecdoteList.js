import React from 'react'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'


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
    props.voteForAnecdote(anecdote)
    props.setNotification(`you voted '${anecdote.content}'`, 5)
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
  setNotification
}




export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)