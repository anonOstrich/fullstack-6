
const notificationReducer = (state = null, action) => {
    if(action.type === 'SET_NOTIFICATION'){
        return action.notification
    }
    return state
}


export const createNotification = (notification) => {
    return {
      type: 'SET_NOTIFICATION',
      notification: notification
    }
  }

export const resetNotification = () => ({type: 'SET_NOTIFICATION', notification: null})

export default notificationReducer