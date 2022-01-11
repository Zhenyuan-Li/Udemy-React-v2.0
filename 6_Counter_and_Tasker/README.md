# Counter & Tasker (Custom Hooks)

## Introduction

- Outsource stateful logic into re-usable functions. </br>
  Unlike "regular functions", custom hooks can use other React hooks and React state.
- Use customized hook does not mean we share state or effects across components. Just share the logic, not concrete state.

## Intuitive Example: Counter

- The only difference of Backward and forward is + and -. Use custom hook to get rid of code duplication.
- Always name hook with 'use-xx.js'
- Return the needed var, and accepted needed var like normal functions. **use-counter.js**

## Realistic Example: Tasker

- Both HTTP request feature has similar pattern (**fetchTasks() in App.js** & **enterTaskHandler() in NewTask.js**) </br>
  isLoading, error, send request logic...</br>
  But since both of them involves hooks (useState, useEffect), normal function to remove duplication can not work.
- useHttp customized hooks is a very typical customized hook example.

### Two way to avoid infinite loop

1. Wrap with useCallback().
   - Like stated in the previous, when **useEffect() in App.js**, we need to add fetchTasks() into dependency. But **sendRequest() in use-http.js** is depended on **transformTasks() in App.js**, which means infinite re-render loop exits.
   - To fix it, kind of a bottom-up approach:
     1. Wrap useCallback at **transformTasks()**(it depends on nothing)
     2. Wrap useCallback at **sendRequest()**, and add applyData to its dependency.
     3. add fetchTasks to useEffect() dependency.
   - Personally, it is the most complicated way, but it reserve the flexibility of customized hook.
2. Move received para down to return function.
   In this case, **requestConfig** is moved from **useHttp()** into **sendRequest()**. So useEffect() does not depend on that.
   </br> In this case, it is the better option, even applyData can be moved down to Comp.
