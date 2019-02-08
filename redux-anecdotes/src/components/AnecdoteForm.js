import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
   
  return(<>
  <h2>create new</h2>
  <form onSubmit={(event) => {
    event.preventDefault()
    props.store.dispatch(createAnecdote(event.target.anecdote.value))
    event.target.anecdote.value = ''
  }}>
    <input type="text" name="anecdote"/>
    <button type="submit">create</button>
  </form>
  </>)
}

export default AnecdoteForm