import ProfileAwardReceived from "view/ProfileAwardReceived";
import ProfileAwardReceivedDataProvider from "view/ProfileAwardReceived/context/ProfileAwardReceivedDataProvider";

function ProfileAwardReceivedPage() {
  return (
    <ProfileAwardReceivedDataProvider>
      <ProfileAwardReceived />
    </ProfileAwardReceivedDataProvider>
  );
}

export default ProfileAwardReceivedPage;
