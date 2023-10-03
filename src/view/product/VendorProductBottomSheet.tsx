import {useEffect, useRef, useState} from "react";
import {DrawerProps} from "antd";
import BottomSheet from "components/customDrawer/BottomSheet";
import Image from "next/image";
import {addComma, roundPrice} from "utils/utils";
import {Counter} from "components";

interface IVendorFilterBottomSheet {
  data: {};
  open: boolean;
  isRestaurant?: boolean;
  onClose: DrawerProps["onClose"];
}

function VendorFilterBottomSheetList({data, isRestaurant}: any) {
  const product = data;
  const productKind = isRestaurant
    ? product?.productKinds?.length > 0
      ? product?.productKinds[0]
      : ""
    : product?.productKind?.length > 0
    ? product?.productKind[0]
    : "";
  const addedPercent = isRestaurant ? product?.price_class / 100 : product?.priceClass / 100;
  const finalPrice = (productKind.price + productKind.price * addedPercent) / 10;
  const discountPrice = roundPrice(finalPrice - (finalPrice * product?.discount_num) / 100);

  return (
    <div className="py-4 max-w-lg mx-auto relative h-[380px]">
      <Image
        src={productKind?.photo_igu}
        alt=""
        width={200}
        height={200}
        className="mx-auto mb-4 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] rounded-[50px]"
      />
      <p className="text-base font-bold text-textColor">{product?.displayname}</p>
      <p className="text-textColor mt-2 mb-4 min-h-[50px]">{product?.description_te}</p>

      <div className="flex justify-between items-center">
        <div className="absolute bottom-0 mt-8">
          {product?.discount_num ? (
            <div className="flex">
              <div className="flex justify-center items-center bg-primary rounded-lg text-white text-[11px] w-[36px] pt-1 ml-2">
                {product?.discount_num} %
              </div>
              <span className="line-through">{addComma(roundPrice(finalPrice)?.toString())}</span>
            </div>
          ) : null}
          <div>
            <span className="font-bold">{addComma(discountPrice?.toString())}</span>
            <span className="text-textColorLight"> تومان</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0">
          <Counter
            disabled={false}
            count={1}
            stock={product?.count}
            // className={counterClassNames}
            primaryType="default"
            showMinusOnlyPositiveNumber
            showNumberOnlyPositiveNumber
            // onAddClick={onAddClick}
            // onMinusClick={onMinusClick}
          />
        </div>
      </div>
    </div>
  );
}

function VendorProductBottomSheet(props: IVendorFilterBottomSheet) {
  const {open, onClose, data, isRestaurant} = props;

  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = ref.current as HTMLDivElement;
    if (div.scrollHeight) {
      const tmpHeight = div.scrollHeight + 300;
      setHeight(Math.min(tmpHeight, 460));
    }
  }, [data]);

  return (
    <>
      <div ref={ref} className="fixed -right-[100%]">
        <VendorFilterBottomSheetList data={data} />
      </div>
      <BottomSheet open={open} onClose={onClose} title="جزئیات محصول" height={height} isProduct={true}>
        <VendorFilterBottomSheetList data={data} isRestaurant={isRestaurant} />
      </BottomSheet>
    </>
  );
}

export default VendorProductBottomSheet;
