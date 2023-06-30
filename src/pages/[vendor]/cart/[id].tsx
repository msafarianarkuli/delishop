import {GetStaticPaths, GetStaticProps} from "next";
import {vendorsAddress} from "utils/Const";
import VendorCartDetail from "view/vendorCartDetail";
import VendorCartDetailParamsProvider from "view/vendorCartDetail/context/VendorCartDetailParamsProvider";

export interface IVendorCartDetailPage {
  vendor: string;
  id: string;
}

function VendorCartDetailPage(props: IVendorCartDetailPage) {
  return (
    <VendorCartDetailParamsProvider {...props}>
      <VendorCartDetail />
    </VendorCartDetailParamsProvider>
  );
}

export default VendorCartDetailPage;

export const getStaticProps: GetStaticProps = async ({params}) => {
  const vendor = params?.vendor;
  const id = params?.id;
  const vendorData = vendorsAddress.find((item) => item.name === vendor);
  if (vendorData && vendorData?.isSupermarket && vendor && id && !Array.isArray(vendor) && !Array.isArray(id)) {
    return {
      props: {
        vendor,
        id,
      },
      revalidate: 60,
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
