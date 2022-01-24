import { Component } from 'react';

import Users from './Users';
import ErrorBoundary from './ErrorBoundary';
import UsersContext from '../store/users-context';
import classes from './UserFinder.module.css';

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  componentDidMount() {
    // This could be a http request to fetch user
    this.setState({
      filteredUsers: this.context.users,
    });
  }

  componentDidUpdate(prevProps, prevStates) {
    // This shows why useEffect is more effective, we do not need to judge which states change
    if (prevStates.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  render() {
    return (
      <>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </>
    );
  }
}

export default UserFinder;
