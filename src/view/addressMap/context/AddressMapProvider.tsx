import {createContext, Dispatch, ReactNode, useReducer} from "react";
import {IMapPoint} from "components/map/Map";
import {IGetAddressFromMapRes} from "api/getAddressFromMap";

const SET_CURRENT_LOCATION = "currentLocation";
const SET_ADDRESS = "address";
const SET_ADDRESS_LOADING = "loading";
const SET_LOCATION = "location";

interface IAddressMapProvider {
  children: ReactNode;
}

interface IAction {
  type: string;
  payload?: any;
}

interface IAddressMapContext {
  currentLocation?: IMapPoint;
  location?: IMapPoint;
  address?: string;
  addressData?: IGetAddressFromMapRes;
  addressLoading: boolean;
}

const initialState: IAddressMapContext = {
  addressLoading: false,
};

export const AddressMapContext = createContext<IAddressMapContext>(initialState);
export const AddressMapContextAction = createContext<Dispatch<IAction>>(() => null);

function reducer(state: IAddressMapContext, action: IAction) {
  switch (action.type) {
    case SET_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.payload,
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload?.formatted_address || "",
        addressData: action.payload,
      };
    case SET_ADDRESS_LOADING:
      return {
        ...state,
        addressLoading: action.payload,
      };
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
}

function AddressMapProvider({children}: IAddressMapProvider) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AddressMapContext.Provider value={state}>
      <AddressMapContextAction.Provider value={dispatch}>{children}</AddressMapContextAction.Provider>
    </AddressMapContext.Provider>
  );
}

export const setAddressMapContextCurrentLocation = (payload: IMapPoint) => ({type: SET_CURRENT_LOCATION, payload});
export const setAddressMapContextAddress = (payload?: IGetAddressFromMapRes) => ({type: SET_ADDRESS, payload});
export const setAddressMapContextAddressLoading = (payload: boolean) => ({type: SET_ADDRESS_LOADING, payload});
export const setAddressMapContextLocation = (payload: IMapPoint) => ({type: SET_LOCATION, payload});
export default AddressMapProvider;
