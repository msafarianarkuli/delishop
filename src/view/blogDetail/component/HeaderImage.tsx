import {AppHeaderBackBtn} from "components";
import {useRouter} from "next/router";

interface IHeaderImage {
  image?: string;
}

const HeaderImage = (props: IHeaderImage) => {
  const router = useRouter();
  return (
    <>
      <div className="relative w-full pb-[60%]">
        <img src={props.image} className="absolute inset-0 w-full h-full object-center object-cover" />
        <AppHeaderBackBtn className="absolute p-2" type="white" onClick={() => router.back()} />
      </div>
    </>
  );
};

export default HeaderImage;
