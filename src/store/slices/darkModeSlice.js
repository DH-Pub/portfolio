import { createSlice } from "@reduxjs/toolkit";

const uiMode = "uiMode";
const lightMode = "light";
const darkMode = "dark";
function getMode() {
  if (localStorage.getItem(uiMode)) {
    return localStorage.getItem(uiMode);
  }
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return darkMode;
  }
  return lightMode;
}

const uiModeSlice = createSlice({
  name: uiMode,
  initialState: {
    mode: getMode(uiMode),
  },
  reducers: {
    setMode: (state, action) => {
      const mode = action.payload;
      localStorage.setItem(uiMode, mode);
      state.mode = mode;
    },
    clearMode: (state) => {
      localStorage.removeItem(uiMode);
      state.mode = lightMode;
    },
  },
});

export const { setMode, clearMode } = uiModeSlice.actions;
export const uiModeReducer = uiModeSlice.reducer;

export const selectUiMode = (state) => state.uiMode.mode;
