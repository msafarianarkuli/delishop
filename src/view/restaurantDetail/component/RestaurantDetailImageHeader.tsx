import img1 from "assets/images/detail-header.png";

function RestaurantDetailImageHeader() {
  return (
    <div className="relative w-full pb-[45.6%]">
      <img src={img1.src} className="absolute inset-0 w-full h-full object-center object-cover" />
    </div>
  );
}

export default RestaurantDetailImageHeader;
