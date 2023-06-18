import {createContext, ReactNode, useContext} from "react";
import {IVendorCommentPage} from "pages/[vendor]/comment/[id]";

const initialState: IVendorCommentPage = {
  id: "",
  vendor: "",
};

const VendorCommentParamsContext = createContext<IVendorCommentPage>(initialState);

interface IVendorCommentParamsProvider extends IVendorCommentPage {
  children: ReactNode;
}

function VendorCommentParamsProvider(props: IVendorCommentParamsProvider) {
  const {children, ...other} = props;
  return <VendorCommentParamsContext.Provider value={other}>{children}</VendorCommentParamsContext.Provider>;
}

export default VendorCommentParamsProvider;

export function useVendorCommentParams() {
  return useContext(VendorCommentParamsContext);
}
