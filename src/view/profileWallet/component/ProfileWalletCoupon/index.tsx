import ProfileWalletCouponCard from "view/profileWallet/component/ProfileWalletCoupon/ProfileWalletCouponCard";
import {useProfileWalletCouponData} from "view/profileWallet/context/ProfileWalletCouponDataProvider";

function ProfileWalletCoupon() {
  const {data} = useProfileWalletCouponData();
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-primary rounded-full"></div>
        <p className="my-4">تبدیل سکه به جایزه</p>
      </div>
      {data?.map((item) => {
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
