import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  showOpacityBg: false,
};

export const effectSlice = createSlice({
  name: "effects",
  initialState,
  reducers: {
    setOpacityBg: (state, { payload }: PayloadAction<boolean>) => {
      state.showOpacityBg = payload;
    },
  },
});

export const { setOpacityBg } = effectSlice.actions;
