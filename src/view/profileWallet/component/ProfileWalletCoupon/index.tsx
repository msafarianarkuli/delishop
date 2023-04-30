import ProfileWalletCouponCard from "view/profileWallet/component/ProfileWalletCoupon/ProfileWalletCouponCard";
import {useProfileWalletCouponData} from "view/profileWallet/context/ProfileWalletCouponDataProvider";

function ProfileWalletCoupon() {
  const {data} = useProfileWalletCouponData();

  return (
    <div>
      {data?.map((item) => {
        return (
          <ProfileWalletCouponCard
            key={item.id}
            id={item.id}
            title={item.displayname}
            value={`${Math.abs(item.value)}+ هزار تومان`}
            description={item.description}
          />
        );
      })}
    </div>
  );
}

export default ProfileWalletCoupon;
