import React, { useEffect } from 'react';
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initializeAnecdotes  } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdotes'
import { connect } from 'react-redux'

const App = (props) => {

  useEffect(() => {
    anecdoteService.getAll()
    .then(anecdotes => props.initializeAnecdotes(anecdotes))
  }, [])
    
  return (
    <div>
      <h1>Programming anecdotes</h1>
      <Notification/>
      <AnecdoteForm/>
      <Filter />
      <AnecdoteList/>
    </div>
    
  )
}

export default connect(null, {
  initializeAnecdotes
})(App)
