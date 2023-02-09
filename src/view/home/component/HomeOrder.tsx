import HomeOrderCard from "view/home/component/homeOrderCard";
import img from "assets/images/res-order-logo.png";

function HomeOrder() {
  return (
    <div className="px-screenSpace mt-5">
      <HomeOrderCard title="آریایی" address="وردآورد" deliveryTime="14:45" image={img.src} />
    </div>
  );
}

export default HomeOrder;
