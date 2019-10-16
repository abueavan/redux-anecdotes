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

export const setNotification = (notification, seconds) => {
    return  dispatch => {
        dispatch({
            type: 'SET',
            notification,
        })
        setTimeout(() => {
            dispatch({
                type: 'CLEAR'
            })
        }, seconds * 1000)
    }
}


export default notificationReducer

