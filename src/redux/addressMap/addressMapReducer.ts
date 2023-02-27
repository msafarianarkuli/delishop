import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";
import {IGetAddressFromMapRes} from "api/getAddressFromMap";
import {IMapPoint} from "components/map/Map";
import {RootState} from "redux/store";

interface ISetAddressMap {
  location?: IMapPoint | null;
  locationData?: IGetAddressFromMapRes | null;
}

interface IAddressMapReducer extends ISetAddressMap {
  isStorageLoaded: boolean;
}

const initialState: IAddressMapReducer = {
  location: null,
  locationData: null,
  isStorageLoaded: false,
};

export const addressMapLocalStorageKey = "addressMap";

const addressMapReducer = createSlice({
  name: "addressMap",
  initialState,
  reducers: {
    setAddressMap: (state, action: PayloadAction<ISetAddressMap>) => {
      state.locationData = action.payload.locationData;
      state.location = action.payload.location;
    },
    setAddressMapFromStorage: (state, action: PayloadAction<ISetAddressMap>) => {
      state.locationData = action.payload?.locationData || null;
      state.location = action.payload?.location || null;
      state.isStorageLoaded = true;
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

export const {setAddressMap, setAddressMapFromStorage} = actions;
export const selectAddressMap = (state: RootState) => state.addressMap;
export const selectAddressMapLocation = (state: RootState) => state.addressMap.location;
export const selectAddressMapLocationData = (state: RootState) => state.addressMap.locationData;

export default reducer;
