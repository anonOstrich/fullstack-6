const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      return { good: (state.good + 1),
      ok: state.ok,
      bad: state.bad }
    case 'OK':
      let {ok, ...rest} = state
      return {
        ok: ok + 1,
        ...rest
      }
    case 'BAD':
      let {bad, ...others} = state
      return {
        bad: bad + 1,
        ...others
      }
    case 'ZERO':
      return {
        good: 0,
        ok: 0,
        bad: 0
      }
    default: return state
  }

}

export default counterReducer
