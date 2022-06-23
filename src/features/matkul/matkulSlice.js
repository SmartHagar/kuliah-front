/** @format */
import axios from "axios";

import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import base_url from "../../app/config";

export const getDataMatkul = createAsyncThunk("matkul/getData", async () => {
  const response = await axios.get(`${base_url}/matkul`);
  return response.data;
});

const matkulEntity = createEntityAdapter({
  selectId: (matkul) => matkul.id,
});

const matkulSlice = createSlice({
  name: "matkul",
  initialState: matkulEntity.getInitialState(),
  extraReducers: {
    [getDataMatkul.fulfilled]: (state, action) => {
      matkulEntity.setAll(state, action.payload);
    },
  },
});

export const matkulSelector = matkulEntity.getSelectors(
  (state) => state.matkul
);
export default matkulSlice.reducer;
