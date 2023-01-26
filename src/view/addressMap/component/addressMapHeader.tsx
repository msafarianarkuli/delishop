import {AppHeader, AppHeaderBackBtn} from "components";
import {useRouter} from "next/router";

function AddressMapHeader() {
  const router = useRouter();
  return (
    <div className="fixed z-[10000] top-0 right-0 left-0 pointer-events-none">
      <AppHeader right={<AppHeaderBackBtn className="pointer-events-auto" onClick={() => router.back()} />} />
    </div>
  );
}

export default AddressMapHeader;
