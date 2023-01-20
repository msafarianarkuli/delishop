import React, {MouseEventHandler} from "react";
import {Button} from "antd";
import {IconCategory} from "assets/icons";
import styles from "view/restaurant/restaurant.module.scss";

interface IRestaurantCategory {
  onClick: MouseEventHandler;
}

function RestaurantCategory({onClick}: IRestaurantCategory) {
  return (
    <Button
      onClick={onClick}
      icon={<IconCategory className="w-5 h-auto text-iconColor ml-1" />}
      className={styles.restaurant_category_btn}
    >
      همه دسته بندی
    </Button>
  );
}

export default RestaurantCategory;
