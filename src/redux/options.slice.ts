import { createSlice } from "@reduxjs/toolkit";

interface optionsState {
  img: string;
  color: { r: number; g: number; b: number };
  blur: number;
  opacity: number;
  saturation: number;
}

const optionsSlice = createSlice({
  name: "options",
  initialState: {
    img: "https://images.unsplash.com/photo-1621568670868-24a7dfc590e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    color: { r: 255, g: 100, b: 0 },
    blur: 5,
    opacity: 45,
    saturation: 125,
  },
  reducers: {
    changeImg: (state, action) => {
      state.img = action.payload;
    },
    changeColor: (state, action) => {
      state.color = action.payload;
    },
    changeBlur: (state, action) => {
      state.blur = action.payload;
    },
    changeOpacity: (state, action) => {
      state.opacity = action.payload;
    },
    changeSaturation: (state, action) => {
      state.saturation = action.payload;
    },
  },
});

export const getImg = (state: { options: optionsState }) => state.options.img;
export const getColor = (state: { options: optionsState }) =>
  state.options.color;
export const getBlur = (state: { options: optionsState }) => state.options.blur;
export const getOpacity = (state: { options: optionsState }) =>
  state.options.opacity;
export const getSaturation = (state: { options: optionsState }) =>
  state.options.saturation;

export const {
  changeImg,
  changeColor,
  changeBlur,
  changeOpacity,
  changeSaturation,
} = optionsSlice.actions;

export default optionsSlice.reducer;
