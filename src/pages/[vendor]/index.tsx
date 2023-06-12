import {vendorsAddress} from "utils/Const";
import Vendor from "view/vendor";
import {GetStaticPaths, GetStaticProps} from "next";
import VendorDataProvider from "view/vendor/context/VendorDataProvider";

function VendorPage() {
  return (
    <VendorDataProvider>
      <Vendor />
    </VendorDataProvider>
  );
}

export default VendorPage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = vendorsAddress.map((item) => ({params: {vendor: item.name}}));
  return {
    paths,
    fallback: false,
  };
};
