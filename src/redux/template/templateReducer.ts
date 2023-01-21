import {createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";

interface ITemplateReducer {
  isOpenDrawer: boolean;
}

const initialState: ITemplateReducer = {
  isOpenDrawer: false,
};

const templateReducer = createSlice({
  name: "template",
  initialState,
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.template,
      };
    },
  },
});

const {actions, reducer} = templateReducer;

export default reducer;
