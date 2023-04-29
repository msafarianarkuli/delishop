import React from "react";
import ProfileWalletCouponCard from "view/profileWallet/component/ProfileWalletCoupon/ProfileWalletCouponCard";

const data = Array.from(new Array(10), (_, i) => i + 1);

function ProfileWalletCoupon() {
  return (
    <div>
      {data.map((item) => {
        return (
          <ProfileWalletCouponCard
            key={item}
            title="افزایش اعتبار کیف پول"
            value="50+ هزارتومان"
            description="5000 سکه مورد نیاز"
          />
        );
      })}
    </div>
  );
}

export default ProfileWalletCoupon;
