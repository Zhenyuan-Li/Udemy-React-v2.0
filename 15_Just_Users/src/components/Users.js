import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

class Users extends Component {
  // In class-based Comp., states are always Object!
  constructor() {
    super();
    this.state = {
      showUsers: true,
      // moreState: {}
    };
  }

  componentDidUpdate() {
    // In regular js, we use try and catch.
    if (this.props.users.length === 0) {
      throw new Error('No users provided');
    }
  }

  toggleUsersHandler() {
    this.setState((curState) => {
      return {
        showUsers: !curState.showUsers,
      };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
