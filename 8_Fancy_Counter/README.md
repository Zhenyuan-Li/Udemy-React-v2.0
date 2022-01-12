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
