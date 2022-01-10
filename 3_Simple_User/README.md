# Simple User (Fragments, Portals, Refs)

## Limitation of JSX

- Cannot return more than one "root" JSX element. (Because of React.createElement) </br>
  Solution: Always Wrap Adjacent Element.
- Another problem: "div soup". In bigger app, tons of unnecessary div wrapper. </br>
  **Solution**: Using Wrapper Comp. **Wrapper.js**

## Fragment

It's an empty wrapper Component. </br>
It doesn't render any real HTML element to the DOM. But it fulfills React's/JSX requirement. **Wrapper.js**

## Portals

- Modal(Side-drawer, Dialogs...) Problem:
  Semantically and from a "Clean HTML" perspective, having a nested modal isn't ideal. It is an overlay to the entire page after all.</br>
  div with onClick event: work but not a good practice.
- **Solution**: Portal(render the modal at specific position in HTML).
  **index.html & ErrorModal.js**

## "ref": the second hook

- Allows us to get access to other DOM elements (Shorten the state-based input handler)
- Two way to handle the user input:

1. useRef() (uncontrolled component) **AddUser.js**
   Only use it to read the data. Never manipulate DOM directly using it.
2. state-based tracker (controlled component) **Git history: initial file**
