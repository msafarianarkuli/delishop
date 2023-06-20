import {EVendorsId} from "utils/Const";
import {createContext, ReactNode, useContext} from "react";
import {IVendorSearchPage} from "pages/[vendor]/search";

const initialState: IVendorSearchPage = {
  vendor: "",
  id: EVendorsId.restaurant,
};

const VendorSearchParamsContext = createContext<IVendorSearchPage>(initialState);

interface IVendorOrderActiveParams extends IVendorSearchPage {
  children: ReactNode;
}

function VendorSearchParamsProvider(props: IVendorOrderActiveParams) {
  const {children, ...other} = props;
  return <VendorSearchParamsContext.Provider value={other}>{children}</VendorSearchParamsContext.Provider>;
}

export default VendorSearchParamsProvider;

export function useVendorSearchParams() {
  return useContext(VendorSearchParamsContext);
}
