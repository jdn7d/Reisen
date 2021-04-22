import React from 'react'
import {removeDestinationAction} from '../redux/action'
import {connect} from 'react-redux'
import Destination from './Destination'

class DestinationsList extends React.Component {

    state = {
        increment: 1
    }

    handleChange = event => {
        this.setState({[event.target.title]: event.target.value})
      }


    renderDestinations = () => {
        return this.props.destinations.map(destination => {
            return <Destination increment={this.state.increment} destination={destination} callDispatch={this.callDispatch} />
        })
    }

    render() {
        return (
            <div className="list-container">
                <input type="number"
                    title="increment"
                    onChange={this.handleChange}
                    value={this.state.increment}
                    placeholder='1'
                /> 
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