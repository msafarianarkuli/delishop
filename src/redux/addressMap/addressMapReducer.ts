import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";
import {IGetAddressFromMapRes} from "api/getAddressFromMap";
import {IMapPoint} from "components/map/Map";
import {RootState} from "redux/store";

interface IAddressMapReducer {
  location?: IMapPoint | null;
  locationData?: IGetAddressFromMapRes | null;
}

const initialState: IAddressMapReducer = {
  location: null,
  locationData: null,
};

const addressMapReducer = createSlice({
  name: "addressMap",
  initialState,
  reducers: {
    setAddressMap: (state, action: PayloadAction<IAddressMapReducer>) => {
      state.locationData = action.payload.locationData;
      state.location = action.payload.location;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.addressMap,
      };
    },
  },
});

const {reducer, actions} = addressMapReducer;

export const {setAddressMap} = actions;
export const selectAddressMapLocation = (state: RootState) => state.addressMap.location;
export const selectAddressMapLocationData = (state: RootState) => state.addressMap.locationData;

export default reducer;
