import React, {createContext, ReactNode, useContext} from "react";
import {IVendorDetailPage} from "pages/[vendor]/[id]";

const initialState: IVendorDetailPage = {
  id: "",
  isRestaurant: false,
  isSupermarket: false,
  vendor: "",
};

const VendorDetailParamsContext = createContext<IVendorDetailPage>(initialState);

interface IVendorDetailParamsProvider extends IVendorDetailPage {
  children: ReactNode;
}

function VendorDetailParamsProvider(props: IVendorDetailParamsProvider) {
  const {children, ...other} = props;

  return <VendorDetailParamsContext.Provider value={other}>{children}</VendorDetailParamsContext.Provider>;
}

export default VendorDetailParamsProvider;

export function useVendorDetailParams() {
  return useContext(VendorDetailParamsContext);
}
