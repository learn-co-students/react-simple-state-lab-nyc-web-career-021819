import React, { Component } from 'react'

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = { //setting the state
      color: this.props.value //initial state with a key of 'color' set to the 'value' prop
    }
  }

  click = () => { //click event
    this.setState({
      color: '#333' //change the state to this
    })
  }

  render() {
    return (
      <div
      className="cell"
      style={{backgroundColor: this.state.color}}
      onClick={this.click}
      ></div>
    )
  }

}
