import {TDataCustomSwiper} from "components/customSwiper/CustomSwiper";
import img from "assets/images/supermarket_product_detail.png";
import {ProductDetailSwiper} from "components";

const data: TDataCustomSwiper = [
  {
    title: 1,
    image: img.src,
  },
  {
    title: 2,
    image: img.src,
  },
  {
    title: 3,
    image: img.src,
  },
  {
    title: 4,
    image: img.src,
  },
];

function VendorProductSupermarketSwiper() {
  return <ProductDetailSwiper data={data} />;
}

export default VendorProductSupermarketSwiper;
