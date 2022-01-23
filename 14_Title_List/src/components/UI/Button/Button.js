import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log('Button RUNNING');

  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// Even this, it will still be rendered, because the click handler function is re-execute
export default React.memo(Button);

// React does:
// props.toggleParagraphHandler !== props.previous.toggleParagraphHandler
// object or array comparison is not the same even they have the same value
// Tricky memory allocated
// Solution: useCallback()
