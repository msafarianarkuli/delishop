import {createContext, ReactNode, useContext} from "react";
import {IOrderCompletePage} from "pages/[vendor]/ordercomplete/[id]";

const initialState: IOrderCompletePage = {
  isRestaurant: false,
  isSupermarket: false,
  vendor: "",
  id: "",
};

const OrderCompleteParamsContext = createContext<IOrderCompletePage>(initialState);

interface IOrderCompleteParams extends IOrderCompletePage {
  children: ReactNode;
}

function OrderCompleteParamsProvider(props: IOrderCompleteParams) {
  const {children, ...other} = props;
  return <OrderCompleteParamsContext.Provider value={other}>{children}</OrderCompleteParamsContext.Provider>;
}

export default OrderCompleteParamsProvider;

export function useOrderCompleteParams() {
  return useContext(OrderCompleteParamsContext);
}
