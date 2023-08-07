import OrderCompleteVendorDetailDataProvider from "view/orderComplete/context/OrderCompleteVendorDetailDataProvider";
import OrderCompleteProvider from "view/orderComplete/context/OrderCompleteProvider";
import OrderCompleteAddressProvider from "view/orderComplete/context/OrderCompleteAddressProvider";
import LogisticPriceProvider from "context/LogisticPriceProvider";
import OrderComplete from "view/orderComplete";
import {vendorsAddress} from "utils/Const";
import {GetStaticPaths, GetStaticProps} from "next";
import OrderCompleteParamsProvider from "view/orderComplete/context/OrderCompleteParamsProvider";

export interface IOrderCompletePage {
  vendor: string;
  id: string;
  isRestaurant: boolean;
  isSupermarket: boolean;
}

function OrderCompletePage(props: IOrderCompletePage) {
  return (
    <OrderCompleteParamsProvider {...props}>
      <OrderCompleteVendorDetailDataProvider>
        <OrderCompleteProvider>
          <OrderCompleteAddressProvider>
            <LogisticPriceProvider>
              <OrderComplete />
            </LogisticPriceProvider>
          </OrderCompleteAddressProvider>
        </OrderCompleteProvider>
      </OrderCompleteVendorDetailDataProvider>
    </OrderCompleteParamsProvider>
  );
}

export default OrderCompletePage;

export const getStaticProps: GetStaticProps = async ({params}) => {
  const vendor = params?.vendor;
  const id = params?.vendor;
  const hasVendor = vendorsAddress.some((item) => item.name === vendor);
  if (hasVendor && vendor && id && !Array.isArray(id) && !Array.isArray(vendor)) {
    const vendorData = vendorsAddress.find((item) => item.name === vendor);
    return {
      props: {
        vendor,
        id,
        isRestaurant: !!vendorData?.isRestaurant,
        isSupermarket: !!vendorData?.isSupermarket,
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
