import React from 'react';
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = (props) => {
  const store = props.store
    
  return (
    <div>
      { store.getState().notification === null ? 
      <></>
      : <Notification store={store} />
      }
      <AnecdoteForm store={store}/>
      <Filter store={store} />
      <AnecdoteList store={store}/>
    </div>
  )
}

export default App
