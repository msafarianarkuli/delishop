import React from "react";
import RestaurantCommentItem from "view/restaurantComment/component/RestaurantCommentItem";
import {useRestaurantCommentData} from "view/restaurantComment/context/RestaurantCommentDataProvider";

function RestaurantCommentList() {
  const {data} = useRestaurantCommentData();

  return (
    <>
      {data?.comments.map((item) => {
        return (
          <div key={item.id.toString()} className="mb-5">
            <RestaurantCommentItem
              name={item.name}
              comment={item.comment}
              date={item.updated_at}
              star={item.overallrate_num}
              tag={item.order_details.products}
              adminAnswer={item.admin_reply}
              vendorAnswer={item.vendor_reply}
            />
          </div>
        );
      })}
    </>
  );
}

export default RestaurantCommentList;
