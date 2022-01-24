import { Component } from 'react';
import classes from './User.module.css';

class User extends Component {
  componentWillUnmount() {
    // print three times, since there are three users
    console.log('User will unmount!');
  }

  render() {
    // this.props is inheritance from Component
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;
