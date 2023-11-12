import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IEffectsSliceInitialState } from "../types";

const initialState: IEffectsSliceInitialState = {
  showOpacityBg: false,
  isVideoPlaying: false,
};

export const effectSlice = createSlice({
  name: "effects",
  initialState,
  reducers: {
    setOpacityBg: (state, { payload }: PayloadAction<boolean>) => {
      state.showOpacityBg = payload;
    },
    setVideoPlaying: (state, { payload }: PayloadAction<boolean>) => {
      state.isVideoPlaying = payload;
    },
  },
});

export const { setOpacityBg, setVideoPlaying } = effectSlice.actions;
