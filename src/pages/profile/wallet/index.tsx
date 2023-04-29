import ProfileWallet from "view/profileWallet";
import ProfileWalletCouponDataProvider from "view/profileWallet/context/ProfileWalletCouponDataProvider";

function ProfileWalletPage() {
  return (
    <ProfileWalletCouponDataProvider>
      <ProfileWallet />
    </ProfileWalletCouponDataProvider>
  );
}

export default ProfileWalletPage;
