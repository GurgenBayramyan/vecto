import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IEffectsSliceInitialState } from "../../types";

const initialState: IEffectsSliceInitialState = {
    showOpacityBg: false,
    isVideoPlaying: false,
    isOpenInfoModal: false,
};

export const effectSlice = createSlice({
    name: "effects",
    initialState,
    reducers: {
        setBg: (state, { payload }: PayloadAction<boolean>) => {
            state.showOpacityBg = payload;
        },
        setPlaying: (state, { payload }: PayloadAction<boolean>) => {
            state.isVideoPlaying = payload;
        },
        setInfoModal: (state, { payload }: PayloadAction<boolean>) => {
            state.isOpenInfoModal = payload;
        },
    },
});

export const { setBg, setPlaying, setInfoModal } = effectSlice.actions;
