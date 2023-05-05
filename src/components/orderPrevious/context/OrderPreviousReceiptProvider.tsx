import React, {createContext, Dispatch, ReactNode, useContext, useReducer} from "react";
import {TGetOrdersListResOrdersItemsProductKinds} from "types/interfaceOdrdersList";

const SET_DATA = "setData";
const CLOSE = "close";

interface IOrderPreviousReceiptProvider {
  open: boolean;
  data: TGetOrdersListResOrdersItemsProductKinds;
  totalPrice: number;
}

interface ISetOrderPreviousReceiptData {
  data: TGetOrdersListResOrdersItemsProductKinds;
  totalPrice: number;
}

interface IAction {
  type: string;
  payload?: any;
}

const initialState: IOrderPreviousReceiptProvider = {
  open: false,
  data: [],
  totalPrice: 0,
};

const OrderPreviousReceiptContext = createContext<IOrderPreviousReceiptProvider>(initialState);
const OrderPreviousReceiptAction = createContext<Dispatch<IAction>>(() => null);

function reducer(state: IOrderPreviousReceiptProvider, action: IAction) {
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

function OrderPreviousReceiptProvider({children}: {children: ReactNode}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <OrderPreviousReceiptContext.Provider value={state}>
      <OrderPreviousReceiptAction.Provider value={dispatch}>{children}</OrderPreviousReceiptAction.Provider>
    </OrderPreviousReceiptContext.Provider>
  );
}

export default OrderPreviousReceiptProvider;

export const setOrderPreviousReceiptData = (payload: ISetOrderPreviousReceiptData) => ({
  type: SET_DATA,
  payload,
});
export const setOrderPreviousReceiptClose = () => ({type: CLOSE});

export function useOrderPreviousReceipt() {
  return useContext(OrderPreviousReceiptContext);
}

export function useOrderPreviousReceiptAction() {
  return useContext(OrderPreviousReceiptAction);
}
