import React, {useState} from "react";
import RestaurantDetailImageHeader from "view/restaurantDetail/component/RestaurantDetailImageHeader";
import RestaurantDetailTitle from "view/restaurantDetail/component/RestaurantDetailTitle";
import RestaurantDetailDescription from "view/restaurantDetail/component/RestaurantDetailDescription";
import RestaurantDetailTime from "view/restaurantDetail/component/RestaurantDetailTime";
import RestaurantDetailDelivery from "view/restaurantDetail/component/RestaurantDetailDelivery";
import RestaurantDetailMoreInfo from "view/restaurantDetail/component/RestaurantDetailMoreInfo";
import RestaurantDetailTab from "view/restaurantDetail/component/RestaurantDetailTab";
import RestaurantDetailCard from "view/restaurantDetail/component/restaurantDetailCard/RestaurantDetailCard";
import RestaurantDetailListTag from "view/restaurantDetail/component/RestaurantDetailListTag";
import RestaurantDetailHeader from "view/restaurantDetail/component/RestaurantDetailHeader";
import RestaurantDetailSubmitBtn from "view/restaurantDetail/component/RestaurantDetailSubmitBtn";
import RestaurantDetailModal from "view/restaurantDetail/component/restaurantDetailModal/RestaurantDetailModal";
import styles from "view/restaurantDetail/restaurantDetail.module.scss";
import img from "assets/images/res-detail-card.png";

function RestaurantDetail() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <RestaurantDetailHeader />
      <RestaurantDetailImageHeader />
      <div className="pt-6 pb-5 border-b border-borderColor px-screenSpace">
        <RestaurantDetailTitle />
        <RestaurantDetailDescription />
      </div>
      <div className="flex items-center justify-center py-5 border-b border-borderColor px-screenSpace">
        <RestaurantDetailTime />
        <RestaurantDetailDelivery />
        <RestaurantDetailMoreInfo />
      </div>
      <div className="pt-6 px-screenSpace">
        <RestaurantDetailTab />
        <div className="mt-4 mb-[100px]">
          <RestaurantDetailListTag title="پرطرفدارها" />
          <RestaurantDetailCard
            image={img.src}
            title="ساندویچ ژامبون مرغ و گوشت ۷۰% ۵۰۰گرمی (سرد)"
            description="۵۰۰ گرم مخلوط ژامبون گوشت و مرغ ۷۰ درصد، گوجه، خیارشور، کاهو، سس مخصوص"
            coin={15}
            price={114500}
            count={0}
            onAddExtraItems={() => {
              setModal(true);
            }}
          />
        </div>
      </div>
      <RestaurantDetailSubmitBtn />
      <RestaurantDetailModal open={modal} onCancel={() => setModal(false)} />
      <div className={styles.restaurant_detail_gradient} />
    </>
  );
}

export default RestaurantDetail;
