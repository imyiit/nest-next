import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isDark: true,
};

const reducer = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.isDark = !state.isDark;
    },
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.isDark = action.payload;
    },
  },
});

export const { changeTheme, setTheme } = reducer.actions;

export default reducer.reducer;
