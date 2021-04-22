import React from 'react'
import DestinationsList from './DestinationsList'
import {connect} from 'react-redux'
import {fetchDestinationsAction} from '../redux/action'

class Destinations extends React.Component {
    

    componentDidMount() {
       this.props.fetchDestinations()
    }

    render() {
        return (
            <div className="list">
                <h1>
                    Cities I've Visited
                </h1>
                
                <DestinationsList destinations={this.props.destinations} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {destinations: state.destinations}
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDestinations: () => dispatch(fetchDestinationsAction()),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Destinations)
