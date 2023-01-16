import {IconRoundedRight} from "assets/icons";
import {useRouter} from "next/router";

interface ILoginHeader {
  title?: string;
}

function LoginHeader({title}: ILoginHeader) {
  const router = useRouter();
  return (
    <div className="flex items-center h-[56px] px-4">
      <button onClick={() => router.back()}>
        <IconRoundedRight className="w-8 h-8 text-white drop-shadow-[-1px_4px_2px_#575F6B]" />
      </button>
      <div className="flex flex-1 justify-center items-center">{title}</div>
    </div>
  );
}

export default LoginHeader;
