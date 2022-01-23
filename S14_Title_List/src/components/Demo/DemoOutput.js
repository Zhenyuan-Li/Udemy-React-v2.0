import React from 'react';

import MyParagraph from './MyParagraph';

function DemoOutput(props) {
  const { show } = props;
  // This will run when states in App changes
  console.log('DemoOutput RUNNING');

  // Props is the reason why not the entire component rerendered
  return <MyParagraph>{show ? 'This is new!' : ''}</MyParagraph>;
}

// Only the props(show) changed in App, the component will re-evaluate
export default React.memo(DemoOutput);

// React does:
// props.show === props.previous.show (primitive types)
