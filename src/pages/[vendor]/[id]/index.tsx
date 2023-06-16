import {GetStaticPaths, GetStaticProps} from "next";
import {vendorsAddress} from "utils/Const";
import VendorDetail from "view/vendorDetail";
import VendorDetailParamsProvider from "view/vendorDetail/context/VendorDetailParamsProvider";

export interface IVendorDetailPage {
  isRestaurant: boolean;
  isSupermarket: boolean;
  vendor: string;
  id: string;
}

function VendorDetailPage(props: IVendorDetailPage) {
  return (
    <VendorDetailParamsProvider {...props}>
      <VendorDetail />
    </VendorDetailParamsProvider>
  );
}

export default VendorDetailPage;

export const getStaticProps: GetStaticProps = async ({params}) => {
  const vendor = params?.vendor;
  const id = params?.id;
  const hasVendor = vendorsAddress.some((item) => item.name === vendor);
  if (!Array.isArray(vendor) && !Array.isArray(id) && hasVendor) {
    const vendorData = vendorsAddress.find((item) => item.name === vendor)!;
    return {
      props: {
        isRestaurant: !!vendorData.isRestaurant,
        isSupermarket: !!vendorData.isSupermarket,
        vendor,
        id,
      },
    };
  }
  return {
    notFound: true,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
