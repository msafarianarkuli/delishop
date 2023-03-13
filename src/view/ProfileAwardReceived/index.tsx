import {ProfileWalletTabRoute} from "components";
import ProfileWalletAppHeader from "components/appHeader/component/ProfileWalletAppHeader";
import ProfileAwardReceivedList from "view/ProfileAwardReceived/component/ProfileAwardReceivedList";

function ProfileAwardReceived() {
  return (
    <>
      <ProfileWalletAppHeader />
      <ProfileWalletTabRoute active="awardReceived" />
      <ProfileAwardReceivedList />
    </>
  );
}

export default ProfileAwardReceived;
