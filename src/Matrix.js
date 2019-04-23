import React, { Component } from 'react';
import Cell from './Cell.js';

export default class Matrix extends Component {
	genRow = (vals) => vals.map((val) => <Cell value={val} />);

	genMatrix = () => this.props.values.map((rowVals) => <div className="row">{this.genRow(rowVals)}</div>);

	render() {
		return (
			<div id="matrix">
				{console.log(this.props.values)}
				{console.log(this.genMatrix())}
				{this.genMatrix()}
			</div>
		);
	}
}

Matrix.defaultProps = {
	values: [
		[ '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
		[ '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
		[ '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
		[ '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
		[ '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
		[ '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
		[ '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
		[ '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
		[ '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
		[ '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ]
	]
};
