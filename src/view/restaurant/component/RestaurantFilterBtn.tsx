import {Button} from "antd";
import styles from "view/restaurant/restaurant.module.scss";
import {MouseEventHandler} from "react";

interface IRestaurantFilterBtn {
  title: string;
  onClick?: MouseEventHandler;
}

function RestaurantFilterBtn({title, onClick}: IRestaurantFilterBtn) {
  return <Button className={styles.restaurant_filter_btn}>{title}</Button>;
}

export default RestaurantFilterBtn;
