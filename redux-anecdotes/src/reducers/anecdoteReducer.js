
const reducer = (state = [], action) => {
  switch(action.type){
    case 'VOTE':
    const id = action.data.id
    return state.map(anecdote => {

      return (anecdote.id === id) ? {
        id: anecdote.id,
        content: anecdote.content,
        votes: anecdote.votes + 1
      } : anecdote
    })
      .sort((a1, a2) => (a2.votes - a1.votes))
    case 'CREATE':
      return [...state, action.data]
    case 'INITIALIZE_ANECDOTES':
      return [...action.data]
    default: 
      return state
  }
}

export const voteForAnecdote = (id) => ({
  type: 'VOTE',
  data: {id}
})

export const createAnecdote = (data) => ({
  type: 'CREATE',
  data
})

export const initializeAnecdotes = (data) => ({
  type: 'INITIALIZE_ANECDOTES',
  data
})

export default reducer