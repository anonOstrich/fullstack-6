import React from 'react'
import { voteForAnecdote } from '../reducers/anecdoteReducer'


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
  const store = props.store

  return(<>
  <h2>Anecdotes</h2>
  {store.getState().map(anecdote => (
    <div key={anecdote.id}>
      <Anecdote
      vote={() => {store.dispatch(voteForAnecdote(anecdote.id))}}
      anecdote={anecdote}/>
    </div>))}
  
  </>)
}


export default AnecdoteList