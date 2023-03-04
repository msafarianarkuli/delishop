import {CustomModal} from "components";
import RestaurantDetailModalBody from "view/restaurantDetail/component/restaurantDetailModal/RestaurantDetailModalBody";
import {useCallback} from "react";
import {
  setRestaurantDetailExtraClose,
  useRestaurantDetailExtra,
  useRestaurantDetailExtraAction,
} from "view/restaurantDetail/context/RestaurantDetailExtraProvider";

function RestaurantDetailModal() {
  const {isOpen} = useRestaurantDetailExtra();
  const dispatch = useRestaurantDetailExtraAction();

  const onCancel = useCallback(() => {
    dispatch(setRestaurantDetailExtraClose());
  }, [dispatch]);

  return (
    <>
      <CustomModal
        onCancel={onCancel}
        open={isOpen}
        header={<div className="w-full text-[15px] text-center font-medium">افزودن موارد دیگر</div>}
        body={<RestaurantDetailModalBody onClick={onCancel} />}
        classNameBody="px-0"
      />
    </>
  );
}

export default RestaurantDetailModal;
