import {useRouter} from "next/router";
import {AppHeader, AppHeaderBackBtn, AppHeaderCoin} from "components/index";

function ProfileWalletAppHeader() {
  const router = useRouter();
  return (
    <div className="fixed z-10 top-0 right-0 left-0 header_background">
      <AppHeader right={<AppHeaderBackBtn onClick={() => router.back()} />} left={<AppHeaderCoin coin={9610} />} />
    </div>
  );
}

export default ProfileWalletAppHeader;
