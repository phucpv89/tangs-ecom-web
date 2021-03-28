import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "src/pages/LandingPageContainer/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
