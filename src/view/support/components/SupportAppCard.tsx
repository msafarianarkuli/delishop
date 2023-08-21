import Image, {StaticImageData} from "next/image";
import Link from "next/link";

interface ISupportAppCard {
  link: string;
  name: string;
  icon: StaticImageData;
}

const SupportAppCard = (props: ISupportAppCard) => {
  const {link, name, icon} = props;
  return (
    <>
      <Link
        href={link}
        target="_blank"
        className="flex justify-between items-center my-4 bg-white w-64 px-4 py-4 rounded-lg border border-primary"
      >
        <span>پاسخ گویی در نرم افزار {name}</span>
        <Image src={icon} alt={name} width="30" height="30" />
      </Link>
    </>
  );
};

export default SupportAppCard;
