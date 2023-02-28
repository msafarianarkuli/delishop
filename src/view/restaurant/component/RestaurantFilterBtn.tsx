import {Button} from "antd";
import styles from "view/restaurant/restaurant.module.scss";
import {MouseEventHandler} from "react";
import classNames from "classnames";
import {IconClose} from "assets/icons";

interface IRestaurantFilterBtn {
  title: string;
  selected?: boolean;
  onClick?: MouseEventHandler;
}

function RestaurantFilterBtn({title, onClick, selected}: IRestaurantFilterBtn) {
  const container = classNames({
    [styles.restaurant_filter_btn]: true,
    [styles.restaurant_filter_btn_selected]: selected,
    [styles.restaurant_filter_btn_unselect]: !selected,
  });
  return (
    <Button onClick={onClick} className={container}>
      {title}
      {selected ? (
        <div className="flex items-center justify-center p-1 mr-2 bg-[#CD4B03] rounded-full">
          <IconClose className="w-2 h-2" />
        </div>
      ) : null}
    </Button>
  );
}

export default RestaurantFilterBtn;
