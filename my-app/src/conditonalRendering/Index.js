import React, { Component } from 'react';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

export default class Rendering extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      isLoggedIn: false
    }
  }
  
  render() {
    let { isLoggedIn } = this.state;
    return (
      <div>
        {isLoggedIn ? <HomePage /> : <LoginPage />}
      </div>
    )
  }
}
