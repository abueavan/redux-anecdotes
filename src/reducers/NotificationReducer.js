const notificationReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET':
            return action.notification
        case 'CLEAR':
            return null
        default:
            return state
    }
}

export const setNotification = (notification) => {
    return {
        type: 'SET',
        notification,
    }
}

export const clear = () => {
    return {
        type: 'CLEAR'
    }
}

export default notificationReducer

