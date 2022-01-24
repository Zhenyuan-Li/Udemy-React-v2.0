# Just Users (Class-based Components)

## Once upon a time..

### Function Components

Default and Most Modern Approach

### Class-based Components

In the past(React <br 16.8), it is required to use this to manage "State"

## Class-based Component Lifecyle

### 1) ComponentDidMount()

Called once component mounted (was evaluated & rendered) </br>
= **useEffect(..., [])**

### 2) ComponentDidUpdate()

Called once component updated (was evaluated & rendered) </br>
= **useEffect(..., [someValue])**

### 3) ComponentWillUnmount()

Called right before component is unmounted (remove from DOM) </br>
= **useEffect([] => { return () => {...}}, [someValue])**

## Comparison FC & CC

- Prefer functional components.
- Use class-based if
  - ...personal preference
  - working on an existing project or in a team where they r getting used
  - build an "Error Boundary" - See example in ErrorBoundary.js. If something crash, instead of showing error, gives user a different page
