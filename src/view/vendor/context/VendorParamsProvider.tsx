import React, {createContext, ReactNode, useContext} from "react";
import {IVendorPage} from "pages/[vendor]";
import {EVendorsId} from "utils/Const";

const initialState: IVendorPage = {
  isRestaurant: false,
  isSupermarket: false,
  vendor: "",
  id: EVendorsId.restaurant,
};

const VendorParamsContext = createContext<IVendorPage>(initialState);

interface IVendorParamsProvider extends IVendorPage {
  children: ReactNode;
}

function VendorParamsProvider(props: IVendorParamsProvider) {
  const {children, ...other} = props;
  return <VendorParamsContext.Provider value={other}>{children}</VendorParamsContext.Provider>;
}

export default VendorParamsProvider;

export function useVendorParams() {
  return useContext(VendorParamsContext);
}
