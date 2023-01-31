import React, {useState} from "react";
import RestaurantCompleteTitle from "view/restaurantComplete/component/RestaurantCompleteTitle";
import {IconRoundedLeft} from "assets/icons";
import RestaurantCompleteAddressCard from "view/restaurantComplete/component/restaurantCompleteAddressCard/RestaurantCompleteAddressCard";

const data = [
  {
    id: 1,
    title: "دفتر",
    address: "بلوار کشاورز، نبش 16 آذر واحد 209",
    point: {title: "لوکیشن من", lat: 35.704431, lng: 51.392746},
  },
  {
    id: 2,
    title: "دریافت حضوری",
    address: "رستوران آریایی",
    point: {title: "لوکیشن من", lat: 35.712123, lng: 51.407212},
  },
];

function RestaurantCompleteAddress() {
  const [address, setAddress] = useState(1);
  return (
    <div className="mt-headerNormal">
      <RestaurantCompleteTitle
        title="روش تحویل سفارش"
        left={
          <div className="flex items-center text-primary font-medium">
            <div>تغییر آدرس</div>
            <IconRoundedLeft className="w-5 h-5" />
          </div>
        }
      />
      <div className="px-screenSpace">
        {data.map((item, index) => {
          return (
            <RestaurantCompleteAddressCard
              key={index}
              id={item.id.toString()}
              title={item.title}
              address={item.address}
              point={item.point}
              value={item.id === address}
              onChange={() => {
                setAddress(item.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RestaurantCompleteAddress;
