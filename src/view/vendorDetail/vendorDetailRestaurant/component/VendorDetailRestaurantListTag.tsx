interface IRestaurantDetailListTag {
  id: string;
  title: string;
}

function VendorDetailRestaurantListTag({title, id}: IRestaurantDetailListTag) {
  return (
    <div id={id} className="flex items-center mb-5">
      <div className="w-[7px] h-[7px] rounded-full bg-primary ml-1"></div>
      <div className="text-[16px] font-bold">{title}</div>
    </div>
  );
}

export default VendorDetailRestaurantListTag;
