import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {
  render() {
    const { greetingMessage } = this.props;
    const { id } = this.props.match.params;
    return (
      <div>
        <h2>Users</h2>
        <p> { greetingMessage }, My awesome Users component { id } </p>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    );
  }
};

export default Users;
