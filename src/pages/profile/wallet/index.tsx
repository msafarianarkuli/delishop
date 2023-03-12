import ProfileWallet from "view/profileWallet";
import ProfileWalletDataProvider from "view/profileWallet/context/ProfileWalletDataProvider";

function ProfileWalletPage() {
  return (
    <ProfileWalletDataProvider>
      <ProfileWallet />
    </ProfileWalletDataProvider>
  );
}

export default ProfileWalletPage;
