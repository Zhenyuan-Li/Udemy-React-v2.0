# Fancy Counter (Intro to Redux)

A state management system for cross-component or app-wide state.

## Why not React Context (Its Disadvantages)

### Complex Setup / Management:

- In more complex apps, managing React Context can lead to deeply nested JSX code and or huge "Context Provider" component.</br>
  Another words: Tons of Provider Wrap-up(AllContextProvider). It is OK for small project.

### Performance: Confirmed React Dev Team.

- React Context is not optimized for high-frequency state changes.</br>
  Small Update like Auth, Theme... useContext() is capable. But high frequency update is not suitable.

## How Redux works

![Core Redux Concept]('./public/1_Core-Redux.png')

## Examples

### Create store (./src/store/index.js)

### Connect with React App

- In this case, we wrap the App(index.js) at the highest level. Since we want a globalized state.
- Get access to store data, useSelector(); Dispatch Action, useDispatch() **Counter.js**
- Update all the state for each action. Never mutate the state, instead overwrite it with the new state object.
- Redux toolkit is AWESOME, see the example on **Auth.js, Header.js**
