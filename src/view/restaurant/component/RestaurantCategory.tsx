import React, {MouseEventHandler} from "react";
import {Button} from "antd";
import {IconCategory} from "assets/icons";
import styles from "view/restaurant/restaurant.module.scss";
import classNames from "classnames";

interface IRestaurantCategory {
  onClick: MouseEventHandler;
  count: number;
}

function RestaurantCategory({onClick, count}: IRestaurantCategory) {
  const icon = classNames({
    "w-5 h-auto ml-1": true,
    "text-iconColor": !count,
  });
  const container = classNames({
    [styles.restaurant_category_btn]: true,
    [styles.restaurant_category_btn_selected]: count,
    [styles.restaurant_category_btn_unselect]: !count,
  });
  return (
    <Button onClick={onClick} icon={<IconCategory className={icon} />} className={container}>
      همه دسته بندی
      {count ? (
        <div className="flex items-center justify-center w-5 h-5 mr-1 bg-[#CD4B03] rounded-full">{count}</div>
      ) : null}
    </Button>
  );
}

export default RestaurantCategory;
