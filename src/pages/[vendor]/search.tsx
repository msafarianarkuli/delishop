import VendorSearch from "view/vendorSearch";
import {EVendorsId, vendorsAddress} from "utils/Const";
import VendorSearchParamsProvider from "view/vendorSearch/context/VendorSearchParamsProvider";
import {GetStaticPaths, GetStaticProps} from "next";

export interface IVendorSearchPage {
  vendor: string;
  id: EVendorsId;
}

function VendorSearchPage(props: IVendorSearchPage) {
  return (
    <VendorSearchParamsProvider {...props}>
      <VendorSearch />
    </VendorSearchParamsProvider>
  );
}

export default VendorSearchPage;

export const getStaticProps: GetStaticProps = async ({params}) => {
  const vendor = params?.vendor;
  const vendorId = vendorsAddress.find((item) => item.name === vendor);
  return {
    props: {
      vendor,
      id: vendorId?.id,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = vendorsAddress.map((item) => ({params: {vendor: item.name}}));
  return {
    paths,
    fallback: false,
  };
};
