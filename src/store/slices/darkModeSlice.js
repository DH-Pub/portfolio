import { createSlice } from "@reduxjs/toolkit";

const uiMode = "uiMode";
const lightMode = "light";
// const darkMode = "dark";
function decodeValue() {
  if (localStorage.getItem(uiMode)) {
    return JSON.parse(localStorage.getItem(uiMode));
  }
  return lightMode;
}

const uiModeSlice = createSlice({
  name: uiMode,
  initialState: {
    state: decodeValue(uiMode),
  },
  reducers: {
    setMode: (state, action) => {
      const mode = action.payload;
      localStorage.setItem(uiMode, mode);
      state = mode;
    },
    clearMode: (state) => {
      localStorage.removeItem(uiMode);
      state = lightMode;
    },
  },
});

export const { setMode, clearMode } = uiModeSlice.actions;
export const uiModeReducer = uiModeSlice.reducer;
