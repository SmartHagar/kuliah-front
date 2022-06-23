/** @format */

import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";

import { db } from "../../app/firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

export const getDataMhs = createAsyncThunk("mhs/getData", async () => {
  const data = await getDocs(collection(db, "mhs"));
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
});

const mhsEntity = createEntityAdapter({
  selectId: (mhs) => mhs.id,
});

const mhsSlice = createSlice({
  name: "mhs",
  initialState: mhsEntity.getInitialState(),
  extraReducers: {
    [getDataMhs.fulfilled]: (state, action) => {
      mhsEntity.setAll(state, action.payload);
    },
  },
});

export const mhsSelector = mhsEntity.getSelectors((state) => state.mhs);
export default mhsSlice.reducer;
