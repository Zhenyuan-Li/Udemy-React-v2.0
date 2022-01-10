import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  // Object, always has current props.
  // Use only for read value. Leave the manipulating staff to React
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // We don't need the state to get access to user input (state-based solution)
  const enteredName = nameInputRef.current.value;
  const enteredUserAge = ageInputRef.current.value;

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredUserAge, enteredUserAge);
    // Important: Rarely do that !
    // Do not use ref to manipulate the DOM
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  // Solution 1: turn into array of Comp., and add key to each Comp.
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
