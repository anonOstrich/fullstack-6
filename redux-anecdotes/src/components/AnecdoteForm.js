import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    props.createAnecdote(content)
    props.createNotification(`Lisäsit anekdootin '${content}'`)
    event.target.anecdote.value = ''
    setTimeout(() => props.resetNotification(), 5000)
  }
   
  return(<>
  <h2>create new</h2>
  <form onSubmit={handleSubmit}>
    <input type="text" name="anecdote"/>
    <button type="submit">create</button>
  </form>
  </>)
}




export default connect(null, {
  createAnecdote,
  createNotification,
  resetNotification
})(AnecdoteForm)