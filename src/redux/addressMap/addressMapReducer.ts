import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";
import {IGetAddressFromMapRes} from "api/getAddressFromMap";
import {IMapPoint} from "components/map/Map";
import {RootState} from "redux/store";
import {IGetUserAddressesListAddressesItem} from "types/interfaceUserAddress";

interface ISetAddressMap {
  location?: IMapPoint | null;
  locationData?: IGetAddressFromMapRes | null;
}

type TSetUserAddress = IGetUserAddressesListAddressesItem | null;

interface IAddressMapReducer extends ISetAddressMap {
  isStorageLoaded: boolean;
  isUserAddressStorageLoaded: boolean;
  userAddress?: TSetUserAddress;
}

const initialState: IAddressMapReducer = {
  location: null,
  locationData: null,
  isStorageLoaded: false,
  isUserAddressStorageLoaded: false,
};

export const addressMapLocalStorageKey = "addressMap";
export const userAddressLocalStorageKey = "userAddress";

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
    setUserAddress: (state, action: PayloadAction<TSetUserAddress>) => {
      state.userAddress = action.payload;
    },
    setUserAddressFromStorage: (state, action: PayloadAction<TSetUserAddress>) => {
      state.userAddress = action?.payload || null;
      state.isUserAddressStorageLoaded = true;
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

export const {setAddressMap, setAddressMapFromStorage, setUserAddress, setUserAddressFromStorage} = actions;
export const selectAddressMap = (state: RootState) => state.addressMap;
export const selectAddressMapLocationData = (state: RootState) => state.addressMap.locationData;
export const selectUserAddress = (state: RootState) => state.addressMap.userAddress;

export default reducer;
