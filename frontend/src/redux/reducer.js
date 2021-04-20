const defaultState = {
    destinations: []
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case "SET_DESTINATIONS":
            console.log(action.payload)
            return {...state, destinations: action.payload}
        case "ADD_DESTINATION":
            console.log(action.payload)
            return {...state, destinations: [...state.destinations, action.payload]}
         
                  //when dispatching we are overriding current state
        case "REMOVE_DESTINATION":
            return {...state, destinations: state.destinations.filter(destination => destination !== action.payload)}
        default: 
            return state
    }
}

export default reducer