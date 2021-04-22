
export function fetchDestinationsAction() {
    return (dispatch) => {
      fetch('http://localhost:3000/destinations')
        .then(res => res.json())
        .then(destinations => {
            dispatch(setDestinationsAction(destinations))
            console.log(destinations)
            }
        )
  }
}

export function postDestinationsAction(destination) {
  console.log(destination)
  return (dispatch) => { 
    fetch('http://localhost:3000/destinations', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(destination)
    })
    .then(res => res.json())
    .then(destination => {
      dispatch({type: "ADD_DESTINATION", payload: destination})
    })
}}

export function removeDestinationAction(destination) {
  console.log(destination.id)
  return(dispatch) => {
    dispatch({type: "REMOVE_DESTINATION", payload: destination})
    fetch('http://localhost:3000/destinations/' + destination.id, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    })
    .then(res => res.json())
    .then(destination => {
      dispatch({type: "REMOVE_DESTINATION", payload: destination})
    })
    
}}

export const setDestinationsAction = destinations => {
  console.log("action")
  return {
    type: "SET_DESTINATIONS",
    payload: destinations
  }
}

export const addDestinationAction = newDestination => {
  console.log(newDestination)
  return {
    type: "ADD_DESTINATION",
    payload: newDestination
  }
}

