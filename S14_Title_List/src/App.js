import React, { useState, useCallback, useMemo } from 'react';

import Button from './components/UI/Button/Button';
import DemoList from './components/Demo/DemoList';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const [listTitle, setListTitle] = useState('My List');

  // First shows up: initial loading the page
  // Second shows up: click the button (find the diff -> ReactDOM rerender the DOM)
  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);
  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  // Only diff will be rendered, not the entire component.
  // In DemoOutput, the <p> tag is always there, only the text is conditionally rendered
  // But if we assign a constant false to show, even the text in <p> are not rendered,
  // the children will still be re-evaluated when click the button since the state change.
  // That's why: Re-evaluating Components !== Re-rendering the DOM
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      {/* <DemoOutput show={false} /> */}
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Show paragraph</Button>
      <hr />
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
