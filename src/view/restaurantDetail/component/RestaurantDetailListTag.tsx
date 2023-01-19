interface IRestaurantDetailListTag {
  title: string;
}

function RestaurantDetailListTag({title}: IRestaurantDetailListTag) {
  return (
    <div className="flex items-center mb-5">
      <div className="w-[7px] h-[7px] rounded-full bg-primary ml-1"></div>
      <div className="text-[16px] font-bold">{title}</div>
    </div>
  );
}

export default RestaurantDetailListTag;
