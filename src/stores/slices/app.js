import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
  pageTitle: "menu-dashboard",
};

export const appslice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoadingAction: (state = initialState, { payload }) => {
      return {
        ...state,
        visible: payload,
      };
    },
    setPageTitle: (state = initialState, { payload }) => {
      return {
        ...state,
        pageTitle: payload,
      };
    },
  },
});
