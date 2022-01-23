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
