# Title List (React Behind the scene & Optimization)

## How React works?

### React

"A JavaScript library for building user interfaces" </br>
React determines how the component tree **currently looks like** and what it should look like. </br>
Component:

- Props: data from parent component
- State: internal data
- Context: Component-wide data

### React DOM

Interface to the web. What the user see. </br>
ReactDOM receives rge differences (i.e. required changes and then manipulates the real DOM)

### Re-evaluating Components !== Re-rendering the DOM

Components:

- Re-evaluated whenever props, state or context changes
- React executes component functions</br>

Real DOM:

- Changes to the real DOM are only made for differences between evaluation

## Example on Re-evaluation (React.memo() & useCallback())

### Shortage and solution:

- Total Waste: All children will be re-evaluated when states in App are updated.
  See example in **App.js**
- Optimise solution: React.memo() - preventing the unnecessary re-evaluation</br>
  Re-evaluation will be skipped if the unrelated state in App changes (only the props in children changes will cause the re-evaluation).
- Why not use it everywhere? It comes with cost.

  - Trade-off between the re-evaluating the component and the performance cost of comparing props.
  - Use-cases: when the component tree is huge withe a lot of child components, and on a high level in the component tree, we can avoid unnecessary re-render cycles for entire branch of the component tree.(Button, DemoOutput, MyParagraph

- **But**, it does not always work (when props are not primitive type). See example in Button.js

- useCallback(): store a function across component executions. (store a function and re-use it). **And** recreate the function when the dependencies changes
  - Dependencies: **Closure**, see example in App.js, allowToggleHandler and toggleParagraph handler
  1. Click Allow Toggle, app run and two button run
  2. Click Show paragraph, app, demoOutput, MyParagraph, button (only one, since useCallback ensure the toggleParagraph will not be rendered)

## State Updates & Schedule

- See images in public folder
- When re-execute the function, useState() will also be called. But React make the state will not be initialized again (only once) after that will be updated.
- Because of scheduling, two set state function will not be execute one by one. It will also not be called twice because of batching. So get the latest state based on previous state.

### useMemo()

- See examples pm DemoList & Title in App
- Sorting is performance intensive in DemoList, useMemo() to add this function. Also add it in app.js

## useMemo() & useCallback()

- useMemo focuses on avoiding heavy calculation.

- useCallback focuses on a different thing: it fixes performance issues when inline event handlers like _onClick={() => { doSomething(...); }_ cause _PureComponent_ child re-rendering (because function expressions there are referentially different each time)

- This said, useCallback is closer to useRef, rather than a way to memoize a calculation result.
  - useMemo is to memoize a calculation result between a function's calls and between renders
  - useCallback is to memoize a callback itself (referential equality) between renders
  - useRef is to keep data between renders (updating does not fire re-rendering)
  - useState is to keep data between renders (updating will fire re-rendering)
