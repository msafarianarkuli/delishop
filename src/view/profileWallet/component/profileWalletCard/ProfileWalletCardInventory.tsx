import {useProfileWalletData} from "view/profileWallet/context/ProfileWalletDataProvider";

function ProfileWalletCardInventory() {
  const {data} = useProfileWalletData();
  return (
    <>
      <div>موجودی کیف پول شما</div>
      <div className="text-center text-[30px] font-light my-5">
        <span>{data?.toLocaleString("en-US")}</span>
        <span className="mr-2">تومان</span>
      </div>
    </>
  );
}

export default ProfileWalletCardInventory;
