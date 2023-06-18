import {EVendorsId, vendorsAddress} from "utils/Const";
import Vendor from "view/vendor";
import {GetStaticPaths, GetStaticProps} from "next";
import VendorDataProvider from "view/vendor/context/VendorDataProvider";
import VendorParamsProvider from "view/vendor/context/VendorParamsProvider";
import LogisticPriceProvider from "context/LogisticPriceProvider";

export interface IVendorPage {
  isRestaurant: boolean;
  isSupermarket: boolean;
  vendor: string;
  id: EVendorsId;
}

function VendorPage(props: IVendorPage) {
  return (
    <VendorParamsProvider {...props}>
      <LogisticPriceProvider>
        <VendorDataProvider>
          <Vendor />
        </VendorDataProvider>
      </LogisticPriceProvider>
    </VendorParamsProvider>
  );
}

export default VendorPage;

export const getStaticProps: GetStaticProps = async ({params}) => {
  const vendor = params?.vendor;
  const vendorId = vendorsAddress.find((item) => item.name === vendor);
  return {
    props: {
      vendor,
      id: vendorId?.id,
      isRestaurant: !!vendorId?.isRestaurant,
      isSupermarket: !!vendorId?.isSupermarket,
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
