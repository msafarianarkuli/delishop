import {createContext, ReactNode, useContext} from "react";
import {IVendorCartDetailPage} from "pages/[vendor]/cart/[id]";

const initialState: IVendorCartDetailPage = {
  vendor: "",
  id: "",
};

const VendorCartDetailParamsContext = createContext<IVendorCartDetailPage>(initialState);

interface IVendorCartDetailParams extends IVendorCartDetailPage {
  children: ReactNode;
}

function VendorCartDetailParamsProvider(props: IVendorCartDetailParams) {
  const {children, ...other} = props;
  return <VendorCartDetailParamsContext.Provider value={other}>{children}</VendorCartDetailParamsContext.Provider>;
}

export default VendorCartDetailParamsProvider;

export function useVendorCartDetailParams() {
  return useContext(VendorCartDetailParamsContext);
}
