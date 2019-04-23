import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props){
      super(props)
      this.state = {
        color: this.props.value
      }
    }

    switchColor = () => {console.log(this.state.color); return this.state.color ==="#F00" ? this.setState({color: "#333"}) : this.setState({color: "#F00"})};
    render(){
      return <div onClick={this.switchColor} style={{backgroundColor: this.state.color}}>BAT</div>
    }

}
