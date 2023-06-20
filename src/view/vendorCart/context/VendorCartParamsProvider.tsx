import {createContext, ReactNode, useContext} from "react";
import {EVendorsId} from "utils/Const";
import {IVendorCartPage} from "pages/[vendor]/cart";

const initialState: IVendorCartPage = {
  vendor: "",
  id: EVendorsId.restaurant,
};

const VendorCartParamsContext = createContext<IVendorCartPage>(initialState);

interface IVendorCartParams extends IVendorCartPage {
  children: ReactNode;
}

function VendorCartParamsProvider(props: IVendorCartParams) {
  const {children, ...other} = props;
  return <VendorCartParamsContext.Provider value={other}>{children}</VendorCartParamsContext.Provider>;
}

export default VendorCartParamsProvider;

export function useVendorCartParams() {
  return useContext(VendorCartParamsContext);
}
