import {AppHeader, AppHeaderBackBtn, AppHeaderCoin, AppHeaderLocation} from "components";
import {useRouter} from "next/router";

function SupermarketDetailHeader() {
  const router = useRouter();
  return (
    <div className="fixed z-10 top-0 right-0 left-0 header_background">
      <AppHeader
        classNameContainer="border-b border-borderColor"
        right={<AppHeaderBackBtn onClick={() => router.back()} />}
        body={<AppHeaderLocation supermarket />}
        left={<AppHeaderCoin />}
      />
    </div>
  );
}

export default SupermarketDetailHeader;
