import {createContext, Dispatch, ReactNode, useReducer} from "react";
import {IMapPoint} from "components/map/Map";

const SET_CURRENT_LOCATION = "currentLocation";
const SET_ADDRESS = "address";
const SET_ADDRESS_LOADING = "loading";

interface IAddressMapProvider {
  children: ReactNode;
}

interface IAction {
  type: string;
  payload?: any;
}

interface IAddressMapContext {
  currentLocation?: IMapPoint;
  address?: string;
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
        address: action.payload,
      };
    case SET_ADDRESS_LOADING:
      return {
        ...state,
        addressLoading: action.payload,
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

export const setAddressMapCurrentLocation = (payload: IMapPoint) => ({type: SET_CURRENT_LOCATION, payload});
export const setAddressMapAddress = (payload: string) => ({type: SET_ADDRESS, payload});
export const setAddressMapAddressLoading = (payload: boolean) => ({type: SET_ADDRESS_LOADING, payload});
export default AddressMapProvider;
