import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { uiModeReducer, setMode, clearMode, selectUiMode } from "./slices/darkModeSlice";

export const store = configureStore({
  reducer: {
    uiMode: uiModeReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat();
  },
  // devTools: true,
});

setupListeners(store.dispatch);

export { setMode, clearMode, selectUiMode };
