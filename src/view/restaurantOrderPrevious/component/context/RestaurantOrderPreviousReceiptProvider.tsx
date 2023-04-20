import React, {createContext, Dispatch, ReactNode, useContext, useReducer} from "react";
import {TGetOrdersListResOrdersItemsProductKinds} from "types/interfaceOdrdersList";

const SET_DATA = "setData";
const CLOSE = "close";

interface IRestaurantOrderPreviousReceiptProvider {
  open: boolean;
  data: TGetOrdersListResOrdersItemsProductKinds;
  totalPrice: number;
}

interface ISetRestaurantOrderPreviousReceiptData {
  data: TGetOrdersListResOrdersItemsProductKinds;
  totalPrice: number;
}

interface IAction {
  type: string;
  payload?: any;
}

const initialState: IRestaurantOrderPreviousReceiptProvider = {
  open: false,
  data: [],
  totalPrice: 0,
};

const RestaurantOrderPreviousReceiptContext = createContext<IRestaurantOrderPreviousReceiptProvider>(initialState);
const RestaurantOrderPreviousReceiptAction = createContext<Dispatch<IAction>>(() => null);

function reducer(state: IRestaurantOrderPreviousReceiptProvider, action: IAction) {
  switch (action.type) {
    case SET_DATA:
      return {
        open: true,
        data: action.payload.data,
        totalPrice: action.payload.totalPrice,
      };
    case CLOSE:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
}

function RestaurantOrderPreviousReceiptProvider({children}: {children: ReactNode}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <RestaurantOrderPreviousReceiptContext.Provider value={state}>
      <RestaurantOrderPreviousReceiptAction.Provider value={dispatch}>
        {children}
      </RestaurantOrderPreviousReceiptAction.Provider>
    </RestaurantOrderPreviousReceiptContext.Provider>
  );
}

export default RestaurantOrderPreviousReceiptProvider;

export const setRestaurantOrderPreviousReceiptData = (payload: ISetRestaurantOrderPreviousReceiptData) => ({
  type: SET_DATA,
  payload,
});
export const setRestaurantOrderPreviousReceiptClose = () => ({type: CLOSE});

export function useRestaurantOrderPreviousReceipt() {
  return useContext(RestaurantOrderPreviousReceiptContext);
}

export function useRestaurantOrderPreviousReceiptAction() {
  return useContext(RestaurantOrderPreviousReceiptAction);
}
