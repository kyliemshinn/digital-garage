// import { configureStore } from "@reduxjs/toolkit";
// import Reducers from "./reducers";

// const Store = configureStore({
//     reducer: {
//       cars: Reducers,
//     }
//   })


// export default Store;

// Creates a Redux store that holds the state of the app. Only one store should exist.
import { createStore } from 'redux';

// Importing the reducer file that is mostly unchanged
import reducers from './reducers';

export default createStore(reducers);
