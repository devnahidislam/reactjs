import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: this.props.counter.value
  };
  render() {
    const { count } = this.state;
    return (
      <div className ="moshCart">
        <h2><b>Cart:- {this.props.counter.id}</b></h2>
        <span className={this.getBadgeClass()}>{ this.formatCount() }</span>
        <button onClick={this.increment} disabled={count === 10 ? true : false} className="btn btn-info btn-sm">Increment</button>
        <button onClick={this.decrement} disabled={count === 0 ? true : false} className="btn btn-secondary btn-sm">Decrement</button>
        <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">Delete</button>
      </div>
    )
  };
    getBadgeClass() {
    const { count } = this.state;
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount() {
    const {count} = this.state;
    return count === 0 ? 'Zero' : count;
  };
  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  };
}
