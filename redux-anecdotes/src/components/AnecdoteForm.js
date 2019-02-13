import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification, resetNotification } from '../reducers/notificationReducer'
import anecdoteServer from '../services/anecdotes'

const AnecdoteForm = (props) => {

  const handleSubmit = async (event) => {
    event.preventDefault()
    const anecdoteField = event.target.anecdote
    const content = anecdoteField.value
    const newAnecdote = await anecdoteServer.createNew(content)
    props.createAnecdote(newAnecdote)
    props.createNotification(`Lisäsit anekdootin '${content}'`)
    anecdoteField.value = ''
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