import ProfileWalletCouponCard from "view/profileWallet/component/ProfileWalletCoupon/ProfileWalletCouponCard";
import {useProfileWalletCouponData} from "view/profileWallet/context/ProfileWalletCouponDataProvider";

function ProfileWalletCoupon() {
  const {data} = useProfileWalletCouponData();
  console.log(data);
  return (
    <div>
      {data?.map((item) => {
        console.log("first", item);
        return (
          <ProfileWalletCouponCard
            key={item.id}
            id={item.id}
            title={item.displayname}
            value={`${item.name.split("-")[1].slice(0, -4)}+ هزار تومان`}
            description={item.description}
            name={item.name}
          />
        );
      })}
    </div>
  );
}

export default ProfileWalletCoupon;
