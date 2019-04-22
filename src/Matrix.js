import React, { Component } from 'react';
import Cell from './Cell.js'
import { defaultPattern } from './data.js'

class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => <Cell value={val}/> ) // replace me and render a cell component instead!
    // <div className="cell"></div>
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    console.log(defaultPattern)
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: defaultPattern
}

export default Matrix
