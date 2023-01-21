import {useEffect, useRef} from "react";
import RestaurantDetailListTag from "view/restaurantDetail/component/RestaurantDetailListTag";
import RestaurantDetailCard from "view/restaurantDetail/component/restaurantDetailCard/RestaurantDetailCard";
import styles from "view/restaurantDetail/restaurantDetail.module.scss";
import img from "assets/images/res-detail-card.png";

interface IRestaurantDetailList {
  onClick: () => void;
}

const arr = Array.from(new Array(10), (_, i) => i + 1);

function RestaurantDetailList({onClick}: IRestaurantDetailList) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = ref.current! as HTMLDivElement;

    function scroll() {
      const diffTop = div.getBoundingClientRect().top;
      const tab = document.getElementById("restaurantDetailTab")!;
      if (diffTop > 125 && tab.classList.contains(styles.restaurant_detail_tab_fixed)) {
        tab.classList.remove(styles.restaurant_detail_tab_fixed);
      }
      if (diffTop <= 125 && !tab.classList.contains(styles.restaurant_detail_tab_fixed)) {
        tab.classList.add(styles.restaurant_detail_tab_fixed);
      }
    }

    document.addEventListener("scroll", scroll);

    return () => {
      document.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <div ref={ref} className="mb-[100px] px-screenSpace">
      <RestaurantDetailListTag title="پرطرفدارها" />
      {arr.map((item) => {
        return (
          <div key={item} className="mb-5">
            <RestaurantDetailCard
              image={img.src}
              title="ساندویچ ژامبون مرغ و گوشت ۷۰% ۵۰۰گرمی (سرد)"
              description="۵۰۰ گرم مخلوط ژامبون گوشت و مرغ ۷۰ درصد، گوجه، خیارشور، کاهو، سس مخصوص"
              coin={15}
              price={114500}
              count={0}
              onAddExtraItems={onClick}
            />
          </div>
        );
      })}
    </div>
  );
}

export default RestaurantDetailList;
