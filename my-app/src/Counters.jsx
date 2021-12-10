import React, { Component } from 'react';
import Counter from './Counter';

export default class Counters extends Component {
  state = {
    counters: [
      { id:1, value:0 },
      { id:2, value:0 },
      { id:3, value:0 }
    ]
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters})
  };
  render() {
    return (
      <div>
        <button className="btn btn-primary btn-sm">Reset</button>
        {this.state.counters.map(counter => (<Counter key={counter.id} onDelete={this.handleDelete} counter={counter} />))}
      </div>
    )
  }
}
