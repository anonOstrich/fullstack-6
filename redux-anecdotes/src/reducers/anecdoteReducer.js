import anecdoteService from '../services/anecdotes'

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
      return [...action.data].sort((a1, a2) => (a2.votes - a1.votes))
    default: 
      return state
  }
}

export const voteForAnecdote = (anecdote) => async (dispatch) => {
  const result = await anecdoteService.incrementVotes(anecdote)

  dispatch({
    type: 'VOTE',
    data: {id: anecdote.id}
  })

}

export const createAnecdote = (data) => async (dispatch) => {

  const result = await anecdoteService.createNew(data)
  dispatch({
    type: 'CREATE',
    data: result
  })
}

export const initializeAnecdotes = () =>  async (dispatch) => {

  const data = await anecdoteService.getAll()

  dispatch({
    type: 'INITIALIZE_ANECDOTES',
    data
  })
}



export default reducer