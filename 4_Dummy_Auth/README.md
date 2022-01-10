# Dummy Auth (Effects, Reducers, Context)

## Effect - The Third Hook

### 1. What are the side effects? Anything Else

Tasks happen outside of the normal component evaluation and render cycle.</br>
Since they might block, delay rendering.(might occur infinite loop)

- Store Data in Browser Storage
- Send HTTP request to Backend Servers
- Set & Manage Timers ....

#### 2. Use Examples

1. **No dependency**: never do that. useEffect() is useless, since the inner function will run every re-render.
2. **Empty dependency []**: only run once, when the app starts up (like componentDidMount()). App.js
3. **Normal case [usrId, age]** Add all "things" you use in your effect function if those "things" could change because your component (or some parent component) re-rendered. Login.js
4. **Bouncing case & cleanup function** See Login.js L48-64 for details.

## Reducer - The Forth Hook

### 1. Background

- When the states are complex (multiple states, multiple ways of changing it). useState() might be hard or error-prone to use.
- Some states are related (email & isValid)
- useReducer() more powerful state management (To avoid buggy, inefficient code).

### 2. Use Examples

**Login.js**

- Reducer function could be in a separate file (unrelated with rendering component)
- Two ways to optimise the useEffect (decrease unnecessary run):</br>
  a) Debouncing: use setTimeout and cleanup function to reduce the frequent call (input field updates in every key stroke). </br>
  b) Deconstruction: if use reducer, deconstruct the state and give them new name added to dependency

## Context API

### 1. Background

- props: most cases to configure comp. useContext() if the transfer level is too deep.

### 2. Example

### 3. Limitation

- React Context is not optimized for high frequency changes!
- Better tool: Redux
- React Context shouldn't be used to replace all component communication & props. </br>
  Component should still be configurable via props and short 'props chain' might not need any replacement.

## Rules of Hooks

1. Only call React Hooks in **React Functions**.
2. Only call React Hooks at the **Top Level**.
3. ALWAYS add everything you refer to inside of useEffect as a dependency!

## Rules of Hooks

Mystery Stuff: **Input.js** React.forwardRef, useImperativeHandle()
