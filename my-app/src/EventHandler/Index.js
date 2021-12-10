import React, { Component } from 'react';

export default class EventHandler extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       changedValue: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      changedValue: e.target.value
    }, () => {
      console.log(e.target.value);
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <p>{this.state.changedValue}</p>
      </div>
    )
  }
}
