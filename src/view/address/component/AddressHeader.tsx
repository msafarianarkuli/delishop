import {AppHeader, AppHeaderBackBtn} from "components";
import {useRouter} from "next/router";

function AddressHeader() {
  const router = useRouter();
  return (
    <div className="fixed z-10 top-0 right-0 left-0 header_background">
      <AppHeader body="آدرس های من" right={<AppHeaderBackBtn onClick={() => router.back()} />} />
    </div>
  );
}

export default AddressHeader;
