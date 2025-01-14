import themeModeSlice from "@app/store/themeMode";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    darkMode: themeModeSlice,
  },
});

export default store;
