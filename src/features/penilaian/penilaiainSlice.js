/** @format */
import axios from "axios";

import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import base_url from "../../app/config";

//  remove / from pathName
// const path = pathName.pathname.replace("/", "");

export const getDataPenilaian = createAsyncThunk(
  "penilaian/getData",
  async (matkul) => {
    const response = await axios.get(`${base_url}/nilai/${matkul}`);
    const data = response.data;
    // sort data by student.name
    data.sort((a, b) => {
      if (a.student.NPM < b.student.NPM) {
        return -1;
      }
      if (a.student.NPM > b.student.NPM) {
        return 1;
      }
      return 0;
    });

    return data;
  }
);

const penilaianEntity = createEntityAdapter({
  selectId: (penilaian) => penilaian.id,
});

const penilaianSlice = createSlice({
  name: "penilaian",
  initialState: penilaianEntity.getInitialState(),
  extraReducers: {
    [getDataPenilaian.fulfilled]: (state, action) => {
      penilaianEntity.setAll(state, action.payload);
    },
  },
});

export const penilaianSelector = penilaianEntity.getSelectors(
  (state) => state.penilaian
);
export default penilaianSlice.reducer;
