import {Counter} from "components";

interface ISupermarketProductDetailPrice {
  price: number;
  count: number;
}

function SupermarketProductDetailPrice(props: ISupermarketProductDetailPrice) {
  const {count, price} = props;
  return (
    <div className="flex items-center justify-between mt-6">
      <div className="flex items-center font-medium">
        <span className="text-[20px]">{price.toLocaleString("en-US")}</span>
        <span className="mr-1 text-[17px] text-iconColor">تومان</span>
      </div>
      <Counter primaryType="supermarket" initialValue={count} />
    </div>
  );
}

export default SupermarketProductDetailPrice;
