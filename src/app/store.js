/** @format */

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import matkulReducer from "../features/matkul/matkulSlice";
import penilaianReducer from "../features/penilaian/penilaiainSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    matkul: matkulReducer,
    penilaian: penilaianReducer,
  },
});
