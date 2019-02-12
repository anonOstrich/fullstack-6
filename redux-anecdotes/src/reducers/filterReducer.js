const filterReducer = (state='', action) => {
    switch(action.type){
        case 'FILTER':
            return action.filter.toLowerCase()
        default:
            return state
    } 
}

export const createFilter = (filter) => {
    return {
        type: 'FILTER',
        filter: filter
    }
}

export default filterReducer