import React, { Component } from 'react';

class Cell extends Component {
	constructor(props) {
		super(props);
		this.state = { color: this.props.value };
	}

	changeColor = () => {
		const newColor = '#333';
		this.setState({
			color: newColor
		});
	};

	render() {
		// console.log(this.props);
		return <div onClick={this.changeColor} className="cell" style={{ backgroundColor: this.state.color }} />;
	}
}

export default Cell;
