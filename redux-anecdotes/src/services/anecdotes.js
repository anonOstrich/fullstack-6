import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const result = await axios.get(baseUrl)
  return result.data
}

const createNew = async (content) => {
  const newAnecdote = {content, votes: 0}
  const result = await axios.post(baseUrl, newAnecdote)
  return result.data
}


const incrementVotes = async (anecdote) => {
  const result = await axios.put(`${baseUrl}/${anecdote.id}`, {...anecdote, votes: anecdote.votes + 1})
  return result.data
}

export default {
  getAll,
  createNew,
  incrementVotes
}