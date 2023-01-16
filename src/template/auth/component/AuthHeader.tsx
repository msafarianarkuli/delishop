import BackBtn from "components/backBtn/BackBtn";
import {useRouter} from "next/router";

interface ILoginHeader {
  title?: string;
}

function AuthHeader({title}: ILoginHeader) {
  const router = useRouter();
  return (
    <div className="flex items-center h-headerNormal px-4">
      <BackBtn onClick={() => router.back()} />
      <div className="flex flex-1 justify-center items-center text-[15px] font-medium">{title}</div>
    </div>
  );
}

export default AuthHeader;
