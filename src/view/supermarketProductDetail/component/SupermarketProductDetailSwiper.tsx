import {ProductDetailSwiper} from "components";
import {TDataCustomSwiper} from "components/customSwiper/CustomSwiper";
import img from "assets/images/supermarket_product_detail.png";

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

function SupermarketProductDetailSwiper() {
  return <ProductDetailSwiper data={data} />;
}

export default SupermarketProductDetailSwiper;
