const notificationReducer = (state = null, action) => {
    if(action.type === 'SET_NOTIFICATION'){
        return action.notification
    }
    return state
}


export const setNotification = (notification, timeout) => async (dispatch) => {
  dispatch({
    type: 'SET_NOTIFICATION',
    notification
  })
  await setTimeout(() => {dispatch({
    type: 'SET_NOTIFICATION',
    notification: null
  })}, 1000 * timeout)
}

export default notificationReducer