import ProfileMainTabRoute from "components/appTabRoute/component/profileMainTabRoute/ProfileMainTabRoute";
import ProfileAwardReceivedList from "view/ProfileAwardReceived/component/ProfileAwardReceivedList";
import HomeHeader from "view/home/component/HomeHeader";

function ProfileAwardReceived() {
  return (
    <>
      <HomeHeader />
      <ProfileMainTabRoute active="awardreceived" />
      <ProfileAwardReceivedList />
    </>
  );
}

export default ProfileAwardReceived;
