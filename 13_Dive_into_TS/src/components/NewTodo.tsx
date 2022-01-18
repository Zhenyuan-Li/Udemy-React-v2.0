import { useContext, useRef } from 'react';

import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

// const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
const NewTodo: React.FC = () => {
  const { addTodo } = useContext(TodosContext);
  const todoTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // Question mark: because the ref we set before is null when we use. (string | undefined)
    // ? make sure if the connection failed, enteredText will be stored null, instead of error.
    // On the other hand,
    // We know this function is only be called when the form is submitted, hence the ref will never be null
    // Exclamation mark: tell ts we 100% sure this will never be null. (string)
    const enteredText = todoTextRef.current!.value;
    if (enteredText.trim().length === 0) {
      // throw a error
      return;
    }

    addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
