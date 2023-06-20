import {createContext, ReactNode, useContext} from "react";
import {IVendorProductPage} from "pages/[vendor]/product/[id]";

const initialState: IVendorProductPage = {
  isRestaurant: false,
  isSupermarket: false,
  vendor: "",
  id: "",
};

const VendorProductParamsContext = createContext<IVendorProductPage>(initialState);

interface IVendorOrderActiveParams extends IVendorProductPage {
  children: ReactNode;
}

function VendorProductParamsProvider(props: IVendorOrderActiveParams) {
  const {children, ...other} = props;
  return <VendorProductParamsContext.Provider value={other}>{children}</VendorProductParamsContext.Provider>;
}

export default VendorProductParamsProvider;

export function useVendorProductParams() {
  return useContext(VendorProductParamsContext);
}
