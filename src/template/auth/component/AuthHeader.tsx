import {IconRoundedRight} from "assets/icons";
import {useRouter} from "next/router";

interface ILoginHeader {
  title?: string;
}

function AuthHeader({title}: ILoginHeader) {
  const router = useRouter();
  return (
    <div className="flex items-center h-headerNormal px-4">
      <button onClick={() => router.back()}>
        <IconRoundedRight className="w-8 h-8 text-white drop-shadow-[-1px_4px_2px_#575F6B]" />
      </button>
      <div className="flex flex-1 justify-center items-center text-[15px] font-normal">{title}</div>
    </div>
  );
}

export default AuthHeader;
