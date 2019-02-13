import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const handleSubmit = async (event) => {
    event.preventDefault()
    const anecdoteField = event.target.anecdote
    const content = anecdoteField.value
    props.createAnecdote(content)
    props.setNotification(`Lisäsit anekdootin '${content}'`, 5)
    anecdoteField.value = ''
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
  setNotification
})(AnecdoteForm)