import { configureStore } from "@reduxjs/toolkit";
import Reducers from "./reducers";

const Store = configureStore({
    reducer: {
      cars: Reducers,
    }
  })


export default Store;