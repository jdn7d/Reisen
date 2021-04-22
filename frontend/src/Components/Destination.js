
import React from 'react'

export default class Destination extends React.Component {

    state = {
        likes: 0,
        increment: 1
    }

    handleClick = () => {
      console.log(this.state.likes)
        console.log(this.state.increment)
        this.setState({likes: this.state.likes + this.state.increment})
       
    }

    handleChange = event => {
      this.setState({[event.target.title]: event.target.value})
    }
 
    
    render() {
        return (
          <div className="destination">
            <input type="text"
            title="increment"
            onChange={this.handleChange}
            value={this.state.increment}
            placeholder='1'
            /> 
            <p onClick={() => this.props.callDispatch(this.props.destination)}>{this.props.destination.city}, {this.props.destination.country} <br></br>Dates: {this.props.destination.date} <br></br>Activities: {this.props.destination.activities} </p>
           

            <button onClick={this.handleClick}> {this.state.likes} </button>
          </div>
        )
    }
}