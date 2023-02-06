import {IconRoundedLeft} from "assets/icons";

interface IRestaurantOrderDetailRestaurantName {
  image: string;
  title: string;
  address: string;
}

function RestaurantOrderDetailRestaurantName(props: IRestaurantOrderDetailRestaurantName) {
  const {title, address, image} = props;
  return (
    <div className="flex items-center justify-between px-screenSpace mt-8 mb-5">
      <div className="flex items-center font-medium">
        <img src={image} className="w-[60px] h-[60px] object-center object-cover rounded-[6px]" />
        <span className="text-[17px] mx-2">{title}</span>
        <span className="text-[15px] text-textColorLight">({address})</span>
      </div>
      <IconRoundedLeft className="w-7 h-7 text-primary" />
    </div>
  );
}

export default RestaurantOrderDetailRestaurantName;
