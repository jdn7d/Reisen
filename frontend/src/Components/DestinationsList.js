import React from 'react'
import {removeDestinationAction} from '../redux/action'
import {connect} from 'react-redux'
import Destination from './Destination'

class DestinationsList extends React.Component {

    renderDestinations = () => {
        return this.props.destinations.map(destination => {
            return <Destination destination={destination} callDispatch={this.callDispatch} />
        })
    }


    render() {
        return (
            <div className="list-container">
                   {this.renderDestinations()}
            </div>
        )
    }
    
    callDispatch = destination => {
        this.props.removeDestination(destination)
    }
}



const mapDispatchToProps = dispatch => {
    return {
      removeDestination: destination => dispatch(removeDestinationAction(destination))
    }
}

export default connect(null, mapDispatchToProps)(DestinationsList)