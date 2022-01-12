import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

// // Past is the past, we don't do this anymore
// export const INCREMENT = 'increment';
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'increment':
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };
//     case 'increase':
//       return {
//         counter: state.counter + action.amount,
//         showCounter: state.showCounter,
//       };
//     case 'decrement':
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };
//     case 'toggle':
//       return {
//         counter: state.counter,
//         showCounter: !state.showCounter,
//       };
//     default:
//       return { counter: state.counter };
//   }
// };
// const store = createStore(counterReducer);
