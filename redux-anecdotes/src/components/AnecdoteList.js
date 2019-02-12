import React from 'react'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
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
  const anecdotes = props.store.getState().anecdotes

  const handleVoting = (anecdote) => () => {
    props.store.dispatch(voteForAnecdote(anecdote.id))
    props.store.dispatch(createNotification(`you voted '${anecdote.content}'`))
    setTimeout(() => props.store.dispatch(resetNotification()), 5000)
  }


  const shownAnecdotes = () => {
    return anecdotes.filter(a => a.content.toLowerCase().includes(props.store.getState().filter))
  }

  return(<>
  <h2>Anecdotes</h2>
  {shownAnecdotes().map(anecdote => (
    <div key={anecdote.id}>
      <Anecdote
      vote={handleVoting(anecdote)}
      anecdote={anecdote}/>
    </div>))}
  
  </>)
}


export default AnecdoteList