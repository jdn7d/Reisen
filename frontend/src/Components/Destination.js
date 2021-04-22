
import React from 'react'

export default class Destination extends React.Component {

  

    state = {
        likes: 0
    }

    handleClick = () => {
      const incrementNum = parseInt(this.props.increment, 10)
      this.setState({likes: this.state.likes + incrementNum})
    }

  
    
    render() {
        return (
          <div className="destination">
        
            <p onClick={() => this.props.callDispatch(this.props.destination)}>{this.props.destination.city}, {this.props.destination.country} <br></br>Dates: {this.props.destination.date} <br></br>Activities: {this.props.destination.activities} </p>
           

            <button onClick={this.handleClick}> {this.state.likes} </button>
          </div>
        )
    }
}