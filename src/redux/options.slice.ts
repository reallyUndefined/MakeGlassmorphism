import { createSlice } from "@reduxjs/toolkit";

interface optionsState {
  img: string;
  color: string;
  blur: number;
  opacity: number;
  saturation: number;
}

const optionsSlice = createSlice({
  name: "options",
  initialState: {
    img: "https://images.unsplash.com/photo-1542827634-7aa7281fb965?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    color: "#4554ab",
    blur: 12,
    opacity: 50,
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
