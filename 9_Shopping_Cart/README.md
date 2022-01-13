# Fancy Counter (Async Tasks with Redux)

## Intuitive

- Reducers must be pure, side-effect free, synchronous functions.
- Two option: </br>

  1. Inside the components (e.g. useEffect())</br>
     See Big giant useEffect in **App.js L20-61**. It is a way, but not good for me.

  2. Inside the action creators</br>
     - Thunk: A function that delays an action until later. An action creator function that does NOT return the action itself but another function which eventually returns the action.
     - A much better approach in this case. The logic is separate from component, much cleaner code. **App.js L64-68**
