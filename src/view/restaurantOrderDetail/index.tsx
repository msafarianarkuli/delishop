import RestaurantOrderDetailHeader from "view/restaurantOrderDetail/component/RestaurantOrderDetailHeader";
import RestaurantOrderDetailAddress from "view/restaurantOrderDetail/component/RestaurantOrderDetailAddress";
import RestaurantOrderDetailDelivery from "view/restaurantOrderDetail/component/RestaurantOrderDetailDelivery";
import RestaurantOrderDetailRestaurantName from "view/restaurantOrderDetail/component/RestaurantOrderDetailRestaurantName";
import RestaurantOrderDetailOrder from "view/restaurantOrderDetail/component/RestaurantOrderDetailOrder";
import img from "assets/images/res-order-barger.png";
import RestaurantOrderDetailTotal from "view/restaurantOrderDetail/component/RestaurantOrderDetailTotal";
import RestaurantOrderDetailDescription from "view/restaurantOrderDetail/component/RestaurantOrderDetailDescription";
import RestaurantOrderDetailReceipt from "view/restaurantOrderDetail/component/RestaurantOrderDetailReceipt";
import imgLogo from "assets/images/res-order-logo.png";

const data = [
  {title: "مرغ سوخاری 5 تکه اسپایسی", image: img.src, price: 30000},
  {title: "مرغ سوخاری 5 تکه اسپایسی", image: img.src, price: 30000},
  {title: "مرغ سوخاری 5 تکه اسپایسی", image: img.src, price: 30000},
];

function RestaurantOrderDetail() {
  return (
    <>
      <RestaurantOrderDetailHeader />
      <div className="mt-headerNormal">
        <RestaurantOrderDetailAddress
          title="دفتر"
          address="کارگر شمالی نقاطع بلوار کشاورز، نبش 16 آذر ساختمان بهزاد واحد 208"
        />
        <RestaurantOrderDetailDelivery deliveryTime="15:00" />
        <RestaurantOrderDetailRestaurantName image={imgLogo.src} title="رستوران آریایی" address="وردآورد" />
        <RestaurantOrderDetailOrder order={data} />
        <RestaurantOrderDetailTotal price={70000} />
        <RestaurantOrderDetailDescription text="اسم ساندویچ ها روش نوشته بشه و هر کدوم به دو قسمت مساوی تقسیم شود از بین نوشیدنی ها دوغ نمیخوام خیلی خنک باشه ولی نوشابه و دلستر اینا سرد باشه" />
        <RestaurantOrderDetailReceipt receipt={321} />
      </div>
    </>
  );
}

export default RestaurantOrderDetail;
