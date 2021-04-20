
import React from 'react'
import { connect } from 'react-redux'
import {addDestinationAction, postDestinationsAction} from '../redux/action'

class Form extends React.Component {

  state = {
    city: '',
    country: '',
    date: '',
    activities: ''
  }

  handleChange = event => {
    this.setState({[event.target.title]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({city: '', country: '', date: '', activities: ''})
    this.props.adddestinations(this.state)
    this.props.postDestinations(this.state)
  }

  render() {
    return (

      <form id="destinations-form" onSubmit={this.handleSubmit}>

        <input type="text"
        title="city"
        onChange={this.handleChange}
        value={this.state.city}
        placeholder='city'
        />    
        <br></br>
        <input type="text"
        title="country"
        onChange={this.handleChange}
        value={this.state.country}
        placeholder='country'
        />
        <br></br>
        <input type="text"
        title="date"
        onChange={this.handleChange}
        value={this.state.date}
        placeholder='date'
        />
        <br></br>
        <input type="textarea"
        title="activities"
        onChange={this.handleChange}
        value={this.state.activities}
        placeholder='activities'
        />
        <br></br>
        <input type="submit"
        value="Add Destination"
        />

      </form>

    )
  }

}

//dispatch sends info to the reducer

const mapStateToProps = (state) => {
  const {destinations} = state
  console.log(destinations)
  return {destinations}
}

const mapDispatchToProps = dispatch => {
  return {
    adddestinations: (newDestinations) => dispatch(addDestinationAction(newDestinations)),
    postDestinations: (newDestinations) => dispatch(postDestinationsAction(newDestinations))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)