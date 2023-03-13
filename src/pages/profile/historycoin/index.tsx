import ProfileHistoryCoin from "view/profileHistorycoin";
import ProfileHistoryCoinDataProvider from "view/profileHistorycoin/context/ProfileHistoryCoinDataProvider";

function ProfileHistoryCoinPage() {
  return (
    <ProfileHistoryCoinDataProvider>
      <ProfileHistoryCoin />
    </ProfileHistoryCoinDataProvider>
  );
}

export default ProfileHistoryCoinPage;
