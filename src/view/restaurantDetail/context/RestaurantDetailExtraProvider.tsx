import React, {createContext, Dispatch, useContext, useReducer} from "react";
import {IGetVendorDetailMenusGroupsProductsExtras} from "types/interfaceVendorDetail";

interface IRestaurantDetailExtra {
  data?: IGetVendorDetailMenusGroupsProductsExtras[];
  isOpen: boolean;
}

interface IAction {
  type: string;
  payload?: any;
}

const initialState: IRestaurantDetailExtra = {
  data: [],
  isOpen: false,
};

export const SET_DATA = "data";
export const CLOSE = "close";

const RestaurantDetailExtraContext = createContext<IRestaurantDetailExtra>(initialState);
const RestaurantDetailExtraAction = createContext<Dispatch<IAction>>(() => null);

function reducer(state: IRestaurantDetailExtra, action: IAction): IRestaurantDetailExtra {
  switch (action.type) {
    case SET_DATA:
      return {
        isOpen: true,
        data: action.payload,
      };
    case CLOSE:
      return {
        isOpen: false,
        data: [],
      };
    default:
      return state;
  }
}

function RestaurantDetailExtraProvider({children}: {children: JSX.Element[]}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <RestaurantDetailExtraContext.Provider value={state}>
      <RestaurantDetailExtraAction.Provider value={dispatch}>{children}</RestaurantDetailExtraAction.Provider>
    </RestaurantDetailExtraContext.Provider>
  );
}

export const setRestaurantDetailExtraData = (payload: IGetVendorDetailMenusGroupsProductsExtras[]) => ({
  type: SET_DATA,
  payload,
});

export const setRestaurantDetailExtraClose = () => ({type: CLOSE});

export default RestaurantDetailExtraProvider;

export function useRestaurantDetailExtra() {
  return useContext(RestaurantDetailExtraContext);
}

export function useRestaurantDetailExtraAction() {
  return useContext(RestaurantDetailExtraAction);
}
