import {CustomModal} from "components";
import RestaurantDetailModalBody from "view/restaurantDetail/component/restaurantDetailModal/RestaurantDetailModalBody";
import {MouseEventHandler} from "react";

interface IRestaurantDetailModalMore {
  open: boolean;
  onCancel: MouseEventHandler;
}

function RestaurantDetailModal(props: IRestaurantDetailModalMore) {
  const {open, onCancel} = props;
  return (
    <>
      <CustomModal
        onCancel={onCancel}
        open={open}
        header={<div className="w-full text-[15px] text-center font-medium">افزودن موارد دیگر</div>}
        body={<RestaurantDetailModalBody onClick={onCancel} />}
        classNameBody="px-0"
      />
    </>
  );
}

export default RestaurantDetailModal;
