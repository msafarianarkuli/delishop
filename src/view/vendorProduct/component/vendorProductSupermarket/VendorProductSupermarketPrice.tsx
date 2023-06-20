import {Counter} from "components";

interface IVendorProductSupermarketPrice {
  price: number;
  count: number;
}
function VendorProductSupermarketPrice(props: IVendorProductSupermarketPrice) {
  const {count, price} = props;
  return (
    <div className="flex items-center justify-between mt-6">
      <div className="flex items-center font-medium">
        <span className="text-[20px]">{price.toLocaleString("en-US")}</span>
        <span className="mr-1 text-[17px] text-iconColor">تومان</span>
      </div>
      <Counter primaryType="supermarket" count={count} />
    </div>
  );
}

export default VendorProductSupermarketPrice;
