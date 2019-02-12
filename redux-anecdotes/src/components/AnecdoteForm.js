import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const store = props.store

  const handleSubmit = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    store.dispatch(createAnecdote(content))
    store.dispatch(createNotification(`Lisäsit anekdootin '${content}'`))
    event.target.anecdote.value = ''
    setTimeout(() => store.dispatch(resetNotification()), 5000)
  }
   
  return(<>
  <h2>create new</h2>
  <form onSubmit={handleSubmit}>
    <input type="text" name="anecdote"/>
    <button type="submit">create</button>
  </form>
  </>)
}

export default AnecdoteForm