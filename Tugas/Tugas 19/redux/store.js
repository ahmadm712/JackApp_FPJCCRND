//file: Tugas19/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});