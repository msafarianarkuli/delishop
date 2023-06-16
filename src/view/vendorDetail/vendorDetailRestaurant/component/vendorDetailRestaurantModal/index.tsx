import {useCallback} from "react";
import {CustomModal} from "components";
import {
  setVendorDetailRestaurantExtraClose,
  useVendorDetailRestaurantExtra,
  useVendorDetailRestaurantExtraAction,
} from "view/vendorDetail/vendorDetailRestaurant/context/VendorDetailRestaurantExtraProvider";
import VendorDetailRestaurantModalBody from "view/vendorDetail/vendorDetailRestaurant/component/vendorDetailRestaurantModal/VendorDetailRestaurantModalBody";

function VendorDetailRestaurantModal() {
  const {isOpen} = useVendorDetailRestaurantExtra();
  const dispatch = useVendorDetailRestaurantExtraAction();

  const onCancel = useCallback(() => {
    dispatch(setVendorDetailRestaurantExtraClose());
  }, [dispatch]);

  return (
    <>
      <CustomModal
        onCancel={onCancel}
        open={isOpen}
        header={<div className="w-full text-[15px] text-center font-medium">افزودن موارد دیگر</div>}
        body={<VendorDetailRestaurantModalBody onClick={onCancel} />}
        classNameBody="px-0"
      />
    </>
  );
}

export default VendorDetailRestaurantModal;
