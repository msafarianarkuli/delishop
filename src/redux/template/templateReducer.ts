import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";
import {RootState} from "redux/store";

interface ITemplateReducer {
  isDrawerOpen: boolean;
}

const initialState: ITemplateReducer = {
  isDrawerOpen: false,
};

const templateReducer = createSlice({
  name: "template",
  initialState,
  reducers: {
    setIsDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.isDrawerOpen = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.template,
      };
    },
  },
});

const {reducer, actions} = templateReducer;

export const selectIsDrawerOpen = (state: RootState) => state.template.isDrawerOpen;

export const {setIsDrawerOpen} = actions;

export default reducer;
