import {IVendorOrderActivePage} from "pages/[vendor]/order/active";
import {createContext, ReactNode, useContext} from "react";
import {EVendorsId} from "utils/Const";

const initialState: IVendorOrderActivePage = {
  vendor: "",
  id: EVendorsId.restaurant,
};

const VendorOrderActiveParamsContext = createContext<IVendorOrderActivePage>(initialState);

interface IVendorOrderActiveParams extends IVendorOrderActivePage {
  children: ReactNode;
}

function VendorOrderActiveParamsProvider(props: IVendorOrderActiveParams) {
  const {children, ...other} = props;
  return <VendorOrderActiveParamsContext.Provider value={other}>{children}</VendorOrderActiveParamsContext.Provider>;
}

export default VendorOrderActiveParamsProvider;

export function useVendorOrderActiveParams() {
  return useContext(VendorOrderActiveParamsContext);
}
