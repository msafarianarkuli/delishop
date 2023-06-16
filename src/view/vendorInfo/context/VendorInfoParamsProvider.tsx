import {createContext, ReactNode, useContext} from "react";
import {IVendorInfoPage} from "pages/[vendor]/info/[id]";

const initialState: IVendorInfoPage = {
  isRestaurant: false,
  isSupermarket: false,
  id: "",
  vendor: "",
};

const VendorInfoParamsContext = createContext<IVendorInfoPage>(initialState);

interface IVendorInfoParamsProvider extends IVendorInfoPage {
  children: ReactNode;
}

function VendorInfoParamsProvider(props: IVendorInfoParamsProvider) {
  const {children, ...other} = props;
  return <VendorInfoParamsContext.Provider value={other}>{children}</VendorInfoParamsContext.Provider>;
}

export default VendorInfoParamsProvider;

export function useVendorInfoParams() {
  return useContext(VendorInfoParamsContext);
}
